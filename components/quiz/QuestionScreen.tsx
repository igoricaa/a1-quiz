"use client";

import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import type { Question, PersonalityType } from "@/types/quiz";
import { useState } from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (type: PersonalityType) => void;
  onGoBack: () => void;
}

export function QuestionScreen({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onGoBack,
}: QuestionScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnswerClick = (answerId: string, type: PersonalityType) => {
    if (isTransitioning) return;

    setSelectedAnswer(answerId);
    setIsTransitioning(true);

    // Delay to show selection animation before transitioning
    setTimeout(() => {
      onAnswer(type);
      setSelectedAnswer(null);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex min-h-screen flex-col items-center justify-center gap-12 px-8 py-16 no-select prevent-zoom"
    >
      {/* Progress Indicator */}
      <ProgressIndicator current={questionNumber} total={totalQuestions} />

      {/* Question Text */}
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="max-w-4xl text-center"
      >
        <h2 className="font-sans text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {question.text}
        </h2>
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

      {/* Answer Buttons */}
      <div className="flex w-full max-w-4xl flex-col gap-4">
        <AnimatePresence mode="wait">
          {question.answers.map((answer, index) => (
            <motion.div
              key={answer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
            >
              <Button
                onClick={() => handleAnswerClick(answer.id, answer.type)}
                disabled={isTransitioning}
                variant="outline"
                className={`group relative h-auto w-full justify-between gap-4 rounded-2xl border-2 border-white shadow-lg shadow-primary/10 px-8 py-6 text-left text-lg transition-all hover:scale-[1.02] bg-white hover:border-primary hover:bg-primary active:scale-[0.98] disabled:opacity-50 md:text-xl ${
                  selectedAnswer === answer.id
                    ? "scale-[0.98] border-primary bg-primary/20"
                    : ""
                }`}
              >
                {/* Answer Text */}
                <span className="flex-1 font-sans font-normal leading-relaxed">
                  {answer.text}
                </span>

                {/* Letter Badge */}
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-sans text-xl font-bold transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground ${
                    selectedAnswer === answer.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/30"
                  }`}
                >
                  {answer.id}
                </span>
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Button
          onClick={onGoBack}
          disabled={isTransitioning}
          variant="ghost"
          size="sm"
          className="tap-target mt-4 gap-2 text-lg font-medium disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
          Nazad
        </Button>
      </motion.div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(226, 0, 116, 0.4) 0%, rgba(226, 0, 116, 0) 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}
