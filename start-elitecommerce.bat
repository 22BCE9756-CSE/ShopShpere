@echo off
cls
echo ========================================
echo    EliteCommerce Website Launcher
echo ========================================
echo.
echo Starting your EliteCommerce website...
echo This will show the actual website, not Replit interface.
echo.
echo Website will be available at: http://localhost:5000
echo Admin dashboard at: http://localhost:5000/admin
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

node quick-setup.js

echo.
echo Server stopped. Press any key to exit.
pause > nul