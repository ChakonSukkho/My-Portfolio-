import SectionHeading from './SectionHeading.jsx';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills.js';

const categoryStyles = {
  Frontend: {
    icon: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300',
    dot: 'bg-cyan-400',
    hover: 'hover:border-cyan-300/40 hover:bg-cyan-400/[0.08]',
  },
  'Backend & API': {
    icon: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
    dot: 'bg-emerald-400',
    hover: 'hover:border-emerald-300/40 hover:bg-emerald-400/[0.08]',
  },
  Database: {
    icon: 'border-blue-400/25 bg-blue-400/10 text-blue-300',
    dot: 'bg-blue-400',
    hover: 'hover:border-blue-300/40 hover:bg-blue-400/[0.08]',
  },
  'Cloud & Deployment': {
    icon: 'border-sky-400/25 bg-sky-400/10 text-sky-300',
    dot: 'bg-sky-400',
    hover: 'hover:border-sky-300/40 hover:bg-sky-400/[0.08]',
  },
  'Microsoft Ecosystem': {
    icon: 'border-amber-400/25 bg-amber-400/10 text-amber-300',
    dot: 'bg-amber-400',
    hover: 'hover:border-amber-300/40 hover:bg-amber-400/[0.08]',
  },
  'Developer Tools': {
    icon: 'border-orange-400/25 bg-orange-400/10 text-orange-300',
    dot: 'bg-orange-400',
    hover: 'hover:border-orange-300/40 hover:bg-orange-400/[0.08]',
  },
};

function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Skills & Tools"
        description="Technologies and tools I use to design, build, deploy, and support modern applications."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {skillCategories.flatMap((category) =>
          category.skills.map((skill) => ({ ...skill, category: category.title })),
        ).map((skill, index) => {
          const Icon = skill.icon;
          const styles = categoryStyles[skill.category];

          return (
            <motion.article
              key={`${skill.category}-${skill.name}`}
              className={`group flex min-h-44 flex-col items-center justify-center rounded-[1.4rem] border border-white/10 bg-slate-900/45 px-3 py-5 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:shadow-card ${styles.hover}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.35) }}
              tabIndex="0"
            >
              <span className={`grid h-14 w-14 place-items-center rounded-2xl border text-3xl transition duration-300 group-hover:scale-110 ${styles.icon}`}>
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-slate-100">{skill.name}</h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                {skill.category}
              </p>
              <span className={`mt-3 h-1.5 w-1.5 rounded-full ${styles.dot}`} aria-hidden="true" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
