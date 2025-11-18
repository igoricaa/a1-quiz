"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface AdminExitDialogProps {
  onClose: () => void;
}

/**
 * Admin exit confirmation dialog
 * Shows instructions for closing the kiosk app
 */
export function AdminExitDialog({ onClose }: AdminExitDialogProps) {
  // Auto-dismiss after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 30000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleExit = () => {
    // Show alert with instructions (since window.close() may not work in kiosk mode)
    alert(
      "DA ZATVORITE APLIKACIJU:\n\n" +
        "1. Pritisnite: Ctrl + Alt + Delete\n" +
        "2. Kliknite: Task Manager\n" +
        "3. Pronađite: Google Chrome\n" +
        "4. Kliknite: End task\n\n" +
        "ILI:\n\n" +
        "Pritisnite Windows tipku, zatim zatvorite Chrome.",
    );

    // Attempt to close (may not work in kiosk mode, but worth trying)
    window.close();

    // If window.close() didn't work, close the dialog
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative mx-8 max-w-2xl rounded-2xl bg-white p-12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Zatvori"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
          Admin izlaz
        </h2>

        {/* Instructions */}
        <div className="mb-8 space-y-4 text-lg text-muted-foreground md:text-xl">
          <p>
            Da zatvorite aplikaciju, pritisnite <strong>Ctrl + Alt + Delete</strong> i
            zatim:
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>Kliknite "Task Manager"</li>
            <li>Pronađite "Google Chrome"</li>
            <li>Kliknite "End task"</li>
          </ol>
          <p className="mt-4 text-base italic">
            Alternativa: Pritisnite Windows tipku, zatim zatvorite Chrome iz
            taskbar-a.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={handleExit}
            variant="destructive"
            size="lg"
            className="flex-1 text-xl"
          >
            Prikaži uputstva
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            size="lg"
            className="flex-1 text-xl"
          >
            Otkaži
          </Button>
        </div>

        {/* Auto-dismiss notice */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Ovaj prozor će se automatski zatvoriti za 30 sekundi
        </p>
      </motion.div>
    </motion.div>
  );
}
