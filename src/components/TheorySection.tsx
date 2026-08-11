import React, { useState } from 'react';
import { Lecture } from '../types';
import { BookOpen, CheckCircle, Copy, Check, ArrowLeft } from 'lucide-react';

interface TheorySectionProps {
  lecture: Lecture;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onGoToQuiz: () => void;
}

export const TheorySection: React.FC<TheorySectionProps> = ({
  lecture,
  isCompleted,
  onToggleComplete,
  onGoToQuiz,
}) => {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const handleCopyCode = (codeText: string, index: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  // Helper to format theoretical content into readable JSX blocks
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let currentCode: string[] = [];
    let codeLanguage = 'cpp';
    let codeBlockCount = 0;

    lines.forEach((line, i) => {
      // Check for code blocks
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          // Close code block
          const codeString = currentCode.join('\n');
          const index = codeBlockCount++;
          elements.push(
            <div key={`code-${i}`} className="my-5 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md font-mono text-sm dir-ltr">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs text-slate-400">
                <span className="uppercase tracking-wider font-semibold text-indigo-400">{codeLanguage || 'C++'}</span>
                <button
                  onClick={() => handleCopyCode(codeString, index)}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  {copiedCodeIndex === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-sans text-xs">تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-sans text-xs">نسخ الكود</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-slate-200 leading-relaxed text-xs sm:text-sm">
                <code>{codeString}</code>
              </pre>
            </div>
          );
          currentCode = [];
          inCodeBlock = false;
        } else {
          // Open code block
          inCodeBlock = true;
          codeLanguage = line.trim().replace('```', '') || 'cpp';
        }
        return;
      }

      if (inCodeBlock) {
        currentCode.push(line);
        return;
      }

      const trimmed = line.trim();
      if (!trimmed) {
        elements.push(<div key={`space-${i}`} className="h-2" />);
        return;
      }

      // Blockquotes
      if (trimmed.startsWith('> ')) {
        const text = trimmed.replace(/^>\s*/, '');
        elements.push(
          <blockquote key={`quote-${i}`} className="my-4 p-4 rounded-xl bg-amber-50/70 border-r-4 border-amber-500 text-amber-900 text-sm sm:text-base leading-relaxed shadow-xs">
            {formatInlineMarkdown(text)}
          </blockquote>
        );
        return;
      }

      // Markdown Tables
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        // Skip separator row like | :--- | :--- |
        if (trimmed.includes('---')) {
          return;
        }

        const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
        // Check if previous element is a table or start new table
        elements.push(
          <div key={`table-row-${i}`} className="overflow-x-auto my-2">
            <table className="w-full text-right text-sm border-collapse rounded-lg overflow-hidden border border-slate-200 shadow-xs">
              <tbody>
                <tr className="bg-slate-50 border-b border-slate-200 hover:bg-slate-100/80 transition-colors">
                  {cells.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-4 py-2.5 text-slate-800 font-medium border-l last:border-l-0 border-slate-200">
                      {formatInlineMarkdown(cell)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        );
        return;
      }

      // Headings
      if (trimmed.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${i}`} className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-6 mb-3 leading-snug border-b pb-3 border-slate-100">
            {trimmed.replace('# ', '')}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${i}`} className="text-xl sm:text-2xl font-bold text-indigo-900 mt-6 mb-3 leading-snug">
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-lg font-bold text-slate-800 mt-5 mb-2 leading-snug">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(<hr key={`hr-${i}`} className="my-6 border-slate-200" />);
      } else if (trimmed.startsWith('- ')) {
        // Bullet points
        const text = trimmed.replace('- ', '');
        elements.push(
          <li key={`li-${i}`} className="flex items-start gap-2.5 my-1.5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
            <span>{formatInlineMarkdown(text)}</span>
          </li>
        );
      } else {
        // Paragraph
        elements.push(
          <p key={`p-${i}`} className="text-slate-700 text-sm sm:text-base leading-relaxed my-2">
            {formatInlineMarkdown(trimmed)}
          </p>
        );
      }
    });

    return elements;
  };

  // Simple inline markdown formatter for **bold** and `code`
  const formatInlineMarkdown = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="bg-slate-100 text-indigo-700 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded border border-slate-200 dir-ltr inline-block mx-0.5">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-indigo-200 text-xs font-semibold mb-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>قسم الشرح النظري</span>
            <span>•</span>
            <span className="font-mono">{lecture.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {lecture.subtitle}
          </h2>
          <p className="text-indigo-100/80 text-sm mt-2 max-w-3xl leading-relaxed">
            {lecture.summary}
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-4 sm:p-8 lg:p-10 prose prose-slate max-w-none">
        {renderFormattedContent(lecture.theoryContent)}
      </div>

      {/* Bottom Footer Actions */}
      <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        
        {/* Toggle Complete */}
        <button
          onClick={onToggleComplete}
          className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all border cursor-pointer ${
            isCompleted
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
        >
          <CheckCircle className={`w-5 h-5 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
          <span>{isCompleted ? 'مكتمل - قمت بقراءة الشرح' : 'تحديد الشرح كمكتمل'}</span>
        </button>

        {/* Go to MCQs */}
        <button
          onClick={onGoToQuiz}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-bold transition-all shadow-md shadow-indigo-200 hover:shadow-lg cursor-pointer"
        >
          <span>الانتقال إلى الأسئلة المؤتمتة ({lecture.questions.length})</span>
          <ArrowLeft className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};
