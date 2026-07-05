import SectionHeading from './SectionHeading.jsx';
import SkillCategoryCard from './SkillCategoryCard.jsx';
import { skillCategories } from '../data/skills.js';

function Skills() {
  return (
    <section id="skills" className="section-container py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Icon-based skills grouped by development area."
        description="Technology names are available on hover while keeping the section clean, premium, and recruiter-friendly."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
