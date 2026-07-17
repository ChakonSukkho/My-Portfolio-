import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Back to top"
          className="fixed bottom-24 right-6 z-[60] grid h-11 w-11 place-items-center rounded-full border border-cyan-300/35 bg-slate-900/90 text-sm text-cyan-200 shadow-glow backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-400/15 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:bottom-28 sm:right-9 sm:h-12 sm:w-12"
          initial={{ opacity: 0, y: 12, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.85 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowUp aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
