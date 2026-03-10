param(
  [string]$SrcRoot = "$(Resolve-Path (Join-Path (Get-Location).Path "src"))"
)

# Fail if we detect " > " inside tag text like <p>... > ...</p>
# This catches the exact class of errors we saw, without touching normal JS comparisons.
$pattern = '(<[^>]+>[^<{]*?)\s>\s*([^<{]*</)'

$hits = Select-String -Path (Join-Path $SrcRoot "**\*.tsx"), (Join-Path $SrcRoot "**\*.jsx") -Pattern $pattern -AllMatches -ErrorAction SilentlyContinue

if ($hits) {
  Write-Host "GUARD FAILED: Found unescaped '>' inside JSX text nodes (use &gt; instead)." -ForegroundColor Red
  $hits | Select-Object -First 40 | ForEach-Object {
    Write-Host ("- " + $_.Path + ":" + $_.LineNumber + " :: " + $_.Line.Trim())
  }
  exit 1
}

Write-Host "GUARD OK: No JSX text '>' issues detected."
exit 0
