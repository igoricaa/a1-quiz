"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { PersonalityType } from "@/types/quiz";
import { getPersonalityDetails } from "@/lib/quiz-logic";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface ResultScreenProps {
  result: PersonalityType;
  onContinue: () => void;
}

export function ResultScreen({ result, onContinue }: ResultScreenProps) {
  const personality = getPersonalityDetails(result);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-8 py-16 no-select prevent-zoom"
    >
      {/* Confetti/Sparkle Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        className="absolute top-20 text-primary"
      >
        <Sparkles className="h-20 w-20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="size-24 3xl:size-40 absolute top-5 left-5"
      >
        <Image
          src="/a1-logo.png"
          alt="A1 Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Personality Type Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Icon/Badge */}
        <div
          className="flex h-32 w-32 items-center justify-center rounded-full border-4 md:h-40 md:w-40"
          style={{
            borderColor: personality.color,
            backgroundColor: `${personality.color}20`,
          }}
        >
          <span
            className="text-6xl font-bold md:text-7xl 3xl:text-8xl"
            style={{ color: personality.color }}
          >
            {personality.type.charAt(0)}
          </span>
        </div>

        {/* Type Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-sans text-6xl font-bold uppercase tracking-tight md:text-7xl lg:text-8xl 3xl:text-9xl"
          style={{ color: personality.color }}
        >
          {personality.name}
        </motion.h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-4xl text-center font-sans text-2xl font-medium text-muted-foreground md:text-3xl 3xl:text-5xl"
      >
        {personality.tagline}
      </motion.p>

      {/* Advantage */}
      <div className="flex flex-col items-center gap-2 mt-7">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="max-w-4xl text-center font-sans text-lg leading-relaxed md:text-xl 3xl:text-3xl font-bold"
        >
          Tvoja prednost:
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="max-w-4xl text-center font-sans text-lg leading-relaxed text-foreground/90 md:text-xl 3xl:text-3xl"
        >
          {personality.advantage}
        </motion.p>
      </div>

      {/* Shift */}
      <div className="flex flex-col items-center gap-2 mt-5 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="font-sans text-lg leading-relaxed md:text-xl 3xl:text-3xl font-bold"
        >
          Tvoj POMAK:
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="font-sans text-lg leading-relaxed md:text-xl 3xl:text-3xl"
        >
          {personality.shift}
        </motion.p>
      </div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8"
      >
        <Button
          onClick={onContinue}
          size="lg"
          className="tap-target rounded-2xl bg-primary px-16 py-8 text-2xl font-bold uppercase tracking-wide transition-all md:px-20 md:py-10 md:text-3xl"
        >
          Nastavi
        </Button>
      </motion.div>
    </motion.div>
  );
}
