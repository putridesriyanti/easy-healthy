@echo off
setlocal
echo ==========================================
echo      Easy Healthy - App Launcher
echo ==========================================

REM Add Node.js to PATH
set "PATH=%PATH%;C:\Program Files\nodejs"

REM Check for Node
node -v >nul 2>&1
ifPercent errorlevel% neq 0 (
    echo [ERROR] Node.js not found!
    echo Please install it from https://nodejs.org/
    pause
    exit /b
)

echo Starting App Server...
echo.

REM Open browser in 3 seconds
timeout /t 3 >nul
start http://localhost:3000

REM Start the custom server
cd /d "%~dp0"
node server.js

pause
