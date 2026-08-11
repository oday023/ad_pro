import React, { useState, useEffect } from 'react';
import { Question, Lecture } from '../types';
import { X, Plus, Trash2, Edit3, Save, RotateCcw, Check, AlertCircle } from 'lucide-react';

interface QuestionEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lecture: Lecture;
  onSaveQuestions: (lectureId: number, questions: Question[]) => void;
  onResetToDefault: (lectureId: number) => void;
}

export const QuestionEditorModal: React.FC<QuestionEditorModalProps> = ({
  isOpen,
  onClose,
  lecture,
  onSaveQuestions,
  onResetToDefault,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [hasSaved, setHasSaved] = useState(false);

  useEffect(() => {
    if (lecture) {
      setQuestions(JSON.parse(JSON.stringify(lecture.questions || [])));
      setEditingIndex(null);
      setActiveQuestion(null);
    }
  }, [lecture, isOpen]);

  if (!isOpen) return null;

  const handleStartEdit = (index: number) => {
    setEditingIndex(index);
    setActiveQuestion(JSON.parse(JSON.stringify(questions[index])));
  };

  const handleAddNewQuestion = () => {
    const newQ: Question = {
      id: `l${lecture.id}_custom_${Date.now()}`,
      questionText: 'سؤال جديد...',
      options: ['الخيار الأول', 'الخيار الثاني', 'الخيار الثالث', 'الخيار الرابع'],
      correctAnswerIndex: 0,
      explanation: 'شرح وإجابة تعليلية للسؤال...',
    };
    const updated = [...questions, newQ];
    setQuestions(updated);
    setEditingIndex(updated.length - 1);
    setActiveQuestion(newQ);
  };

  const handleDeleteQuestion = (index: number) => {
    if (window.confirm('هل أنت تأكد من إرادتك لحذف هذا السؤال؟')) {
      const updated = questions.filter((_, i) => i !== index);
      setQuestions(updated);
      if (editingIndex === index) {
        setEditingIndex(null);
        setActiveQuestion(null);
      } else if (editingIndex !== null && editingIndex > index) {
        setEditingIndex(editingIndex - 1);
      }
    }
  };

  const handleSaveActiveQuestion = () => {
    if (editingIndex !== null && activeQuestion) {
      const updated = [...questions];
      updated[editingIndex] = activeQuestion;
      setQuestions(updated);
      setEditingIndex(null);
      setActiveQuestion(null);
    }
  };

  const handleSaveAll = () => {
    let finalQuestions = [...questions];
    if (editingIndex !== null && activeQuestion) {
      finalQuestions[editingIndex] = activeQuestion;
    }
    onSaveQuestions(lecture.id, finalQuestions);
    setHasSaved(true);
    setTimeout(() => {
      setHasSaved(false);
      onClose();
    }, 1000);
  };

  const handleResetCurrent = () => {
    if (window.confirm('هل تريد استعادة الأسئلة الأصلية لهذه المحاضرة؟')) {
      onResetToDefault(lecture.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Edit3 className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="text-base sm:text-lg font-bold">تعديل وإدارة الأسئلة — {lecture.title}</h3>
              <p className="text-xs text-slate-300">إجمالي الأسئلة المحفوظة: {questions.length} سؤالاً</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 bg-slate-50">
          
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={handleAddNewQuestion}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة سؤال جديد</span>
            </button>

            <button
              onClick={handleResetCurrent}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 rounded-lg text-xs font-semibold transition-all border border-slate-200 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>استعادة الأسئلة الأصلية</span>
            </button>
          </div>

          {/* Inline Question Editor if active */}
          {editingIndex !== null && activeQuestion && (
            <div className="bg-white p-5 rounded-2xl border-2 border-indigo-500 shadow-md space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between border-b pb-3 border-slate-100">
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  تعديل السؤال رقم #{editingIndex + 1}
                </span>
                <button
                  onClick={() => {
                    setEditingIndex(null);
                    setActiveQuestion(null);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  إلغاء التعديل
                </button>
              </div>

              {/* Question Text */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">نص السؤال:</label>
                <textarea
                  value={activeQuestion.questionText}
                  onChange={(e) => setActiveQuestion({ ...activeQuestion, questionText: e.target.value })}
                  rows={2}
                  className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-medium"
                />
              </div>

              {/* Options */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  الخيارات المتاحة (حدد الخيار الصحيح بالإشارة إليه):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeQuestion.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all ${
                        activeQuestion.correctAnswerIndex === oIdx
                          ? 'bg-emerald-50 border-emerald-300 ring-1 ring-emerald-400'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={activeQuestion.correctAnswerIndex === oIdx}
                        onChange={() => setActiveQuestion({ ...activeQuestion, correctAnswerIndex: oIdx })}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <span className="text-xs font-bold text-slate-500 min-w-5">
                        {['أ', 'ب', 'ج', 'د', 'هـ'][oIdx] || oIdx + 1}.
                      </span>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => {
                          const newOpts = [...activeQuestion.options];
                          newOpts[oIdx] = e.target.value;
                          setActiveQuestion({ ...activeQuestion, options: newOpts });
                        }}
                        className="flex-1 bg-white p-2 rounded-lg border border-slate-200 text-xs text-slate-800 font-medium"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الشرح والتعليل (اختياري):</label>
                <textarea
                  value={activeQuestion.explanation || ''}
                  onChange={(e) => setActiveQuestion({ ...activeQuestion, explanation: e.target.value })}
                  rows={2}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 font-medium text-slate-700"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleSaveActiveQuestion}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  حفظ تعديل هذا السؤال
                </button>
              </div>
            </div>
          )}

          {/* List of Questions */}
          <div className="space-y-3">
            {questions.map((q, idx) => (
              <div
                key={q.id || idx}
                className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  editingIndex === idx
                    ? 'bg-indigo-50/50 border-indigo-300'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-mono">
                      #{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {q.questionText}
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-500 font-medium flex flex-wrap gap-2 pt-1">
                    <span>الخيار الصحيح: <strong className="text-emerald-700">{['أ', 'ب', 'ج', 'د', 'هـ'][q.correctAnswerIndex] || q.correctAnswerIndex + 1}. {q.options[q.correctAnswerIndex]}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto pt-2 sm:pt-0">
                  <button
                    onClick={() => handleStartEdit(idx)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>تعديل</span>
                  </button>

                  <button
                    onClick={() => handleDeleteQuestion(idx)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-white px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            إلغاء
          </button>

          <button
            onClick={handleSaveAll}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-md cursor-pointer ${
              hasSaved ? 'bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {hasSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{hasSaved ? 'تم الحفظ بنجاح!' : 'حفظ التعديلات نهائياً'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
