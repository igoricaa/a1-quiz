@echo off
REM A1 Quiz - Chrome Kiosk Mode Launcher for Windows 10 (PRODUCTION VERSION)
REM This script launches the LIVE production app from https://a1-quiz.vercel.app

echo Starting A1 Quiz in Kiosk Mode (Production)...
echo Loading from: https://a1-quiz.vercel.app
echo.
echo NOTE: This requires a stable internet connection!
echo.

REM Kill any existing Chrome instances (optional - uncomment if needed)
REM taskkill /F /IM chrome.exe 2>nul

REM Wait a moment for Chrome to fully close
timeout /t 2 /nobreak >nul

REM Launch Chrome in kiosk mode with PRODUCTION URL
"C:\Program Files\Google\Chrome\Application\chrome.exe" ^
  --kiosk "https://a1-quiz.vercel.app" ^
  --no-first-run ^
  --disable-session-crashed-bubble ^
  --disable-infobars ^
  --disable-translate ^
  --disable-features=TranslateUI ^
  --overscroll-history-navigation=0 ^
  --start-fullscreen ^
  --disable-popup-blocking ^
  --disable-prompt-on-repost ^
  --noerrdialogs

REM If Chrome exits, wait and restart (optional watchdog)
REM Uncomment the lines below for auto-restart functionality
REM echo Chrome closed. Restarting in 5 seconds...
REM timeout /t 5 /nobreak >nul
REM goto start
