import React from 'react';
import { Download, Code2, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { profileData } from '../data/profile';

export default function About() {
  const highlights = [
    {
      icon: Server,
      title: "Backend Focus",
      desc: "Chuyên sâu Java, Spring Boot, Spring Security, kiến trúc phân tầng và RESTful API chuẩn mực."
    },
    {
      icon: Code2,
      title: "Frontend Knowledge",
      desc: "Xây dựng Single Page Application hiện đại với React, JavaScript ES6+, Vite và Tailwind CSS."
    },
    {
      icon: Database,
      title: "Database & Architecture",
      desc: "Thiết kế CSDL quan hệ MySQL, tối ưu truy vấn, làm quen với Docker container và Microservices."
    },
    {
      icon: Sparkles,
      title: "Tư duy thực tế",
      desc: "Sinh viên PNV được rèn luyện tác phong kỷ luật, khả năng tự học nhanh, clean code và giải quyết vấn đề."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionTitle
        badge="About Me"
        title="Về bản thân tôi"
        subtitle="Hồ Anh Sang – Sinh viên CNTT đam mê phát triển hệ thống web chất lượng, ổn định và tối ưu."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Concise Bio */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4 text-sm sm:text-base text-[#D4D4E0] leading-relaxed">
            {profileData.about.summary.map((paragraph, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#20C5E8] shrink-0 mt-0.5" />
                <p>{paragraph}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="md"
              href={profileData.contact.cvLink}
              download="Ho-Anh-Sang-CV.pdf"
              icon={Download}
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="md"
              href="#contact"
            >
              Liên hệ hợp tác
            </Button>
          </div>
        </div>

        {/* Right Column: 4 Key Capability Highlights */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#11111D] border border-[#252536] rounded-2xl p-5 hover:border-[#20C5E8]/60 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#20C5E8]/10 border border-[#20C5E8]/30 flex items-center justify-center text-[#20C5E8] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-[#F5F5FA] mb-2 group-hover:text-[#20C5E8] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9999AA] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

