import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60189654519?text=Hi%20Chakon%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Chakon on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-button group fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full border border-emerald-300/50 bg-emerald-500 text-2xl text-white shadow-[0_0_28px_rgba(16,185,129,0.45)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16 sm:text-3xl"
    >
      <FaWhatsapp aria-hidden="true" className="transition group-hover:rotate-6" />
    </a>
  );
}

export default WhatsAppButton;
