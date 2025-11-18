"use client";

import { useState, useRef } from "react";
import { AdminExitDialog } from "./AdminExitDialog";

/**
 * Hidden admin exit trigger
 * Detects 8 rapid taps in bottom-left corner to show exit dialog
 */
export function AdminExitTrigger() {
  const [showDialog, setShowDialog] = useState(false);
  const tapCountRef = useRef(0);
  const lastTapTimeRef = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTapTimeRef.current;

    // Reset counter if taps are too slow (more than 2 seconds between taps)
    if (timeSinceLastTap > 2000) {
      tapCountRef.current = 0;
    }

    // Increment tap count
    tapCountRef.current += 1;
    lastTapTimeRef.current = now;

    // Show dialog after 8 taps
    if (tapCountRef.current >= 8) {
      setShowDialog(true);
      tapCountRef.current = 0; // Reset counter
    }
  };

  const handleClose = () => {
    setShowDialog(false);
    tapCountRef.current = 0; // Reset counter when dialog closes
  };

  return (
    <>
      {/* Invisible tap zone in bottom-left corner */}
      <button
        type="button"
        onClick={handleClick}
        className="fixed bottom-0 left-0 w-25 h-25 opacity-0 cursor-default z-[9998]"
        aria-label="Admin exit trigger"
        tabIndex={-1}
      />

      {/* Exit confirmation dialog */}
      {showDialog && <AdminExitDialog onClose={handleClose} />}
    </>
  );
}
