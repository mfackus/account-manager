@echo off
chcp 65001 >nul
cd /d "%~dp0"
npm start
start http://localhost:3000
echo.
echo ================================
echo   account-manager started!
echo   Open browser: http://localhost:3000
echo ================================
echo.
pause
