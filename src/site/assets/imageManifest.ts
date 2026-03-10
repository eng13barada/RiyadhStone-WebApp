export interface ImageDemand {
  id: string;
  usage: "hero-bg" | "section-bg" | "card-image" | "panel" | "texture" | "map-dark";
  targetRelPath: string;
  width: number;
  height: number;
  prompt: string;
  negativePrompt?: string;
  seed: number | null;
}

const GLOBAL_PROMPT = "Photorealistic architectural photography, natural lighting, premium stone materials, Riyadh limestone, warm beige stone, clean modern lines, no text, no watermark, no logo, no CGI, no render, no illustration. DSLR look, realistic lens, sharp details, balanced contrast.";
const GLOBAL_NEGATIVE = "text, watermark, logo, brand mark, letters, typography, UI, screenshot, illustration, cartoon, CGI, 3d render, unreal engine, faces, people close-up, distorted geometry, extra limbs, oversharpen, overexposed, noisy grain, posterization";

export const IMAGE_MANIFEST: ImageDemand[] = [
  // ── HERO BGs (1920x1080) ──
  {
    id: 'rs_home_hero_bg_v01',
    usage: 'hero-bg',
    targetRelPath: 'src/site/assets/generated/rs_home_hero_bg_v01.png',
    width: 1920, height: 1080, seed: null,
    prompt: `Wide architectural scene, Riyadh context, modern limestone buildings, soft grid overlay extremely subtle, minimal noise, clean. ${GLOBAL_PROMPT}`,
    negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_about_hero_bg_v01',
    usage: 'hero-bg',
    targetRelPath: 'src/site/assets/generated/rs_about_hero_bg_v01.png',
    width: 1920, height: 1080, seed: null,
    prompt: `Wide architectural scene, Riyadh context, modern limestone buildings, soft grid overlay extremely subtle, minimal noise, clean, elegant corporate entrance. ${GLOBAL_PROMPT}`,
    negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_engineering_hero_bg_v01',
    usage: 'hero-bg',
    targetRelPath: 'src/site/assets/generated/rs_engineering_hero_bg_v01.png',
    width: 1920, height: 1080, seed: null,
    prompt: `Wide architectural scene, Riyadh context, modern limestone buildings, soft blueprint lines extremely subtle, clean engineering office aesthetic. ${GLOBAL_PROMPT}`,
    negativePrompt: GLOBAL_NEGATIVE
  },
  
  // ── FOOTER MAP (1600x900) ──
  {
    id: 'rs_footer_map_dark_v01',
    usage: 'map-dark',
    targetRelPath: 'src/site/assets/generated/rs_footer_map_dark_v01.png',
    width: 1600, height: 900, seed: null,
    prompt: `Dark map-like aerial, abstract city grid, minimal, dark charcoal background with very subtle gold accents, premium studio look. ${GLOBAL_PROMPT}`,
    negativePrompt: GLOBAL_NEGATIVE
  },

  // ── PRODUCTS CARDS (1024x1024) ──
  {
    id: 'rs_products_riyadex_card_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_products_riyadex_card_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Architectural Facade limestone, exterior building wall, premium finish. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_products_riyadfloor_card_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_products_riyadfloor_card_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Premium limestone paving floor, outdoor hardscape, large format tiles. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_products_riyadciv_card_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_products_riyadciv_card_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Civil works limestone, heavy engineering stone, kerbs, infrastructure. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_products_riyadwet_card_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_products_riyadwet_card_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Limestone used in water features, pool coping, wet environment stone. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_products_riyadurb_card_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_products_riyadurb_card_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Urban furniture made of limestone, public seating, stone planters. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_products_riyadstep_card_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_products_riyadstep_card_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Limestone staircase steps, elegant architectural stairs. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_products_riyadraw_card_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_products_riyadraw_card_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Raw limestone blocks in quarry, massive stone blocks, natural raw texture. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },

  // ── ENGINEERING PANELS (1536x1024) ──
  {
    id: 'rs_engineering_realitycapture_panel_v01', usage: 'panel',
    targetRelPath: 'src/site/assets/generated/rs_engineering_realitycapture_panel_v01.png',
    width: 1536, height: 1024, seed: null,
    prompt: `Advanced reality capture scanning equipment in modern building, laser scanning, engineering site, precision focus. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_engineering_lab_qaqc_panel_v01', usage: 'panel',
    targetRelPath: 'src/site/assets/generated/rs_engineering_lab_qaqc_panel_v01.png',
    width: 1536, height: 1024, seed: null,
    prompt: `Premium quality control laboratory testing limestone samples, precise instruments, clean environment. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_engineering_traceability_panel_v01', usage: 'panel',
    targetRelPath: 'src/site/assets/generated/rs_engineering_traceability_panel_v01.png',
    width: 1536, height: 1024, seed: null,
    prompt: `Digital tablets with barcoded limestone tags in warehouse, engineering traceability system in action. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_engineering_instruments_panel_v01', usage: 'panel',
    targetRelPath: 'src/site/assets/generated/rs_engineering_instruments_panel_v01.png',
    width: 1536, height: 1024, seed: null,
    prompt: `Macro shot of digital caliper on limestone surface, precision measuring tools, high detail. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_supports_document_pack_v01', usage: 'panel',
    targetRelPath: 'src/site/assets/generated/rs_supports_document_pack_v01.png',
    width: 1536, height: 1024, seed: null,
    prompt: `Piles of beautiful engineering blueprints, technical submittals, and material samples arranged on a desk. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_supports_table_bg_v01', usage: 'section-bg',
    targetRelPath: 'src/site/assets/generated/rs_supports_table_bg_v01.png',
    width: 1920, height: 1080, seed: null,
    prompt: `Very subtle geometric blueprint lines, engineering grid, near-white limestone paper texture, extremely soft, low contrast. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },

  // ── MEGAMENU (1024x1024) ──
  {
    id: 'rs_megamenu_company_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_megamenu_company_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Macro shot of premium warm beige limestone with elegant corporate architecture details in the background. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_megamenu_products_v01', usage: 'card-image',
    targetRelPath: 'src/site/assets/generated/rs_megamenu_products_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Architectural stone cladding display, highly textured beige limestone, dynamic lighting. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },

  // ── TEXTURES (1024x1024) ──
  {
    id: 'rs_texture_honed_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_honed_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, honed smooth finish, matte, beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_texture_bushhammered_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_bushhammered_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, bush-hammered rough finish, beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_texture_sandblasted_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_sandblasted_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, sandblasted granular finish, beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_texture_brushed_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_brushed_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, brushed antique finish, dimpled beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_texture_flamed_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_flamed_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, flamed thermal finish, slightly cracked rough beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_texture_sawn_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_sawn_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, sawn linear cut finish, straight groove lines on beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_texture_splitface_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_splitface_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, split-face extremely rough natural cleavage finish, chunky beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  },
  {
    id: 'rs_texture_tumbled_v01', usage: 'texture',
    targetRelPath: 'src/site/assets/generated/rs_texture_tumbled_v01.png',
    width: 1024, height: 1024, seed: null,
    prompt: `Seamless close-up limestone texture, tumbled weathered edge finish, soft rounded beige stone, high detail macro. ${GLOBAL_PROMPT}`, negativePrompt: GLOBAL_NEGATIVE
  }
];
