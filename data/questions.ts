import type { Question } from '@/types/quiz';

/**
 * The 3 quiz questions with their answer mappings
 * Based on the AI Quiz Developer Spec
 */
export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Kad dobiješ novi zadatak, šta ti je prva misao?',
    answers: [
      {
        id: 'A',
        text: '„Ajmo nešto skroz drugačije… da vidimo šta sve može."',
        type: 'INOVATOR',
      },
      {
        id: 'B',
        text: '„Ok, prvo pravim mini-plan da ne poginem usput."',
        type: 'ORGANIZATOR',
      },
      {
        id: 'C',
        text: '„Ko će sve da se cimaju oko ovoga? Da vidimo da im bude lakše."',
        type: 'HUMAN_FIRST',
      },
      {
        id: 'D',
        text: '„Ček, ček… šta je cilj svega ovoga?"',
        type: 'STRATEG',
      },
    ],
  },
  {
    id: 2,
    text: 'Kako najviše voliš da radiš?',
    answers: [
      {
        id: 'A',
        text: '„U fazonu—prepusti se vibe-u i improvizuj."',
        type: 'INOVATOR',
      },
      {
        id: 'B',
        text: '„Ako nije u tabeli, ne postoji."',
        type: 'ORGANIZATOR',
      },
      {
        id: 'C',
        text: '„S ekipom, da se međusobno dižemo i završavamo sve."',
        type: 'HUMAN_FIRST',
      },
      {
        id: 'D',
        text: '„Daj mi brojke, ciljeve, logiku—i idemo."',
        type: 'STRATEG',
      },
    ],
  },
  {
    id: 3,
    text: 'Šta za tebe znači napraviti POMAK?',
    answers: [
      {
        id: 'A',
        text: '„Probati nešto što još nisam, pa makar bilo haotično."',
        type: 'INOVATOR',
      },
      {
        id: 'B',
        text: '„Uvesti sistem da sve ide brže i lakše."',
        type: 'ORGANIZATOR',
      },
      {
        id: 'C',
        text: '„Da se ljudi oko mene osećaju bolje zbog toga što sam uradio/la."',
        type: 'HUMAN_FIRST',
      },
      {
        id: 'D',
        text: '„Potez koji menja situaciju na duže staze."',
        type: 'STRATEG',
      },
    ],
  },
];

/**
 * Total number of questions in the quiz
 */
export const TOTAL_QUESTIONS = QUESTIONS.length;
