import React from 'react';
import { GraduationCap } from 'lucide-react';
import { UserProgress } from '../types';

interface HeaderProps {
  progress: UserProgress;
  totalLectures: number;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  totalLectures,
}) => {
  const completedTheoryCount = Object.values(progress.completedTheory).filter(Boolean).length;
  const completedQuizzesCount = Object.keys(progress.quizResults).length;
  const progressPercentage = Math.round(((completedTheoryCount + completedQuizzesCount) / (totalLectures * 2)) * 100);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand & Course Title */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-100 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900 leading-tight">
                  البرمجة المتقدمة 2
                </h1>
                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-indigo-100">
                  9 محاضرات
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                منصة الشرح النظري والأسئلة المؤتمتة
              </p>
            </div>
          </div>

          {/* Progress Bar & Quick Actions */}
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            
            {/* Overall Progress */}
            <div className="flex items-center gap-3 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
              <div className="text-right">
                <div className="text-xs text-slate-500 font-medium">التقدم العام</div>
                <div className="text-sm font-bold text-indigo-600 font-mono" dir="ltr">
                  {progressPercentage}%
                </div>
              </div>
              <div className="w-20 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
