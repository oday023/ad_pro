export interface Question {
  id: string | number;
  questionText: string;
  codeSnippet?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface Lecture {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  theoryContent: string;
  questions: Question[];
}

export interface QuizResult {
  score: number;
  total: number;
  completedAt?: string;
  userAnswers: Record<number, number>; // question index -> option index
}

export interface UserProgress {
  completedTheory: Record<number, boolean>;
  quizResults: Record<number, QuizResult>;
}
