import React, { useState, useEffect } from 'react';
import { Question, QuizResult } from '../types';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Check,
  Sparkles,
  HelpCircle as QuestionIcon,
  AlertTriangle,
  Zap,
  Filter,
  RefreshCw,
  Lightbulb,
  Info,
  Edit3
} from 'lucide-react';

interface QuizSectionProps {
  questions: Question[];
  lectureTitle: string;
  savedResult?: QuizResult;
  onSaveResult: (result: QuizResult) => void;
  onEditQuestions?: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  questions,
  lectureTitle,
  savedResult,
  onSaveResult,
  onEditQuestions,
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>(
    savedResult?.userAnswers || {}
  );
  const [submitted, setSubmitted] = useState<boolean>(!!savedResult);
  
  // Instant feedback mode enabled by default
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);
  
  // Active filter for questions list
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct' | 'unanswered'>('all');

  // Temporary toast notification message
  const [toastAlert, setToastAlert] = useState<{
    type: 'wrong' | 'correct';
    message: string;
    questionIndex: number;
  } | null>(null);

  // Sync state when lecture changes
  useEffect(() => {
    setUserAnswers(savedResult?.userAnswers || {});
    setSubmitted(!!savedResult);
    setToastAlert(null);
  }, [savedResult, questions]);

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (toastAlert) {
      const timer = setTimeout(() => {
        setToastAlert(null);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [toastAlert]);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (submitted) return; // locked after submission

    const question = questions[questionIndex];
    const isCorrect = question.correctAnswerIndex === optionIndex;

    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));

    // In instant feedback mode, show alert toast if selected answer is incorrect
    if (instantFeedback) {
      const optionLabels = ['أ', 'ب', 'ج', 'د', 'هـ'];
      const chosenLabel = optionLabels[optionIndex] || optionIndex + 1;
      const correctLabel = optionLabels[question.correctAnswerIndex] || question.correctAnswerIndex + 1;

      if (!isCorrect) {
        setToastAlert({
          type: 'wrong',
          message: `⚠️ تنبيه: إجابة خاطئة للسؤال (${questionIndex + 1})! اخترت (${chosenLabel}) والصواب هو (${correctLabel}). اقرأ الشرح والتعليل بالأسفل.`,
          questionIndex,
        });
      } else {
        setToastAlert({
          type: 'correct',
          message: `🎉 ممتاز! إجابة صحيحة للسؤال (${questionIndex + 1})!`,
          questionIndex,
        });
      }
    }
  };

  const handleResetQuestion = (questionIndex: number) => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[questionIndex];
      return next;
    });
    setToastAlert(null);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    const score = calculateScore();
    const result: QuizResult = {
      score,
      total: questions.length,
      completedAt: new Date().toISOString(),
      userAnswers,
    };
    setSubmitted(true);
    onSaveResult(result);
  };

  const handleRetake = () => {
    setUserAnswers({});
    setSubmitted(false);
    setToastAlert(null);
    setFilterMode('all');
  };

  const currentScore = calculateScore();
  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? Math.round((currentScore / totalQuestions) * 100) : 0;
  const answeredCount = Object.keys(userAnswers).length;
  const isAllAnswered = answeredCount === totalQuestions;

  // Calculate stats for filtering
  const wrongCount = Object.entries(userAnswers).filter(
    ([qIdx, optIdx]) => questions[Number(qIdx)]?.correctAnswerIndex !== optIdx
  ).length;

  const correctCount = Object.entries(userAnswers).filter(
    ([qIdx, optIdx]) => questions[Number(qIdx)]?.correctAnswerIndex === optIdx
  ).length;

  const unansweredCount = totalQuestions - answeredCount;

  const optionLabels = ['أ', 'ب', 'ج', 'د', 'هـ'];

  // Filter questions based on filterMode
  const filteredQuestions = questions.map((q, idx) => ({ q, idx })).filter(({ q, idx }) => {
    const userAnswer = userAnswers[idx];
    if (filterMode === 'wrong') {
      return userAnswer !== undefined && userAnswer !== q.correctAnswerIndex;
    }
    if (filterMode === 'correct') {
      return userAnswer !== undefined && userAnswer === q.correctAnswerIndex;
    }
    if (filterMode === 'unanswered') {
      return userAnswer === undefined;
    }
    return true; // 'all'
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden relative">
      
      {/* Floating Toast Notification Alert */}
      {toastAlert && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-lg w-11/12 p-4 rounded-2xl shadow-2xl border flex items-center gap-3 transition-all animate-bounce ${
            toastAlert.type === 'wrong'
              ? 'bg-rose-900 text-rose-50 border-rose-700 ring-2 ring-rose-500/50'
              : 'bg-emerald-900 text-emerald-50 border-emerald-700 ring-2 ring-emerald-500/50'
          }`}
        >
          {toastAlert.type === 'wrong' ? (
            <AlertTriangle className="w-6 h-6 text-rose-300 shrink-0" />
          ) : (
            <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
          )}
          <div className="flex-1 text-xs sm:text-sm font-semibold leading-relaxed">
            {toastAlert.message}
          </div>
          <button
            onClick={() => setToastAlert(null)}
            className="p-1 rounded-lg hover:bg-white/10 text-white/80 text-xs font-mono"
          >
            ✕
          </button>
        </div>
      )}

      {/* Quiz Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-indigo-400 text-xs font-semibold mb-2">
              <QuestionIcon className="w-4 h-4" />
              <span>قسم الأسئلة المؤتمتة (MCQs)</span>
              <span>•</span>
              <span className="font-mono">{lectureTitle}</span>
            </div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              اختبار مؤتمت للتحقق من الفهم
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              اختر الإجابة لكل سؤال. سيقوم النظام بتنبيهك وشرح الخطأ فوراً عند اختيار أي إجابة غير صحيحة.
            </p>
          </div>

          {/* Mode Controls, Edit Questions, and Score */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full lg:w-auto">
            {onEditQuestions && (
              <button
                type="button"
                onClick={onEditQuestions}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm cursor-pointer border border-indigo-400/40"
              >
                <Edit3 className="w-4 h-4" />
                <span>تعديل الأسئلة</span>
              </button>
            )}

            {/* Instant Mode Toggle */}
            <button
              type="button"
              onClick={() => setInstantFeedback(!instantFeedback)}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                instantFeedback
                  ? 'bg-indigo-600/30 border-indigo-400/50 text-indigo-200 hover:bg-indigo-600/40'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <Zap className={`w-4 h-4 ${instantFeedback ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
              <span>التصحيح والتنبيه الفوري:</span>
              <span className={`px-2 py-0.5 rounded-md text-[11px] ${instantFeedback ? 'bg-amber-400 text-slate-950 font-extrabold' : 'bg-slate-700 text-slate-300'}`}>
                {instantFeedback ? 'مُفعّل ⚡' : 'معطّل'}
              </span>
            </button>

            {/* Final Score Card */}
            {submitted && (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 text-center shrink-0 min-w-36">
                <div className="text-xs text-indigo-200 font-semibold mb-0.5">النتيجة النهائية</div>
                <div className="text-2xl font-extrabold text-white font-mono" dir="ltr">
                  {currentScore} / {totalQuestions}
                </div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">
                  نسبة النجاح {percentage}%
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filter and Stats Bar */}
      {questions.length > 0 && (
        <div className="bg-slate-100/80 border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Filter className="w-4 h-4 text-indigo-600" />
            <span>عرض الأسئلة:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>الكل</span>
              <span className="px-1.5 py-0.2 bg-slate-200/50 text-slate-800 rounded-md font-mono text-[10px]">
                {totalQuestions}
              </span>
            </button>

            <button
              onClick={() => setFilterMode('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                filterMode === 'wrong'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white border border-rose-200 text-rose-700 hover:bg-rose-50'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>الأخطاء والتنبيهات</span>
              <span className="px-1.5 py-0.2 bg-rose-100 text-rose-900 rounded-md font-mono text-[10px]">
                {wrongCount}
              </span>
            </button>

            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                filterMode === 'correct'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>الإجابات الصحيحة</span>
              <span className="px-1.5 py-0.2 bg-emerald-100 text-emerald-900 rounded-md font-mono text-[10px]">
                {correctCount}
              </span>
            </button>

            {unansweredCount > 0 && (
              <button
                onClick={() => setFilterMode('unanswered')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  filterMode === 'unanswered'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white border border-amber-200 text-amber-700 hover:bg-amber-50'
                }`}
              >
                <span>المتبقية</span>
                <span className="px-1.5 py-0.2 bg-amber-100 text-amber-900 rounded-md font-mono text-[10px]">
                  {unansweredCount}
                </span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Quiz Questions List */}
      <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
        {questions.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            لا توجد أسئلة مؤتمتة مضافة لهذه المحاضرة بعد.
          </div>
        ) : filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-600 font-semibold">
              لا توجد أسئلة تحت هذا الفلتر حالياً.
            </p>
            <button
              onClick={() => setFilterMode('all')}
              className="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-bold underline"
            >
              عرض جميع الأسئلة
            </button>
          </div>
        ) : (
          filteredQuestions.map(({ q, idx: qIdx }) => {
            const selectedOpt = userAnswers[qIdx];
            const isAnswered = selectedOpt !== undefined;
            const isCorrectAnswer = isAnswered && selectedOpt === q.correctAnswerIndex;
            const isWrongAnswer = isAnswered && selectedOpt !== q.correctAnswerIndex;

            // Show feedback block if submitted OR if instantFeedback mode is enabled and user has answered this question
            const showFeedback = submitted || (instantFeedback && isAnswered);

            return (
              <div
                key={q.id || qIdx}
                className={`rounded-2xl p-5 sm:p-6 border transition-all space-y-4 ${
                  showFeedback && isWrongAnswer
                    ? 'bg-rose-50/40 border-rose-300 ring-2 ring-rose-200/60 shadow-sm'
                    : showFeedback && isCorrectAnswer
                    ? 'bg-emerald-50/40 border-emerald-300 shadow-sm'
                    : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                        showFeedback && isWrongAnswer
                          ? 'bg-rose-600 text-white ring-2 ring-rose-300'
                          : showFeedback && isCorrectAnswer
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                          : 'bg-indigo-600 text-white'
                      }`}
                    >
                      {qIdx + 1}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {q.questionText}
                      </h3>

                      {/* Code Snippet in Question */}
                      {q.codeSnippet && (
                        <div className="mt-3 rounded-xl bg-slate-900 p-4 border border-slate-800 font-mono text-xs text-indigo-300 dir-ltr overflow-x-auto">
                          <pre><code>{q.codeSnippet}</code></pre>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Retry Button in Instant Mode */}
                  {isAnswered && !submitted && instantFeedback && (
                    <button
                      onClick={() => handleResetQuestion(qIdx)}
                      title="تغيير الإجابة وإعادة المحاولة"
                      className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs shrink-0"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">إعادة المحاولة</span>
                    </button>
                  )}
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrect = q.correctAnswerIndex === optIdx;

                    let optionStyle =
                      'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50 cursor-pointer';
                    let labelStyle = 'bg-slate-100 text-slate-700 border-slate-200';

                    if (showFeedback) {
                      if (isCorrect) {
                        optionStyle =
                          'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/30';
                        labelStyle = 'bg-emerald-600 text-white border-emerald-700';
                      } else if (isSelected && !isCorrect) {
                        optionStyle =
                          'bg-rose-50 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-500/30';
                        labelStyle = 'bg-rose-600 text-white border-rose-700';
                      } else {
                        optionStyle = 'bg-white border-slate-200 opacity-60 text-slate-500';
                      }
                    } else if (isSelected) {
                      optionStyle =
                        'bg-indigo-50 border-indigo-600 text-indigo-950 font-semibold ring-1 ring-indigo-600 shadow-2xs cursor-pointer';
                      labelStyle = 'bg-indigo-600 text-white border-indigo-700';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={submitted}
                        onClick={() => handleSelectOption(qIdx, optIdx)}
                        className={`w-full text-right p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${labelStyle}`}
                          >
                            {optionLabels[optIdx] || optIdx + 1}
                          </span>
                          <span className="leading-relaxed">{opt}</span>
                        </div>

                        {/* Status Icons */}
                        {showFeedback && isCorrect && (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>الإجابة الصحيحة</span>
                          </div>
                        )}
                        {showFeedback && isSelected && !isCorrect && (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-lg">
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            <span>إجابتك الخاطئة</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Detailed Alert & Explanation Box when user selected WRONG answer */}
                {showFeedback && isWrongAnswer && (
                  <div className="mt-4 p-5 rounded-xl bg-rose-50 border-2 border-rose-200 text-rose-950 space-y-3 shadow-xs">
                    <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm border-b border-rose-200 pb-2">
                      <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 animate-bounce" />
                      <span>تنبيه: إجابة خاطئة! تحليل الخطأ والتوضيح العلمي</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="bg-white/80 p-3 rounded-lg border border-rose-200 flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-rose-900 block">إجابتك المختارة:</span>
                          <span className="text-rose-950">
                            ({optionLabels[selectedOpt]}) {q.options[selectedOpt]}
                          </span>
                        </div>
                      </div>

                      <div className="bg-white/80 p-3 rounded-lg border border-emerald-200 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-emerald-900 block">الإجابة الصحيحة والمطلوبة:</span>
                          <span className="text-emerald-950">
                            ({optionLabels[q.correctAnswerIndex]}) {q.options[q.correctAnswerIndex]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Scientific Explanation & Rationale */}
                    <div className="bg-white p-4 rounded-xl border border-rose-200/80 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-indigo-900">
                        <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>شرح الخطأ والتعليل التفصيلي:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {q.explanation ||
                          `الإجابة الصحيحة هي (${optionLabels[q.correctAnswerIndex]}) ${
                            q.options[q.correctAnswerIndex]
                          }. نوصي بمسح المفاهيم النظرية لهذه المحاضرة والتركيز على التعاريف والدوال الخاصة بها.`}
                      </p>
                    </div>
                  </div>
                )}

                {/* Explanation Box when user selected CORRECT answer */}
                {showFeedback && isCorrectAnswer && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-900">
                        <span>إجابة صحيحة وممتازة! 🎉</span>
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                        {q.explanation || `أحسنت الاختيار! الخيار الصحيح هو (${optionLabels[q.correctAnswerIndex]}) ${q.options[q.correctAnswerIndex]}.`}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer Submit / Retake Bar */}
      {questions.length > 0 && (
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {!submitted ? (
            <>
              <div className="text-xs text-slate-600 font-medium flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block animate-ping"></span>
                <span>
                  تمت إجابة <strong className="font-bold text-slate-900">{answeredCount}</strong> من أصل{' '}
                  <strong className="font-bold text-slate-900">{totalQuestions}</strong> سؤال
                </span>
              </div>

              <button
                disabled={!isAllAnswered}
                onClick={handleSubmitQuiz}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${
                  isAllAnswered
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 cursor-pointer'
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>اعتماد وتصحيح الاختبار بالكامل</span>
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Award className="w-5 h-5 text-indigo-600" />
                <span>شكرًا لإتمام هذا الاختبار! تمت مراجعة جميع الإجابات والتعليلات.</span>
              </div>

              <button
                onClick={handleRetake}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة الاختبار من جديد</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

