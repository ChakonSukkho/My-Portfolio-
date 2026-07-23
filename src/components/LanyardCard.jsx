import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCode, FaMapMarkerAlt } from 'react-icons/fa';

function LanyardCard() {
  const [photoSrc, setPhotoSrc] = useState(`${import.meta.env.BASE_URL}profile.jpeg`);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-md" aria-label="Interactive developer ID badge">
      <div className="absolute top-0 h-36 w-8 rounded-full bg-gradient-to-b from-cyan-300/50 to-blue-600/10 blur-xl" aria-hidden="true" />
      <motion.div
        className="relative w-full cursor-grab select-none pt-10 active:cursor-grabbing"
        drag
        dragElastic={0.18}
        dragConstraints={{ left: -24, right: 24, top: -24, bottom: 24 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mx-auto h-28 w-4 rounded-full bg-gradient-to-b from-cyan-300 to-blue-600 shadow-glow" aria-hidden="true" />
        <div className="mx-auto -mt-2 h-7 w-24 rounded-full border border-white/15 bg-slate-900 shadow-card" aria-hidden="true" />

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="glass-card relative mx-auto -mt-1 overflow-hidden rounded-[2rem] p-5 shadow-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-blue-600/20" aria-hidden="true" />
          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden="true" />

          <div className="relative z-10">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                Developer ID
              </span>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Available
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-[116px_1fr] sm:items-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-3xl border border-cyan-300/25 bg-slate-950 shadow-glow sm:mx-0 sm:h-28 sm:w-28">
                <img
                  src={photoSrc}
                  alt="Profile placeholder for CHAKON A/L EH CHEH"
                  className="h-full w-full object-cover"
                  onError={() => setPhotoSrc(`${import.meta.env.BASE_URL}profile-placeholder.svg`)}
                />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Name</p>
                <h3 className="mt-1 text-2xl font-black leading-tight text-white">CHAKON A/L EH CHEH</h3>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold text-cyan-100">
                  <FaCode className="text-cyan-300" /> Junior Software Engineer
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                <p className="text-xs text-slate-500">Focus</p>
                <p className="mt-1 font-bold text-slate-100">Web Apps</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                <p className="text-xs text-slate-500">Location</p>
                <p className="mt-1 inline-flex items-center gap-2 font-bold text-slate-100">
                  <FaMapMarkerAlt className="text-cyan-300" /> KL, MY
                </p>
              </div>
            </div>

            <div className="mt-6 h-12 rounded-2xl bg-[repeating-linear-gradient(90deg,#e2e8f0_0,#e2e8f0_3px,transparent_3px,transparent_8px)] opacity-40" aria-label="Decorative barcode" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LanyardCard;
