import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Education() {
  const { education } = profileData;

  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionTitle
        badge="Education"
        title="Học vấn &amp; Đào tạo"
        subtitle="Nền tảng kiến thức kỹ thuật phần mềm vững chắc và kỹ năng làm việc thực tế tại PNV."
        align="center"
      />

      <div className="bg-[#11111D] border border-[#252536] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#20C5E8]/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#20C5E8]/10 border border-[#20C5E8]/30 flex items-center justify-center text-[#20C5E8]">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5FA]">
                {education.institution}
              </h3>
              <p className="text-base text-[#20C5E8] font-semibold mt-1">
                {education.degree}
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-[#9999AA]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#20C5E8]" />
                <span>Dự kiến tốt nghiệp: <strong>{education.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Thành tích: <strong>{education.gpa}</strong></span>
              </div>
            </div>

            <p className="text-sm text-[#9999AA] leading-relaxed pt-2">
              {education.description}
            </p>
          </div>

          {/* Courses & Training Modules */}
          <div className="lg:col-span-7 bg-[#171727] border border-[#252536] rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#F5F5FA]">
              <BookOpen className="w-4 h-4 text-[#20C5E8]" />
              <span>Chương trình đào tạo trọng tâm</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {education.courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0c0d18] border border-[#252536]/80 text-xs sm:text-sm text-[#D4D4E0]"
                >
                  <CheckCircle className="w-4 h-4 text-[#20C5E8] shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

