import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';

const coursework = [
  'Programming',
  'Database Systems',
  'Networking',
  'Web Development',
  'Mobile Development',
  'System Analysis & Design',
];

function Education() {
  return (
    <section id="education" className="section-container py-24">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation in digital technology and software development."
        description="My diploma studies support my practical experience in web development, databases, networking, and system design."
      />

      <motion.article
        className="glass-card relative overflow-hidden rounded-[2rem] p-7 sm:p-9"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <div className="absolute -left-10 bottom-0 h-52 w-52 rounded-full bg-blue-600/10 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-cyan-300/10 text-3xl text-cyan-200">
              <FaGraduationCap />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">2023 – 2026</p>
            <h3 className="mt-3 text-3xl font-black text-white">Diploma in Digital Information</h3>
            <p className="mt-3 text-lg font-semibold text-slate-300">Politeknik Sultan Mizan Zainal Abidin</p>
            <p className="mt-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
              CGPA: 3.94
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white">Relevant Coursework</h4>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {coursework.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}

export default Education;
