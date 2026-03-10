param(
  [string]$OutDir = "temp_stitch",
  [string]$UrlsFile = (Join-Path $PSScriptRoot "stitch.urls.txt")
)

$ErrorActionPreference = "Stop"
$curl = (Get-Command curl.exe -ErrorAction Stop).Source

if (-not (Test-Path -LiteralPath $UrlsFile)) {
  throw "Missing URLs file: $UrlsFile (run tools\stitch-collect.ps1 first)"
}

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$outRoot = Join-Path $root $OutDir
$htmlDir = Join-Path $outRoot "html"
$assetsDir = Join-Path $outRoot "assets"

New-Item -ItemType Directory -Force -Path $htmlDir | Out-Null
New-Item -ItemType Directory -Force -Path $assetsDir | Out-Null

# Parse lines: SCREEN_ID|URL
$lines = Get-Content -LiteralPath $UrlsFile -Encoding UTF8 |
  Where-Object { $_.Trim() -and -not $_.Trim().StartsWith("#") }

$map = @{}
foreach ($ln in $lines) {
  $parts = $ln.Split("|",2)
  if ($parts.Count -ne 2) { continue }
  $sid = $parts[0].Trim()
  $url = $parts[1].Trim()
  if ($sid -and $url) { $map[$sid] = $url }
}

$required = @(
  @{ id="6d2bda5a5b91420eb992e18cc3bfb34a"; name="home-c" },
  @{ id="4d4c54e57ef44c20849c62b7fc9cbbf0"; name="home-a" },
  @{ id="dd80577fca244adaa4d664ee20145614"; name="home-b" },
  @{ id="65c4ef737b06484a87e8b6d1ed5b0b0e"; name="about-narrative" }
)

$missing=@()
foreach($r in $required){ if(-not $map.ContainsKey($r.id)){ $missing+=$r.id } }
if($missing.Count -gt 0){
  Write-Host "MISSING hosted URLs for:" -ForegroundColor Yellow
  $missing | ForEach-Object { Write-Host ("- " + $_) -ForegroundColor Yellow }
  throw "Fix tools\stitch.urls.txt then rerun."
}

function SafeName([string]$s){ return ($s -replace '[^a-zA-Z0-9\-_]+','-').Trim('-') }

# Download HTML for each screen
$downloaded=@()
foreach($r in $required){
  $sid=$r.id; $url=$map[$sid]
  $file=Join-Path $htmlDir ("{0}__{1}.html" -f $r.name, (SafeName $sid))
  & $curl -L --fail --silent --show-error --retry 3 --retry-delay 1 $url -o $file
  Write-Host ("OK HTML: " + $file) -ForegroundColor Green
  $downloaded += $file
}

# Extract and download assets referenced in HTML (best-effort)
$assetSet = New-Object System.Collections.Generic.HashSet[string]
$rx = [regex]'(?i)(?:src|href)\s*=\s*["''](https?://[^"'']+)["'']|url\(\s*["'']?(https?://[^)"'']+)["'']?\s*\)'

foreach($f in $downloaded){
  $txt=Get-Content -LiteralPath $f -Raw -Encoding UTF8
  foreach($mm in $rx.Matches($txt)){
    $u=$null
    if($mm.Groups[1].Success){ $u=$mm.Groups[1].Value }
    elseif($mm.Groups[2].Success){ $u=$mm.Groups[2].Value }
    if($u){ [void]$assetSet.Add($u) }
  }
}

$assetUrls = $assetSet | Where-Object { $_ -match '\.(png|jpg|jpeg|webp|svg|gif|mp4|webm|woff2?|ttf|otf)(\?|$)' }

$idx=0
foreach($u in $assetUrls){
  $idx++
  try{
    $uri=[System.Uri]$u
    $name=[System.IO.Path]::GetFileName($uri.AbsolutePath)
    if(-not $name){ $name="asset-$idx" }
    $ext=[System.IO.Path]::GetExtension($uri.AbsolutePath)
    if(-not $ext){ $ext=".bin" }
    $out=Join-Path $assetsDir ((SafeName $name) + $ext)

    & $curl -L --fail --silent --show-error --retry 2 --retry-delay 1 $u -o $out
    Write-Host ("OK ASSET: " + $out) -ForegroundColor DarkGreen
  } catch {
    Write-Host ("SKIP ASSET: " + $u) -ForegroundColor DarkYellow
  }
}

Write-Host ""
Write-Host "DONE. Saved under:" -ForegroundColor Cyan
Write-Host ("  " + $outRoot) -ForegroundColor Cyan
Write-Host ("  HTML:   " + $htmlDir) -ForegroundColor Cyan
Write-Host ("  Assets: " + $assetsDir) -ForegroundColor Cyan
