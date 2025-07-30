Write-Host "Starting EliteCommerce Development Server..." -ForegroundColor Green
Write-Host ""
$env:NODE_ENV = "development"
tsx server/index.ts