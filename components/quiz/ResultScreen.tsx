"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { PersonalityType } from "@/types/quiz";
import { getPersonalityDetails } from "@/lib/quiz-logic";
import LogoHeader from "../LogoHeader";
import GridGraphic from "../GridGraphic";

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
      className="flex min-h-screen flex-col items-center justify-center px-8 py-16 no-select prevent-zoom"
    >
      <LogoHeader />
      <GridGraphic />

      {/* Personality Type Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.4 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Type Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-serif text-6xl uppercase md:text-7xl lg:text-8xl 3xl:text-9xl"
          style={{
            background:
              "linear-gradient( 90deg, rgba(70, 0, 0, 1) 0%, rgba(87, 16, 11, 1) 10%, var(--a1-magenta) 60% )",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: personality.color,
          }}
        >
          {personality.name}
        </motion.h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="max-w-4xl text-center font-sans text-5xl font-medium text-muted-foreground md:text-3xl 3xl:text-5xl mt-8"
      >
        {personality.tagline}
      </motion.p>

      {/* Advantage */}
      <div className="grid grid-cols-2 gap-10 max-w-9/12 z-10 mt-13">
        {/* rgba(176, 66, 66, 0.15) */}
        <motion.div
          className="flex flex-col gap-10 shadow-[0px_0px_10px_0px_rgba(176,66,66,0.15)] rounded-lg px-12.5 py-14 bg-background"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.3,
            type: "spring",
            bounce: 0.4,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="font-sans text-lg leading-relaxed md:text-xl 3xl:text-3xl"
          >
            Tvoja prednost:
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="font-sans text-lg leading-relaxed text-grey md:text-xl 3xl:text-3xl"
          >
            {personality.advantage}
          </motion.p>
        </motion.div>

        {/* Shift */}
        <motion.div
          className="flex flex-col gap-10 shadow-[0px_0px_10px_0px_rgba(176,66,66,0.15)] rounded-lg px-12.5 py-14 bg-background"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.3,
            type: "spring",
            bounce: 0.4,
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="font-sans text-lg leading-relaxed md:text-xl 3xl:text-3xl"
          >
            Tvoj POMAK:
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="font-sans text-lg leading-relaxed text-grey md:text-xl 3xl:text-3xl"
          >
            {personality.shift}
          </motion.p>
        </motion.div>
      </div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-18"
      >
        <Button onClick={onContinue} size="lg">
          Nastavi
        </Button>
      </motion.div>
    </motion.div>
  );
}
