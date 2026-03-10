$ErrorActionPreference="Stop"
$fp = Join-Path (Get-Location).Path "src\site\pages\Home.tsx"
if (-not (Test-Path -LiteralPath $fp)) { throw "Home.tsx not found: $fp" }

$txt = Get-Content -LiteralPath $fp -Raw

# 1) Comment balance
$open = ([regex]::Matches($txt, "/\*")).Count
$close = ([regex]::Matches($txt, "\*/")).Count
if ($open -ne $close) { throw "GUARD FAILED: Unbalanced /* */ comments in Home.tsx (open=$open close=$close)" }

# 2) Very common tag pairs (cheap heuristic that catches most breakages)
$mustPairs = @(
  @("<SiteLayout","</SiteLayout>"),
  @("<footer","</footer>"),
  @("<Reveal","</Reveal>")
)

foreach($p in $mustPairs){
  $a=$p[0]; $b=$p[1]
  $ca = ([regex]::Matches($txt, [regex]::Escape($a))).Count
  $cb = ([regex]::Matches($txt, [regex]::Escape($b))).Count
  if ($ca -gt 0 -and $cb -eq 0) { throw "GUARD FAILED: Found $a but missing $b" }
}

Write-Host "GUARD OK: Home.tsx basic JSX sanity checks passed."
