"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Mail, ChevronLeft } from "lucide-react";
import GridGraphic from "../GridGraphic";
import LogoHeader from "../LogoHeader";

interface CTAScreenProps {
  onRestart: () => void;
  onGoBack: () => void;
  autoResetDelay?: number; // in milliseconds
}

export function CTAScreen({
  onRestart,
  onGoBack,
  autoResetDelay = 180000, // 3 minutes default
}: CTAScreenProps) {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    // Auto-reset timer
    const resetTimer = setTimeout(() => {
      onRestart();
    }, autoResetDelay);

    // Show countdown in last 10 seconds
    const countdownTimer = setTimeout(() => {
      setCountdown(10);
    }, autoResetDelay - 10000);

    return () => {
      clearTimeout(resetTimer);
      clearTimeout(countdownTimer);
    };
  }, [autoResetDelay, onRestart]);

  // Countdown ticker
  useEffect(() => {
    if (countdown === null || countdown <= 0) return;

    const interval = setInterval(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex min-h-screen flex-col items-center justify-center gap-14 px-8 py-16 no-select prevent-zoom"
    >
      <LogoHeader />
      <GridGraphic />

      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-5xl text-center font-sans text-5xl font-bold leading-none md:text-6xl lg:text-7xl 3xl:text-9xl"
        style={{
          background:
            "linear-gradient( 90deg, rgba(70, 0, 0, 1) 0%, rgba(87, 16, 11, 1) 10%, var(--a1-magenta) 60% )",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Vreme je da napraviš svoj sledeći POMAK!
      </motion.h1>

      {/* CTA Body */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex max-w-4xl flex-col items-center gap-6 text-center"
      >
        <p className="font-sans text-2xl leading-relaxed text-foreground/90 md:text-3xl 3xl:text-4xl">
          Pošalji nam CV na email{" "}
          <a
            href="mailto:ljudskiresursi@a1.rs"
            className="inline-flex items-center gap-2 font-bold text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-primary/80"
          >
            <Mail className="inline h-6 w-6" />
            ljudskiresursi@a1.rs
          </a>{" "}
          i priključi se projektima koji menjaju svakodnevicu na bolje.
        </p>
      </motion.div>

      {/* PONOVO Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10"
      >
        <Button onClick={onRestart} size="lg">
          Ponovo
        </Button>
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="mt-8"
      >
        <Button onClick={onGoBack} variant="ghost">
          <ChevronLeft className="h-5 w-5" />
          Nazad
        </Button>
      </motion.div>

      {/* Countdown indicator */}
      {countdown !== null && countdown > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-sm text-muted-foreground md:text-base"
        >
          Automatski restart za {countdown}s
        </motion.p>
      )}
    </motion.div>
  );
}
