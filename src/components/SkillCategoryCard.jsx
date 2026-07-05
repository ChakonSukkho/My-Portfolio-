import { motion } from 'framer-motion';

function SkillCategoryCard({ category, index }) {
  return (
    <motion.article
      className="glass-card group rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-glow"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">{category.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
      </div>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
        {category.skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="group/icon relative flex justify-center">
              <button
                type="button"
                aria-label={skill.name}
                className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl text-slate-200 transition duration-300 hover:-translate-y-2 hover:scale-110 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <Icon aria-hidden="true" />
              </button>
              <span className="pointer-events-none absolute -top-10 z-20 whitespace-nowrap rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-xs font-semibold text-cyan-100 opacity-0 shadow-xl transition group-hover/icon:-translate-y-1 group-hover/icon:opacity-100">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}

export default SkillCategoryCard;
