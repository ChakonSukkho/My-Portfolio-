import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';

const contactLinks = [
  {
    label: 'Email',
    value: 'chakon0927sukkho@gmail.com',
    href: 'mailto:chakon0927sukkho@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'Phone',
    value: '018-965 4519',
    href: 'tel:+60189654519',
    icon: FaPhoneAlt,
  },
  {
    label: 'GitHub',
    value: 'github.com/ChakonSukkho',
    href: 'https://github.com/ChakonSukkho',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/chakonsukkho',
    href: 'https://linkedin.com/in/chakonsukkho',
    icon: FaLinkedin,
  },
  {
    label: 'Location',
    value: 'Kuala Lumpur, Malaysia',
    href: '#contact',
    icon: FaMapMarkerAlt,
  },
];

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thank you. This form is frontend-only for now. Please email me directly for a real message.');
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-container py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s connect for software engineering opportunities."
        description="I am open to internship and fresh graduate software engineering, web development, and application support roles."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-card rounded-[2rem] p-7"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="text-2xl font-black text-white">Contact Details</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Reach out through email, phone, GitHub, or LinkedIn. I am ready to discuss opportunities, projects, and technical roles.
          </p>

          <div className="mt-7 grid gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">{item.label}</span>
                    <span className="block break-all font-semibold text-slate-200">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-[2rem] p-7"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <h3 className="text-2xl font-black text-white">Send a Message</h3>
          <p className="mt-3 leading-7 text-slate-400">This contact form is frontend-only. You can connect it later with EmailJS, Formspree, or a backend API.</p>

          <div className="mt-7 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Name</span>
              <input
                required
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Message</span>
              <textarea
                required
                name="message"
                rows="6"
                placeholder="Write your message here..."
                className="resize-none rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20"
              />
            </label>
          </div>

          <button type="submit" className="primary-button mt-6 w-full">
            Send Message <FaPaperPlane />
          </button>

          {status && <p className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm text-cyan-100">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
