/**
 * AI Quiz - Type Definitions
 * A1 Data Science Conference Event
 */

/**
 * The four personality types that can be discovered
 */
export type PersonalityType =
  | "INOVATOR"
  | "ORGANIZATOR"
  | "HUMAN_FIRST"
  | "STRATEG";

/**
 * Represents a single answer option within a question
 */
export interface Answer {
  /** Unique identifier for the answer (A, B, C, D) */
  id: string;
  /** The answer text displayed to the user */
  text: string;
  /** Which personality type this answer maps to */
  type: PersonalityType;
}

/**
 * Represents a single quiz question
 */
export interface Question {
  /** Unique identifier for the question */
  id: number;
  /** The question text displayed to the user */
  text: string;
  /** Array of 4 possible answers */
  answers: Answer[];
}

/**
 * The current step/screen in the quiz flow
 */
export type QuizStep = "welcome" | "question" | "result" | "cta";

/**
 * Score tally for each personality type
 */
export interface Score {
  INOVATOR: number;
  ORGANIZATOR: number;
  HUMAN_FIRST: number;
  STRATEG: number;
}

/**
 * The complete state of the quiz
 */
export interface QuizState {
  /** Current screen being displayed */
  currentStep: QuizStep;
  /** Index of the current question (0-2) */
  currentQuestionIndex: number;
  /** Array of selected answer types */
  answers: PersonalityType[];
  /** Score tally (computed from answers) */
  score: Score;
  /** Final result (computed after all questions answered) */
  result: PersonalityType | null;
}

/**
 * Quiz reducer actions
 */
export type QuizAction =
  | { type: "START_QUIZ" }
  | { type: "ANSWER_QUESTION"; payload: PersonalityType }
  | { type: "GO_BACK" }
  | { type: "SHOW_CTA" }
  | { type: "RESET_QUIZ" };

/**
 * Personality type details for result screen
 */
export interface PersonalityDetails {
  /** Type identifier */
  type: PersonalityType;
  /** Display name */
  name: string;
  /** Short tagline/description */
  tagline: string;
  /** Detailed description */
  advantage: string;
  /** Key characteristics */
  shift: string;
  /** Brand color for this type */
  color: string;
}
