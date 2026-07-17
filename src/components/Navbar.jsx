import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => !document.documentElement.classList.contains('light'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setIsDark((current) => {
      const nextThemeIsDark = !current;
      document.documentElement.classList.toggle('light', !nextThemeIsDark);
      document.documentElement.classList.toggle('dark', nextThemeIsDark);
      localStorage.setItem('portfolio-theme', nextThemeIsDark ? 'dark' : 'light');
      return nextThemeIsDark;
    });
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/80 shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section-container flex h-28 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="group inline-flex items-center gap-4"
          onClick={closeMenu}
        >
          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-lg font-black text-cyan-200 shadow-glow transition group-hover:scale-105">
            CE
          </span>

          <span className="hidden text-lg font-bold tracking-[0.22em] text-white sm:block">
            CHAKON
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-6 py-3 text-base font-semibold text-slate-300 transition hover:bg-white/5 hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full border border-cyan-300/30 px-7 py-3 text-base font-bold text-cyan-100 transition hover:bg-cyan-300/10 hover:shadow-glow"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-lg text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-lg text-slate-100"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-xl text-white"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="section-container pb-6 lg:hidden">
          <div className="glass-card rounded-3xl p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-5 py-4 text-base font-semibold text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-100"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-3 block rounded-2xl border border-cyan-300/30 px-5 py-4 text-center text-base font-bold text-cyan-100 transition hover:bg-cyan-300/10"
              onClick={closeMenu}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
