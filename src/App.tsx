import React, { useState, useEffect } from 'react';
import { Lecture, UserProgress, QuizResult, Question } from './types';
import {
  getStoredLectures,
  saveStoredLectures,
  resetLectureQuestionsToDefault,
  getStoredProgress,
  saveStoredProgress,
} from './lib/storage';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TheorySection } from './components/TheorySection';
import { QuizSection } from './components/QuizSection';
import { QuestionEditorModal } from './components/QuestionEditorModal';
import { BookOpen, HelpCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export default function App() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [activeLectureId, setActiveLectureId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz'>('theory');
  const [progress, setProgress] = useState<UserProgress>({ completedTheory: {}, quizResults: {} });
  const [isQuestionEditorOpen, setIsQuestionEditorOpen] = useState<boolean>(false);

  // Initialize data from local storage or defaults
  useEffect(() => {
    const loadedLectures = getStoredLectures();
    setLectures(loadedLectures);

    const loadedProgress = getStoredProgress();
    setProgress(loadedProgress);
  }, []);

  const currentLecture = lectures.find((l) => l.id === activeLectureId) || lectures[0];

  // Progress Handlers
  const handleToggleTheoryComplete = () => {
    if (!currentLecture) return;
    const isCurrentlyDone = !!progress.completedTheory[currentLecture.id];
    const newProgress: UserProgress = {
      ...progress,
      completedTheory: {
        ...progress.completedTheory,
        [currentLecture.id]: !isCurrentlyDone,
      },
    };
    setProgress(newProgress);
    saveStoredProgress(newProgress);
  };

  const handleSaveQuizResult = (result: QuizResult) => {
    if (!currentLecture) return;
    const newProgress: UserProgress = {
      ...progress,
      quizResults: {
        ...progress.quizResults,
        [currentLecture.id]: result,
      },
    };
    setProgress(newProgress);
    saveStoredProgress(newProgress);
  };

  // Question Management Handlers
  const handleSaveQuestionsForLecture = (lectureId: number, updatedQuestions: Question[]) => {
    const updatedLectures = lectures.map((l) =>
      l.id === lectureId ? { ...l, questions: updatedQuestions } : l
    );
    setLectures(updatedLectures);
    saveStoredLectures(updatedLectures);
  };

  const handleResetQuestionsForLecture = (lectureId: number) => {
    const resetLectures = resetLectureQuestionsToDefault(lectureId);
    setLectures(resetLectures);
  };

  // Next / Prev Lecture Navigation
  const handlePrevLecture = () => {
    if (activeLectureId > 1) {
      setActiveLectureId(activeLectureId - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextLecture = () => {
    if (activeLectureId < lectures.length) {
      setActiveLectureId(activeLectureId + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (lectures.length === 0 || !currentLecture) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/80 text-slate-800 flex flex-col font-sans">
      
      {/* Top Header */}
      <Header
        progress={progress}
        totalLectures={lectures.length}
      />

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
          
          {/* Sidebar / Lecture Navigation */}
          <Sidebar
            lectures={lectures}
            selectedLectureId={activeLectureId}
            onSelectLecture={(id) => {
              setActiveLectureId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            progress={progress}
          />

          {/* Center Main View */}
          <div className="flex-1 w-full min-w-0 space-y-4">
            
            {/* Section Tabs (النظري - الأسئلة المؤتمتة) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-1.5 flex items-center gap-1 shadow-xs">
              <button
                onClick={() => setActiveTab('theory')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                  activeTab === 'theory'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>قسم الشرح النظري</span>
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                  activeTab === 'quiz'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>قسم الأسئلة المؤتمتة</span>
                <span
                  className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                    activeTab === 'quiz' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {currentLecture.questions.length}
                </span>
              </button>
            </div>

            {/* Content Display based on Active Tab */}
            {activeTab === 'theory' ? (
              <TheorySection
                lecture={currentLecture}
                isCompleted={!!progress.completedTheory[currentLecture.id]}
                onToggleComplete={handleToggleTheoryComplete}
                onGoToQuiz={() => setActiveTab('quiz')}
              />
            ) : (
              <QuizSection
                questions={currentLecture.questions}
                lectureTitle={currentLecture.title}
                savedResult={progress.quizResults[currentLecture.id]}
                onSaveResult={handleSaveQuizResult}
                onEditQuestions={() => setIsQuestionEditorOpen(true)}
              />
            )}

            {/* Bottom Lecture Navigation (Next / Prev) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-xs">
              <button
                disabled={activeLectureId <= 1}
                onClick={handlePrevLecture}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  activeLectureId <= 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <ChevronRight className="w-4 h-4 shrink-0" />
                <span>المحاضرة السابقة</span>
              </button>

              <div className="text-xs font-mono font-bold text-slate-500 hidden sm:block">
                المحاضرة {activeLectureId} من {lectures.length}
              </div>

              <button
                disabled={activeLectureId >= lectures.length}
                onClick={handleNextLecture}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  activeLectureId >= lectures.length
                    ? 'opacity-40 cursor-not-allowed bg-slate-50 border-slate-200 text-slate-400'
                    : 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 shadow-xs'
                }`}
              >
                <span>المحاضرة التالية</span>
                <ChevronLeft className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-semibold text-slate-700">
            منصة مادة البرمجة المتقدمة 2 — جميع المحاضرات الـ 9 والأشكال المؤتمتة
          </p>
          <p className="text-slate-400 mt-1">
            تم تطوير المنصة لتسهيل دراسة القسم النظري واختبار المعلومات التفاعلية.
          </p>
        </div>
      </footer>

      {/* Question Editor Modal */}
      {currentLecture && (
        <QuestionEditorModal
          isOpen={isQuestionEditorOpen}
          onClose={() => setIsQuestionEditorOpen(false)}
          lecture={currentLecture}
          onSaveQuestions={handleSaveQuestionsForLecture}
          onResetToDefault={handleResetQuestionsForLecture}
        />
      )}

    </div>
  );
}

