import { motion } from 'framer-motion';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';

const experiencePoints = [
  'Developed and improved business web applications using React, TypeScript, Bootstrap, PHP, MySQL, and Supabase.',
  'Built dashboard, user, member, group, activity, reporting, and audit-log modules.',
  'Implemented authentication, approval workflows, and role-based access control.',
  'Troubleshot Dynamics 365 and Power Automate issues involving Excel, Dataverse, and renewal workflows.',
  'Tested application modules, verified database records, and documented technical issues and fixes.',
  'Supported WordPress maintenance, SEO improvements, and application deployment across cloud platforms.',
];

function Experience() {
  return (
    <section id="experience" className="section-container py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Real internship experience across development, support, automation, and deployment."
        description="My internship work covered both software engineering tasks and business application support responsibilities."
      />

      <motion.article
        className="glass-card relative overflow-hidden rounded-[2rem] p-7 sm:p-9"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-200">
              <FaBriefcase />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Jan 2026 – July 2026</p>
            <h3 className="mt-3 text-2xl font-black text-white">Software Engineering & IT Support Intern</h3>
            <p className="mt-2 text-lg font-semibold text-slate-300">Bintara Solutions Sdn Bhd</p>
            <p className="mt-5 leading-7 text-slate-400">
              Supported business systems through application development, testing, troubleshooting, workflow support,
              WordPress maintenance, SEO improvements, and cloud deployment tasks.
            </p>
          </div>

          <ul className="grid gap-4">
            {experiencePoints.map((point, index) => (
              <motion.li
                key={point}
                className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-slate-300"
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <FaCheckCircle className="mt-1 shrink-0 text-cyan-300" />
                <span className="leading-7">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.article>
    </section>
  );
}

export default Experience;
