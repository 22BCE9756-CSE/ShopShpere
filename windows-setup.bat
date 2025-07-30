@echo off
echo.
echo ========================================
echo   EliteCommerce Windows Setup
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the project root directory.
    echo.
    pause
    exit /b 1
)

echo 1. Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo 2. Installing tsx globally...
call npm install -g tsx
if errorlevel 1 (
    echo Warning: Could not install tsx globally, installing locally...
    call npm install tsx
)

echo.
echo 3. Checking project structure...
if not exist "server\index.ts" (
    echo ERROR: server\index.ts not found!
    echo The project files may not have been downloaded completely.
    echo Please re-download the complete project.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo To start the development server, run:
echo   npx tsx server/index.ts
echo.
echo Or use the shortcut:
echo   start-server.bat
echo.
echo The application will be available at:
echo   http://localhost:5000
echo.
pause