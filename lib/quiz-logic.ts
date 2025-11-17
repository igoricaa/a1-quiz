import type { PersonalityType, Score, PersonalityDetails } from "@/types/quiz";

/**
 * Priority order for tie-breaking when multiple types have the same score
 * As per spec: INOVATOR > ORGANIZATOR > HUMAN_FIRST > STRATEG
 */
const PRIORITY_ORDER: PersonalityType[] = [
  "INOVATOR",
  "ORGANIZATOR",
  "HUMAN_FIRST",
  "STRATEG",
];

/**
 * Calculate the quiz result from an array of answers
 * @param answers Array of personality types selected by the user
 * @returns The winning personality type
 */
export function calculateResult(answers: PersonalityType[]): PersonalityType {
  // Initialize score
  const score: Score = {
    INOVATOR: 0,
    ORGANIZATOR: 0,
    HUMAN_FIRST: 0,
    STRATEG: 0,
  };

  // Count occurrences of each type
  for (const answer of answers) {
    score[answer] += 1;
  }

  // Find the maximum score
  const maxScore = Math.max(...Object.values(score));

  // Get all types with the max score
  const winners = PRIORITY_ORDER.filter((type) => score[type] === maxScore);

  // Return the first winner according to priority order
  return winners[0];
}

/**
 * Calculate score tally from answers
 * @param answers Array of personality types
 * @returns Score object with counts for each type
 */
export function calculateScore(answers: PersonalityType[]): Score {
  const score: Score = {
    INOVATOR: 0,
    ORGANIZATOR: 0,
    HUMAN_FIRST: 0,
    STRATEG: 0,
  };

  for (const answer of answers) {
    score[answer] += 1;
  }

  return score;
}

/**
 * Get detailed information about a personality type
 * @param type The personality type
 * @returns Details object with name, tagline, description, traits, and color
 */
export function getPersonalityDetails(
  type: PersonalityType,
): PersonalityDetails {
  const details: Record<PersonalityType, PersonalityDetails> = {
    INOVATOR: {
      type: "INOVATOR",
      name: "Inovator",
      tagline: "Kreativni pioniri koji traže nove načine",
      advantage:
        "Brzo spajaš ideje koje drugi uopšte ne povezuju. U stanju si da vidiš rešenje pre nego što i postoji problem — i to je tvoja supermoć.",
      shift:
        "Da bi tvoje ideje stvarno zaživele, potrebno je da povremeno „usporiš“ i definišeš samo jedan prioritet. Manje paralelnih pravaca = jači efekat tvoje inovacije.",
      color: "var(--a1-magenta)",
    },
    ORGANIZATOR: {
      type: "ORGANIZATOR",
      name: "Organizator",
      tagline: "Majstori strukture i efikasnosti",
      advantage:
        "U haosu vidiš pravac. Ljudi se oslone na tebe kada treba nešto završiti tačno, brzo i bez nepotrebnih komplikacija.",
      shift:
        "Tvoja najveća snaga može postati još jača kada dozvoliš malo više fleksibilnosti — ne mora svaki korak da bude predvidiv. Pusti 10% prostora za spontanost i tim brže stiže do rešenja.",
      color: "var(--a1-magenta)",
    },
    HUMAN_FIRST: {
      type: "HUMAN_FIRST",
      name: "Human First",
      tagline: "Empatični lideri fokusirani na ljude",
      advantage:
        "Ti si srce svakog tima. Empatija, razumevanje i podrška tvoja su supermoć — znaš kako da spojiš ljude, smiriš situaciju i motivišeš druge da daju najbolje od sebe. Za tebe, napredak nikada nije samo u brojkama — već u ljudima koji stoje iza njih",
      shift:
        "Ne zaboravi da i tvoja energija zaslužuje “recharge”. Dok brineš o drugima, napravi prostora i za sebe.",
      color: "var(--a1-magenta)",
    },
    STRATEG: {
      type: "STRATEG",
      name: "Strateg",
      tagline: "Vizionari koji planiraju budućnost",
      advantage:
        "U svakoj situaciji vidiš strukturu, obrazac i logiku. Možeš brzo da proceniš šta ima smisla, a šta je gubljenje vremena — i zato drugi traže tvoj sud.",
      shift:
        "Ponekad ostaješ predugo u analizi. Sledeći korak za tebe je brže „zakucavanje” odluke i testiranje u realnosti — manje čekanja, više akcije donosi najbolji rezultat.",
      color: "var(--a1-magenta)",
    },
  };

  return details[type];
}
