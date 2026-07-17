import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaBullseye,
  FaChartLine,
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
  FaListUl,
  FaTimes,
  FaUser,
} from 'react-icons/fa';

const sections = [
  { label: 'Problem', key: 'problem', icon: FaBullseye },
  { label: 'Solution', key: 'solution', icon: FaLightbulb },
  { label: 'Key Features', key: 'features', icon: FaListUl, wide: true },
  { label: 'My Role', key: 'role', icon: FaUser },
  { label: 'Outcome', key: 'outcome', icon: FaChartLine },
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
          className="case-study-backdrop fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-slate-950/90 px-4 py-6 backdrop-blur-md sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="glass-card my-auto flex max-h-[calc(100dvh-2rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[2rem]"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl sm:p-7">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Case Study
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {project.category}
                  </span>
                </div>
                <h3 id="case-study-title" className="mt-3 break-words text-xl font-black leading-tight text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">{project.description}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:rotate-90 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <FaTimes />
              </button>
            </header>

            <div className="overflow-y-auto p-5 sm:p-7">
              <div className="mb-6 flex flex-wrap gap-2" aria-label="Technology stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-semibold text-cyan-100">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {sections.map(({ label, key, icon: Icon, wide }) => (
                  <section
                    key={key}
                    className={`rounded-3xl border border-white/10 bg-slate-950/35 p-5 transition hover:border-cyan-300/20 sm:p-6 ${wide ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                        <Icon aria-hidden="true" />
                      </span>
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">{label}</h4>
                    </div>
                    <p className="mt-4 leading-7 text-slate-300">{project.caseStudy[key]}</p>
                  </section>
                ))}
              </div>
            </div>

            <footer className="flex shrink-0 flex-wrap items-center justify-end gap-3 border-t border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-xl sm:px-7">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="secondary-button px-4 py-2 text-xs">
                  GitHub <FaGithub />
                </a>
              )}
              {project.demoUrl && project.demoUrl !== '#' && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="primary-button px-4 py-2 text-xs">
                  View Live Demo <FaExternalLinkAlt />
                </a>
              )}
            </footer>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default CaseStudyModal;
