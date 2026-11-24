import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillsData, skillCategories } from '../data/skills';
import { Info } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionTitle
        badge="Technical Skills"
        title="Kỹ năng chuyên môn"
        subtitle="Tập trung vào các công nghệ có thể giải thích chi tiết trong phỏng vấn tuyển dụng và áp dụng vào dự án thực tế."
        align="center"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#20C5E8] text-[#080812] font-semibold shadow-md shadow-[#20C5E8]/20'
                : 'bg-[#11111D] text-[#9999AA] border border-[#252536] hover:text-[#F5F5FA] hover:border-[#20C5E8]/40'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      {/* Note about interview transparency */}
      <div className="mt-8 p-4 rounded-xl bg-[#11111D] border border-[#252536] flex items-center gap-3 text-xs text-[#9999AA]">
        <Info className="w-4 h-4 text-[#20C5E8] shrink-0" />
        <span>
          <strong className="text-[#F5F5FA]">Tiêu chuẩn trung thực:</strong> Tôi phân định rõ ràng giữa kỹ năng thực chiến (Core / Proficient) và công nghệ đang nghiên cứu (Familiar / Exploration).
        </span>
      </div>
    </section>
  );
}

