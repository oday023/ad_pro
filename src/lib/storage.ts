import { Lecture, UserProgress } from '../types';
import { INITIAL_LECTURES } from '../data/lecturesData';

const LECTURES_STORAGE_KEY = 'adv_prog_2_custom_lectures_v9';
const PROGRESS_STORAGE_KEY = 'adv_prog_2_progress_v1';

export function getStoredLectures(): Lecture[] {
  try {
    const data = localStorage.getItem(LECTURES_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load custom lectures from storage', e);
  }
  return INITIAL_LECTURES;
}

export function saveStoredLectures(lectures: Lecture[]): void {
  try {
    localStorage.setItem(LECTURES_STORAGE_KEY, JSON.stringify(lectures));
  } catch (e) {
    console.error('Failed to save custom lectures to storage', e);
  }
}

export function resetLectureQuestionsToDefault(lectureId: number): Lecture[] {
  try {
    const currentStored = getStoredLectures();
    const defaultLecture = INITIAL_LECTURES.find(l => l.id === lectureId);
    if (defaultLecture) {
      const updated = currentStored.map(l => l.id === lectureId ? { ...l, questions: [...defaultLecture.questions] } : l);
      saveStoredLectures(updated);
      return updated;
    }
  } catch (e) {
    console.error('Failed to reset lecture questions', e);
  }
  return getStoredLectures();
}

export function getStoredProgress(): UserProgress {
  try {
    const data = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load progress', e);
  }
  return {
    completedTheory: {},
    quizResults: {}
  };
}

export function saveStoredProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}


