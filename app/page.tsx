"use client";

import { useReducer } from "react";
import { AnimatePresence } from "motion/react";
import type {
  QuizState,
  QuizAction,
  PersonalityType,
  Score,
} from "@/types/quiz";
import { QUESTIONS, TOTAL_QUESTIONS } from "@/data/questions";
import { calculateResult, calculateScore } from "@/lib/quiz-logic";
import { WelcomeScreen } from "@/components/quiz/WelcomeScreen";
import { QuestionScreen } from "@/components/quiz/QuestionScreen";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { CTAScreen } from "@/components/quiz/CTAScreen";

// Initial state
const initialState: QuizState = {
  currentStep: "welcome",
  currentQuestionIndex: 0,
  answers: [],
  score: {
    INOVATOR: 0,
    ORGANIZATOR: 0,
    HUMAN_FIRST: 0,
    STRATEG: 0,
  },
  result: null,
};

// Reducer function
function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        currentStep: "question",
        currentQuestionIndex: 0,
        answers: [],
        score: {
          INOVATOR: 0,
          ORGANIZATOR: 0,
          HUMAN_FIRST: 0,
          STRATEG: 0,
        },
        result: null,
      };

    case "ANSWER_QUESTION": {
      const newAnswers = [...state.answers, action.payload];
      const newScore = calculateScore(newAnswers);
      const isLastQuestion = state.currentQuestionIndex === TOTAL_QUESTIONS - 1;

      if (isLastQuestion) {
        // Calculate final result
        const result = calculateResult(newAnswers);
        return {
          ...state,
          answers: newAnswers,
          score: newScore,
          result,
          currentStep: "result",
        };
      }

      // Move to next question
      return {
        ...state,
        answers: newAnswers,
        score: newScore,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    }

    case "GO_BACK": {
      if (state.currentQuestionIndex === 0) {
        // Go back to welcome screen
        return initialState;
      }
      // Go back one question and remove last answer
      const newAnswers = state.answers.slice(0, -1);
      const newScore = calculateScore(newAnswers);
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
        answers: newAnswers,
        score: newScore,
      };
    }

    case "SHOW_CTA":
      return {
        ...state,
        currentStep: "cta",
      };

    case "RESET_QUIZ":
      return initialState;

    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleStart = () => {
    dispatch({ type: "START_QUIZ" });
  };

  const handleAnswer = (type: PersonalityType) => {
    dispatch({ type: "ANSWER_QUESTION", payload: type });
  };

  const handleRestart = () => {
    dispatch({ type: "RESET_QUIZ" });
  };

  const handleGoBack = () => {
    dispatch({ type: "GO_BACK" });
  };

  const handleContinue = () => {
    dispatch({ type: "SHOW_CTA" });
  };

  return (
    <main className="h-screen bg-background">
      <AnimatePresence mode="wait">
        {state.currentStep === "welcome" && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {state.currentStep === "question" && (
          <QuestionScreen
            key={`question-${state.currentQuestionIndex}`}
            question={QUESTIONS[state.currentQuestionIndex]}
            questionNumber={state.currentQuestionIndex + 1}
            totalQuestions={TOTAL_QUESTIONS}
            onAnswer={handleAnswer}
            onGoBack={handleGoBack}
          />
        )}

        {state.currentStep === "result" && state.result && (
          <ResultScreen
            key="result"
            result={state.result}
            onContinue={handleContinue}
          />
        )}

        {state.currentStep === "cta" && (
          <CTAScreen
            key="cta"
            onRestart={handleRestart}
            autoResetDelay={180000} // 3 minutes
          />
        )}
      </AnimatePresence>
    </main>
  );
}
