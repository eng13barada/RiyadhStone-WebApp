$ErrorActionPreference = "Stop"

$destDir = "$PSScriptRoot\..\src\site\assets\generated"
Write-Host "Ensuring destination directory exists: $destDir"
New-Item -ItemType Directory -Force -Path $destDir | Out-Null

$brainDir = "$env:USERPROFILE\.gemini\antigravity\brain"
$sourceDir = $null

if ($env:AG_IMAGE_STAGING) {
    if (Test-Path $env:AG_IMAGE_STAGING) {
        $sourceDir = $env:AG_IMAGE_STAGING
        Write-Host "Using AG_IMAGE_STAGING: $sourceDir"
    }
}

if (-not $sourceDir -and (Test-Path $brainDir)) {
    # Find latest conversation folder that contains rs_*.png/jpg/webp
    $candidateDirs = Get-ChildItem -Path $brainDir -Directory | Sort-Object LastWriteTime -Descending
    foreach ($dir in $candidateDirs) {
        $images = @()
        $images += Get-ChildItem -Path $dir.FullName -Filter "rs_*.png" -ErrorAction SilentlyContinue
        $images += Get-ChildItem -Path $dir.FullName -Filter "rs_*.jpg" -ErrorAction SilentlyContinue
        $images += Get-ChildItem -Path $dir.FullName -Filter "rs_*.webp" -ErrorAction SilentlyContinue
        
        if ($images.Count -gt 0) {
            $sourceDir = $dir.FullName
            Write-Host "Found source directory (latest brain with images): $sourceDir"
            break
        }
    }
}

if (-not $sourceDir) {
    Write-Host "No source directory with rs_* images found. Skipping ingestion."
    exit 0
}

Write-Host "Copying images from $sourceDir to $destDir..."
$copied = 0
$skipped = 0

$images = Get-ChildItem -Path $sourceDir -Include "rs_*.png", "rs_*.jpg", "rs_*.webp" -Recurse -ErrorAction SilentlyContinue

foreach ($img in $images) {
    # Remove timestamps if present, keeping prefix like rs_home_hero_bg_v01
    $newName = $img.Name -replace '_\d+(\.(png|jpg|webp))$', '$1'
    $destPath = Join-Path $destDir $newName
    
    try {
        Copy-Item -Path $img.FullName -Destination $destPath -Force
        $copied++
        Write-Host "  Copied: $newName"
    } catch {
        Write-Host "  Failed to copy: $($img.Name)"
        $skipped++
    }
}

Write-Host "Ingestion complete: $copied copied, $skipped skipped."
