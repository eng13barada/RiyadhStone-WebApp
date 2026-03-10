$ErrorActionPreference = "Stop"

$sectionsRoot = Join-Path (Get-Location).Path "src\site\sections"
if (-not (Test-Path -LiteralPath $sectionsRoot)) {
  Write-Host "GUARD SKIP: sections folder not found: $sectionsRoot"
  exit 0
}

$files = Get-ChildItem -LiteralPath $sectionsRoot -Recurse -Filter "*.tsx" -ErrorAction SilentlyContinue
$bad = @()

foreach ($f in $files) {
  $txt = Get-Content -LiteralPath $f.FullName -Raw -Encoding UTF8
  $idx = $txt.IndexOf("import ")
  if ($idx -lt 0) { continue }

  $head = $txt.Substring(0, $idx)
  if ($head -match "</\w+" -or $head -match "<\w+" -or $head -match "</button>" -or $head -match "</div>") {
    $bad += $f.FullName
  }
}

if ($bad.Count -gt 0) {
  Write-Host "GUARD FAILED: JSX/HTML detected before imports in these files:" -ForegroundColor Red
  $bad | ForEach-Object { Write-Host ("- " + $_) }
  exit 1
}

Write-Host "GUARD OK: import headers look clean."
exit 0
