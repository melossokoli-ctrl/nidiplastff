@echo off
setlocal EnableDelayedExpansion
title Nidi Plast

if /I not "%~1"=="RUN" (
    start "Nidi Plast" cmd /k "%~f0" RUN
    exit /b
)

echo ==============================
echo        NIDI PLAST
echo ==============================
echo.

set "PROJEKTI=%~dp0"

cd /d "%PROJEKTI%"
if not exist "%PROJEKTI%package.json" (
    echo GABIM: Projekti nuk u gjet.
    goto FUND
)

where node >nul 2>&1
if errorlevel 1 (
    echo GABIM: Node.js nuk eshte instaluar!
    echo Shkarko nga https://nodejs.org
    goto FUND
)

if not exist "node_modules\next\package.json" (
    echo Duke instaluar paketat...
    call npm.cmd install
    if errorlevel 1 (
        echo GABIM: Instalimi deshtoi!
        goto FUND
    )
)

echo Duke ndalur servere te vjetra...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3001" ^| findstr "LISTENING"') do taskkill /F /PID %%a >nul 2>&1
timeout /t 2 >nul

if exist ".next" (
    echo Duke pastruar cache-in e vjeter...
    rmdir /s /q ".next" 2>nul
)
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache" 2>nul
)

echo.
echo Duke nisur faqen - prisni 30-60 sekonda
echo.
echo   http://127.0.0.1:3000
echo.
echo MOS E MBYLL KETE DRITARE!
echo Kur shfaqet "Ready", hap linkun me siper.
echo MOS hap skedar HTML direkt - perdor vetem linkun!
echo.

start /B cmd /c "ping -n 45 127.0.0.1 >nul && start http://127.0.0.1:3000"

call npm.cmd run dev

:FUND
echo.
echo Shtyp Enter per ta mbyllur...
pause >nul
