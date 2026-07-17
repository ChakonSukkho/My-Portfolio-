import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const rows = [
  ['Problem', 'problem'],
  ['Solution', 'solution'],
  ['Tech Stack', 'techStack'],
  ['Features', 'features'],
  ['My Role', 'role'],
  ['Outcome', 'outcome'],
];

function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-slate-950/90 px-4 py-6 backdrop-blur-md sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="glass-card my-auto max-h-[calc(100dvh-3rem)] w-full max-w-4xl overflow-y-auto rounded-[2rem] p-5 sm:p-8"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky -top-5 z-10 mb-6 flex items-start justify-between gap-4 border-b border-white/10 bg-slate-900/95 pb-5 pt-1 backdrop-blur-xl sm:-top-8 sm:pt-0">
              <div className="min-w-0 pr-2">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Case Study</p>
                <h3 id="case-study-title" className="mt-2 break-words text-xl font-black leading-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid gap-4">
              {rows.map(([label, key]) => (
                <div key={key} className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">{label}</h4>
                  <p className="mt-2 leading-8 text-slate-300">{project.caseStudy[key]}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default CaseStudyModal;
