@echo off
setlocal
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 20 or newer is required. Install it from https://nodejs.org/
  echo Then reopen this script.
  set "bootstrap_status=1"
  goto finish
)
node "%~dp0scripts\bootstrap.mjs"
set "bootstrap_status=%errorlevel%"
:finish
if /i not "%~1"=="--no-pause" pause
exit /b %bootstrap_status%
