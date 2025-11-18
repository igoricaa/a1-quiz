"use client";

import { useEffect } from "react";
import { AdminExitTrigger } from "./AdminExitTrigger";

interface KioskWrapperProps {
  children: React.ReactNode;
}

/**
 * Kiosk mode wrapper component
 * Adds keyboard blockers, context menu prevention, and admin exit trigger
 */
export function KioskWrapper({ children }: KioskWrapperProps) {
  useEffect(() => {
    // Block keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F11 (fullscreen toggle)
      if (e.key === "F11") {
        e.preventDefault();
        return;
      }

      // Block F5 (refresh)
      if (e.key === "F5") {
        e.preventDefault();
        return;
      }

      // Block Escape key
      if (e.key === "Escape") {
        e.preventDefault();
        return;
      }

      // Block Ctrl+R / Cmd+R (refresh)
      if ((e.ctrlKey || e.metaKey) && e.key === "r") {
        e.preventDefault();
        return;
      }

      // Block Ctrl+W / Cmd+W (close tab)
      if ((e.ctrlKey || e.metaKey) && e.key === "w") {
        e.preventDefault();
        return;
      }

      // Block Ctrl+Shift+I / Cmd+Option+I (DevTools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        return;
      }

      // Block F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }

      // Block Alt+F4 (close window - Windows)
      if (e.altKey && e.key === "F4") {
        e.preventDefault();
        return;
      }
    };

    // Block context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Block drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return (
    <>
      {children}
      <AdminExitTrigger />
    </>
  );
}
