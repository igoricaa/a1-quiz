@echo off
REM A1 Quiz - Chrome Kiosk Mode Launcher for Windows 10
REM This script launches the quiz in fullscreen kiosk mode

echo Starting A1 Quiz in Kiosk Mode...
echo.

REM Kill any existing Chrome instances (optional - uncomment if needed)
REM taskkill /F /IM chrome.exe 2>nul

REM Wait a moment for Chrome to fully close
timeout /t 2 /nobreak >nul

REM Launch Chrome in kiosk mode
REM OPTION 1: Production URL (requires internet) - RECOMMENDED
REM "C:\Program Files\Google\Chrome\Application\chrome.exe" ^
REM   --kiosk "https://a1-quiz.vercel.app" ^

REM OPTION 2: Local server (no internet needed)
"C:\Program Files\Google\Chrome\Application\chrome.exe" ^
  --kiosk "http://localhost:3000" ^
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
