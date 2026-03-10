import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Simple polyfill to read the manifest in pure Node ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

// Read the manifest directly via a fast regex/eval (since this is internal trusted code) to avoid TS compilation overhead
const manifestContent = fs.readFileSync(path.join(REPO_ROOT, 'src', 'site', 'assets', 'imageManifest.ts'), 'utf-8');
const manifestMatch = manifestContent.match(/export const IMAGE_MANIFEST: ImageDemand\[\] = (\[[\s\S]*?\]);/);
let MANIFEST = [];
if (manifestMatch && manifestMatch[1]) {
  try {
    // using new Function to parse the TS array structure safely (stripping types via regex isn't strictly needed for simple objects)
    const rawArray = manifestMatch[1]
      .replace(/usage:\s*'[^']+',/g, '') // remove usage type annotations if any
      .replace(/targetRelPath/g, '"targetRelPath"')
      .replace(/id:/g, '"id":')
      .replace(/width:/g, '"width":')
      .replace(/height:/g, '"height":')
      .replace(/seed:/g, '"seed":')
      .replace(/prompt:/g, '"prompt":')
      .replace(/negativePrompt:/g, '"negativePrompt":');
      
    // Expose the global constants needed for eval
    const GLOBAL_PROMPT = "Photorealistic architectural photography, natural lighting, premium stone materials, Riyadh limestone, warm beige stone, clean modern lines, no text, no watermark, no logo, no CGI, no render, no illustration. DSLR look, realistic lens, sharp details, balanced contrast.";
    const GLOBAL_NEGATIVE = "text, watermark, logo, brand mark, letters, typography, UI, screenshot, illustration, cartoon, CGI, 3d render, unreal engine, faces, people close-up, distorted geometry, extra limbs, oversharpen, overexposed, noisy grain, posterization";
    
    MANIFEST = eval(`(${rawArray})`);
  } catch (e) {
    console.error("Failed to parse imageManifest.ts", e);
    process.exit(1);
  }
}

const SD_API_URL = "http://127.0.0.1:7860/sdapi/v1/txt2img";

async function checkApi() {
  try {
    const res = await fetch("http://127.0.0.1:7860/sdapi/v1/sd-models");
    if (!res.ok) throw new Error("API not ok");
  } catch (e) {
    console.error("❌ SD API unreachable at http://127.0.0.1:7860. Please ensure AUTOMATIC1111 is running with --api.");
    process.exit(1);
  }
}

async function generateImage(imageDemand) {
  const targetPath = path.join(REPO_ROOT, imageDemand.targetRelPath);
  
  if (fs.existsSync(targetPath)) {
    console.log(`⏩ Skipping ${imageDemand.id}, file already exists at ${imageDemand.targetRelPath}`);
    return;
  }

  console.log(`\n⏳ Generating ${imageDemand.id}...`);
  console.log(`   Prompt: ${imageDemand.prompt.substring(0, 80)}...`);
  console.log(`   Size: ${imageDemand.width}x${imageDemand.height}`);

  const payload = {
    prompt: imageDemand.prompt,
    negative_prompt: imageDemand.negativePrompt || "",
    steps: 20,
    width: Math.min(imageDemand.width, 1024),
    height: Math.min(imageDemand.height, 1024),
    cfg_scale: 6.0,
    sampler_name: "Euler a",
    seed: imageDemand.seed !== null ? imageDemand.seed : -1
  };

  try {
    const response = await fetch(SD_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`SD API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const base64Image = data.images[0];
    
    // Ensure directory exists
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(targetPath, Buffer.from(base64Image, 'base64'));
    console.log(`✅ Saved to ${imageDemand.targetRelPath}`);
  } catch (err) {
    console.error(`❌ Failed to generate ${imageDemand.id}:`, err);
  }
}

async function run() {
  await checkApi();
  console.log(`📋 Found ${MANIFEST.length} image requirements in manifest.`);
  
  for (const item of MANIFEST) {
    await generateImage(item);
  }
  
  console.log("\n🎉 Image generation pipeline complete.");
}

run();
