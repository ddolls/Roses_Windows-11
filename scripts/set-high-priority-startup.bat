@echo off
setlocal EnableDelayedExpansion

:: Check for administrative rights
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo [Roses] Meminta hak akses Administrator...
    powershell -NoProfile -Command "Start-Process '%~f0' -Verb RunAs"
    exit /b
)

:: Find roses executable
set "TARGET_EXE=%LOCALAPPDATA%\Roses\roses.exe"
if not exist "%TARGET_EXE%" (
    set "TARGET_EXE=%~dp0..\src-tauri\target\release\roses.exe"
)
if not exist "%TARGET_EXE%" (
    set "TARGET_EXE=%~dp0..\src-tauri\target\debug\roses.exe"
)

echo [Roses] Mendaftarkan Roses ke Windows Task Scheduler (Prioritas Tertinggi)...
schtasks /create /tn "RosesStartup" /tr "'%TARGET_EXE%' --autostart" /sc onlogon /delay 0000:00 /rl highest /f

echo [Roses] Menghapus jeda startup bawaan Windows (StartupDelayInMSec = 0)...
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Serialize" /v "StartupDelayInMSec" /t REG_DWORD /d 0 /f

echo.
echo =========================================================================
echo SUKSES: Roses sekarang akan berjalan PERTAMA KALI saat login Windows!
echo =========================================================================
pause
