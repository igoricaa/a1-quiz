'use client';

import { motion } from 'motion/react';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="absolute right-8 top-8 md:right-12 md:top-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-4"
      >
        {/* Text Progress */}
        <div className="font-sans text-lg font-medium text-muted-foreground md:text-xl">
          <span className="text-2xl font-bold text-primary md:text-3xl">
            {current}
          </span>
          <span className="mx-1">/</span>
          <span>{total}</span>
        </div>

        {/* Dots Progress */}
        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index < current
                  ? 'bg-primary scale-110'
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
