# 🔒 Kiosk Mode - TODO (Phases 5-7)

This file contains deferred implementation tasks for kiosk mode hardening, testing, and deployment.

---

## 🔒 PHASE 5: Kiosk Mode Hardening

### 5.1 Global Event Blockers (`app/layout.tsx`)
- [ ] Disable context menu: `onContextMenu={e => e.preventDefault()}`
- [ ] Disable text selection: CSS `user-select: none` globally
- [ ] Disable drag: `onDragStart={e => e.preventDefault()}`
- [ ] Block keyboard shortcuts:
  - F11 (fullscreen toggle)
  - F5 / Ctrl+R (refresh)
  - Ctrl+W (close tab)
  - Alt+F4 (close window)
  - Implement via `onKeyDown` handler

### 5.2 Touch Optimizations
- [ ] Prevent zoom: Add to viewport meta tag `maximum-scale=1, user-scalable=no`
- [ ] Disable double-tap zoom: Apply `touch-action: manipulation` globally
- [ ] Prevent overscroll bounce: `overscroll-behavior: none`
- [ ] Fast-click verification (ensure no 300ms delay on touch)

### 5.3 Metadata & PWA Configuration
- [ ] Add `apple-mobile-web-app-capable: yes`
- [ ] Add `mobile-web-app-capable: yes`
- [ ] Configure theme-color: `#E20074` (A1 red)
- [ ] Add manifest.json for standalone mode (optional)
- [ ] Add favicons and touch icons

---

## 🧪 PHASE 6: Testing & Polish

### 6.1 Answer Debouncing
- [ ] Add 300ms disabled state after button click
- [ ] Prevent accidental double-answers
- [ ] Show loading spinner or checkmark during transition

### 6.2 Font Loading Optimization
- [ ] Ensure A1Sans loads before quiz starts (font-display strategy)
- [ ] Add `font-display: swap` in CSS
- [ ] Optional: Preload critical fonts in `layout.tsx` with `<link rel="preload">`
- [ ] Show loading screen while fonts load

### 6.3 Performance Optimization
- [ ] Optimize A1 logo image (convert to WebP/AVIF, compress)
- [ ] Lazy load ResultScreen components
- [ ] Test React Compiler optimizations
- [ ] Lighthouse audit for performance score
- [ ] Test on actual Windows 10 touch screen hardware

### 6.4 Accessibility (Bonus)
- [ ] Add ARIA labels for screen readers
- [ ] Keyboard navigation support (Tab, Enter, Space)
- [ ] Focus visible states for keyboard users
- [ ] Test with screen reader (NVDA on Windows)

### 6.5 Edge Case Testing
- [ ] Rapid clicking/tapping (debounce verification)
- [ ] Browser back button behavior (should be blocked/handled)
- [ ] Network interruption handling (offline mode)
- [ ] Multi-touch detection (accidental palm touches)
- [ ] Auto-reset timer accuracy (verify 180s countdown)

---

## 📦 PHASE 7: Production Build & Deployment

### 7.1 Build Optimization
- [ ] Run `npm run build` and verify no errors
- [ ] Run `npm run start` to test production build locally
- [ ] Analyze bundle size with `@next/bundle-analyzer`
- [ ] Remove console.logs and debug code
- [ ] Test on various screen resolutions (1920x1080, 3840x2160)

### 7.2 Chrome Kiosk Setup (Windows 10)

Create `launch-quiz.bat`:
```batch
@echo off
"C:\Program Files\Google\Chrome\Application\chrome.exe" ^
  --kiosk "http://localhost:3000" ^
  --no-first-run ^
  --disable-session-crashed-bubble ^
  --disable-infobars ^
  --disable-translate ^
  --disable-features=TranslateUI ^
  --overscroll-history-navigation=0 ^
  --start-fullscreen
```

**Tasks:**
- [ ] Create and test launch script
- [ ] Verify fullscreen mode works correctly
- [ ] Test on actual Windows 10 event machine
- [ ] Handle Chrome update prompts (disable auto-update or suppress)

### 7.3 Auto-Start on Boot (Optional)
- [ ] Place `.bat` file in Windows Startup folder:
  - `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`
- [ ] Alternative: Use Task Scheduler for more control
- [ ] Test reboot behavior
- [ ] Add watchdog script to restart if Chrome crashes

### 7.4 Alternative Deployment Options
- [ ] **Option A:** Deploy to Vercel/Netlify, use cloud URL in kiosk
  - Pros: Easy updates, no local server needed
  - Cons: Requires stable internet at event
- [ ] **Option B:** Run local Next.js server on Windows machine
  - Pros: No internet dependency, full control
  - Cons: Need to manage server restarts
- [ ] **Option C:** Export static HTML with `output: 'export'`
  - Pros: Simplest deployment, just open index.html
  - Cons: Lose some Next.js features (but not needed for this app)

### 7.5 Production Checklist
- [ ] Test complete user flow 10+ times
- [ ] Verify auto-reset works after 3 minutes
- [ ] Check all animations are smooth (60fps)
- [ ] Verify touch responsiveness on actual hardware
- [ ] Test in actual event lighting conditions (screen visibility)
- [ ] Prepare backup plan (USB drive with backup build)
- [ ] Create quick troubleshooting guide for event staff

---

## 📋 Quick Reference Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Lint & format
npm run lint
npm run format

# Launch Chrome kiosk (Windows)
launch-quiz.bat
```

---

## 🎯 Success Criteria

- ✅ App runs in fullscreen kiosk mode without browser UI
- ✅ No accidental exits or interruptions possible
- ✅ Touch interactions feel responsive and natural
- ✅ Auto-reset works reliably after 3 minutes idle
- ✅ Branding looks professional on large LED screen
- ✅ Zero crashes during 8-hour event

---

**Note:** These tasks should be completed after core functionality (Phases 1-4) is tested and working perfectly.
