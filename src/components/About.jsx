import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaShieldAlt } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';

const highlights = [
  {
    icon: FaLaptopCode,
    title: 'Application Development',
    text: 'Hands-on experience building business web application modules using React, TypeScript, PHP, MySQL, and Supabase.',
  },
  {
    icon: FaShieldAlt,
    title: 'Troubleshooting & Support',
    text: 'Strong in testing modules, checking records, resolving technical issues, and documenting fixes clearly.',
  },
  {
    icon: FaRocket,
    title: 'Business Improvement',
    text: 'Able to convert operational requirements into practical system improvements and automation workflows.',
  },
];

function About() {
  return (
    <section id="about" className="section-container py-24">
      <SectionHeading
        eyebrow="About Me"
        title="A junior software engineer focused on useful, maintainable business systems."
        description="I enjoy building clean interfaces, solving technical issues, and improving workflows through practical software solutions."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          className="glass-card rounded-[2rem] p-7 sm:p-9"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-lg leading-9 text-slate-300">
            Junior Software Engineering and Application Support candidate with hands-on experience developing,
            testing, deploying, and troubleshooting business web applications. Experienced in React,
            TypeScript, Supabase, PHP, MySQL, Dynamics 365, Power Automate, and cloud deployment.
          </p>
          <p className="mt-5 text-lg leading-9 text-slate-300">
            Strong in technical troubleshooting, documentation, and converting operational requirements into
            practical system improvements. I am looking for internship or fresh graduate software engineering
            opportunities where I can contribute, learn from experienced teams, and grow as a full-stack developer.
          </p>
        </motion.article>

        <div className="grid gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-glow"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-200">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-400">{item.text}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
