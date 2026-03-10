Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "== RiyadhStone Site: BUILD ==" -ForegroundColor Cyan
npm run build

Write-Host "== RiyadhStone Site: PREVIEW (127.0.0.1:4173) ==" -ForegroundColor Cyan
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
