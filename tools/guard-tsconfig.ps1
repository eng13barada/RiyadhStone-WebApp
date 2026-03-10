param([string]$TsConfig = "$(Join-Path (Get-Location).Path "tsconfig.json")")
$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $TsConfig)) { throw "tsconfig.json not found: $TsConfig" }
$raw = Get-Content -LiteralPath $TsConfig -Raw -Encoding UTF8

if ($raw -match '"\.\./\*\*/\*"' -or $raw -match '"\.\.\\\*\*\\\*"') {
  Write-Host "GUARD FAILED: tsconfig.json contains ../**/* which excludes the whole /apps tree (including this module)." -ForegroundColor Red
  exit 1
}

Write-Host "GUARD OK: tsconfig exclude looks safe."
exit 0
