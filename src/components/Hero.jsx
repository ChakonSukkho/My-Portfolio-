import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import LanyardCard from './LanyardCard.jsx';

const ThreeLanyardCard = lazy(() => import('./ThreeLanyardCard.jsx'));

function Hero() {
  return (
    <section id="home" className="section-container relative flex min-h-screen items-center pb-20 pt-44 lg:pt-40">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Portfolio 2026</span>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I am <span className="gradient-text">CHAKON A/L EH CHEH</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-cyan-100 sm:text-2xl">Software Engineering | IT Support</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Junior Software Engineering and Application Support candidate with hands-on experience developing,
            testing, deploying, and troubleshooting business web applications.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="primary-button">
              View Projects <FaArrowRight />
            </a>
            <a href="/chakon-resume.pdf" className="secondary-button" download>
              Download Resume <FaDownload />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me <FaEnvelope />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/ChakonSukkho"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Chakon GitHub profile"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/chakonsukkho"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Chakon LinkedIn profile"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <Suspense fallback={<LanyardCard />}>
            <ThreeLanyardCard />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
