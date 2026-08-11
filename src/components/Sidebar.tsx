import React from 'react';
import { Lecture, UserProgress } from '../types';
import { BookOpen, CheckCircle, HelpCircle, Layers, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  lectures: Lecture[];
  selectedLectureId: number;
  onSelectLecture: (id: number) => void;
  progress: UserProgress;
}

export const Sidebar: React.FC<SidebarProps> = ({
  lectures,
  selectedLectureId,
  onSelectLecture,
  progress,
}) => {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      
      {/* Mobile / Tablet Lecture Selector (Horizontal Scroll) */}
      <div className="lg:hidden mb-2 overflow-x-auto pb-2 flex gap-2 scrollbar-none touch-pan-x">
        {lectures.map((lecture) => {
          const isSelected = lecture.id === selectedLectureId;
          const isTheoryDone = progress.completedTheory[lecture.id];

          return (
            <button
              key={lecture.id}
              onClick={() => onSelectLecture(lecture.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 min-h-[44px] cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono ${
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {lecture.id}
              </span>
              <span>{lecture.title}</span>
              {isTheoryDone && (
                <CheckCircle className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-200' : 'text-emerald-500'}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Desktop Sidebar Card List */}
      <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sticky top-20">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>قائمة المحاضرات ({lectures.length})</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {Object.keys(progress.completedTheory).length}/{lectures.length} مكتمل
          </span>
        </div>

        <div className="space-y-1.5 max-h-[calc(100vh-160px)] overflow-y-auto pr-0.5">
          {lectures.map((lecture) => {
            const isSelected = lecture.id === selectedLectureId;
            const isTheoryDone = progress.completedTheory[lecture.id];
            const quizResult = progress.quizResults[lecture.id];

            return (
              <button
                key={lecture.id}
                onClick={() => onSelectLecture(lecture.id)}
                className={`w-full text-right p-3 rounded-xl transition-all border group relative cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50/80 border-indigo-200 text-indigo-950 shadow-2xs'
                    : 'bg-white border-transparent hover:bg-slate-50 text-slate-700 hover:border-slate-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Badge Number */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors font-mono ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}
                  >
                    {lecture.id}
                  </div>

                  {/* Lecture Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-bold text-sm truncate">
                        {lecture.title}
                      </h3>
                      {isSelected && (
                        <ChevronLeft className="w-4 h-4 text-indigo-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                      {lecture.subtitle}
                    </p>

                    {/* Progress indicators */}
                    <div className="flex items-center gap-2 mt-2 text-[11px]">
                      <span className={`inline-flex items-center gap-1 font-medium ${
                        isTheoryDone ? 'text-emerald-600' : 'text-slate-400'
                      }`}>
                        <BookOpen className="w-3 h-3" />
                        {isTheoryDone ? 'شرح مكتمل' : 'نظري'}
                      </span>

                      <span className="text-slate-300">•</span>

                      <span className={`inline-flex items-center gap-1 font-medium ${
                        quizResult ? 'text-indigo-600 font-mono' : 'text-slate-400'
                      }`}>
                        <HelpCircle className="w-3 h-3" />
                        {quizResult
                          ? `${quizResult.score}/${quizResult.total}`
                          : `${lecture.questions.length} أسئلة`}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </aside>
  );
};
