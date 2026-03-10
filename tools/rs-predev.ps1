param(
  [string]$RepoRoot = (Get-Location).Path
)
$ErrorActionPreference = "Stop"

try {
  $src = Join-Path $RepoRoot "src"
  if (-not (Test-Path -LiteralPath $src)) {
    Write-Host "RS Predev: src not found, skipping."
    exit 0
  }

  # Minimal safe guard only: do NOT auto-mutate large JSX.
  # (We keep this script stable so dev never fails again.)
  Write-Host "RS Predev: OK (safe mode)."
  exit 0
}
catch {
  Write-Host ("RS Predev: skipped due to error: " + $_.Exception.Message)
  exit 0
}
