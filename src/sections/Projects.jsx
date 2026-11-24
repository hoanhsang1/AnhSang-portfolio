import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData, projectCategories } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionTitle
        badge="Featured Projects"
        title="Dự án tiêu biểu"
        subtitle="Các dự án minh chứng cho năng lực lập trình Java Spring Boot, React, tối ưu CSDL và tư duy kiến trúc phần mềm."
        align="center"
      />

      {/* Category Filter Pills (Style from screenshot 4) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#20C5E8] text-[#080812] font-semibold shadow-md shadow-[#20C5E8]/20'
                : 'bg-[#11111D] text-[#9999AA] border border-[#252536] hover:text-[#F5F5FA] hover:border-[#20C5E8]/40'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={handleOpenDetails}
          />
        ))}
      </div>

      {/* 9-Part Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />
    </section>
  );
}

