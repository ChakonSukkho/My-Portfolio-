import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import CaseStudyModal from './CaseStudyModal.jsx';
import { projectFilters, projects } from '../data/projects.js';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-container py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected landing pages, software, dashboards, automation, and CMS work."
        description="Explore responsive landing pages and technical projects, each with its problem, solution, tools, key features, my role, and outcome."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Project filters">
        {projectFilters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'border-cyan-300/50 bg-cyan-300/15 text-cyan-100 shadow-glow'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/35 hover:text-cyan-100'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="popLayout">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpenCaseStudy={setSelectedProject} />
          ))}
        </div>
      </AnimatePresence>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export default Projects;
