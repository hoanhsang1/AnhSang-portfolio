import React, { useState } from 'react';
import { Mail, MapPin, Send, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { profileData } from '../data/profile';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Get In Touch Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#20C5E8]"></span>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#20C5E8]">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5FA] tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-sm sm:text-base text-[#9999AA] leading-relaxed">
              Bạn đang tìm kiếm một lập trình viên Fullstack tiềm năng với nền tảng Java Spring Boot và React vững chắc? Tôi luôn sẵn sàng trao đổi cơ hội thực tập, dự án và học hỏi!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#11111D] border border-[#252536]">
              <div className="w-10 h-10 rounded-lg bg-[#20C5E8]/10 border border-[#20C5E8]/30 flex items-center justify-center text-[#20C5E8]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#9999AA] block">Email</span>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="text-sm font-semibold text-[#F5F5FA] hover:text-[#20C5E8] transition-colors"
                >
                  {profileData.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#11111D] border border-[#252536]">
              <div className="w-10 h-10 rounded-lg bg-[#20C5E8]/10 border border-[#20C5E8]/30 flex items-center justify-center text-[#20C5E8]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#9999AA] block">Địa điểm</span>
                <span className="text-sm font-semibold text-[#F5F5FA]">
                  Đà Nẵng, Việt Nam / Remote
                </span>
              </div>
            </div>
          </div>

          {/* Socials & Download CV */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-medium text-[#9999AA] block">Kết nối với tôi:</span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/50 transition-colors cursor-pointer"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#11111D] border border-[#252536] flex items-center justify-center text-[#9999AA] hover:text-[#20C5E8] hover:border-[#20C5E8]/50 transition-colors cursor-pointer"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <Button
                variant="secondary"
                size="sm"
                href={profileData.contact.cvLink}
                download="Ho-Anh-Sang-CV.pdf"
                icon={FileText}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Send a Message Form */}
        <div className="lg:col-span-7 bg-[#11111D] border border-[#252536] rounded-2xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-[#F5F5FA] mb-6">
            Send a Message
          </h3>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex flex-col items-center justify-center text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              <h4 className="font-bold text-base text-[#F5F5FA]">Tin nhắn đã được gửi thành công!</h4>
              <p className="text-xs text-[#9999AA]">
                Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi qua email trong thời gian sớm nhất.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-[#9999AA]">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl bg-[#171727] border border-[#252536] text-[#F5F5FA] text-sm focus:outline-none focus:border-[#20C5E8] focus:ring-1 focus:ring-[#20C5E8] transition-colors placeholder:text-[#6b6b80]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-[#9999AA]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#171727] border border-[#252536] text-[#F5F5FA] text-sm focus:outline-none focus:border-[#20C5E8] focus:ring-1 focus:ring-[#20C5E8] transition-colors placeholder:text-[#6b6b80]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-[#9999AA]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Trao đổi cơ hội thực tập / dự án..."
                  className="w-full px-4 py-3 rounded-xl bg-[#171727] border border-[#252536] text-[#F5F5FA] text-sm focus:outline-none focus:border-[#20C5E8] focus:ring-1 focus:ring-[#20C5E8] transition-colors placeholder:text-[#6b6b80]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-[#9999AA]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team or idea..."
                  className="w-full px-4 py-3 rounded-xl bg-[#171727] border border-[#252536] text-[#F5F5FA] text-sm focus:outline-none focus:border-[#20C5E8] focus:ring-1 focus:ring-[#20C5E8] transition-colors placeholder:text-[#6b6b80] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#20C5E8] hover:bg-[#18AECF] text-[#080812] font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#20C5E8]/20 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
