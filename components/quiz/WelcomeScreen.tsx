"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex min-h-screen flex-col items-center justify-center gap-12 px-8 py-16 no-select prevent-zoom"
    >
      {/* A1 Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative size-24 3xl:size-48"
      >
        <Image
          src="/a1-logo.png"
          alt="A1 Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-serif text-7xl font-bold leading-tight tracking-tight md:text-8xl lg:text-9xl 3xl:text-[200px]"
          style={{
            background:
              "linear-gradient( 90deg, rgba(70, 0, 0, 1) 0%, rgba(87, 16, 11, 1) 10%, var(--a1-magenta) 60% )",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          #NAPRAVI POMAK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-sans text-2xl text-muted-foreground md:text-3xl lg:text-4xl 3xl:text-6xl"
        >
          Dodirni ekran. AI od tebe počinje.
        </motion.p>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <Button
          onClick={onStart}
          size="lg"
          className="tap-target rounded-2xl bg-primary px-16 py-8 text-2xl font-bold uppercase tracking-wide transition-all md:px-20 md:py-10 md:text-3xl"
        >
          Počni kviz
        </Button>
      </motion.div>

      {/* Decorative gradient blob */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(226, 0, 116, 0.3) 0%, rgba(226, 0, 116, 0) 70%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
