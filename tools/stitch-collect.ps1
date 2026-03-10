param(
  [string]$UrlsFile = (Join-Path $PSScriptRoot "stitch.urls.txt")
)
$ErrorActionPreference="Stop"

# Required screen IDs
$required = @(
  @{ id="6d2bda5a5b91420eb992e18cc3bfb34a"; name="home-c" },
  @{ id="4d4c54e57ef44c20849c62b7fc9cbbf0"; name="home-a" },
  @{ id="dd80577fca244adaa4d664ee20145614"; name="home-b" },
  @{ id="65c4ef737b06484a87e8b6d1ed5b0b0e"; name="about-narrative" }
)

Write-Host ""
Write-Host "Paste the *HOSTED URL* for each Stitch screen." -ForegroundColor Cyan
Write-Host "Important: paste the full URL (usually starts with https://.../download?...)." -ForegroundColor Cyan
Write-Host ""

$lines = New-Object System.Collections.Generic.List[string]
foreach ($r in $required) {
  Write-Host ("Screen: " + $r.name + " | ID: " + $r.id) -ForegroundColor Yellow
  $u = Read-Host "Hosted URL"
  if (-not $u) { throw "Aborted: missing URL for " + $r.id }
  $lines.Add(($r.id + "|" + $u))
  Write-Host ""
}

$header = @"
# Stitch hosted URLs mapping (ONE per line):
# <SCREEN_ID>|<HOSTED_URL>
"@

($header + "`r`n" + ($lines -join "`r`n") + "`r`n") | Set-Content -LiteralPath $UrlsFile -Encoding UTF8
Write-Host ("Saved: " + $UrlsFile) -ForegroundColor Green
