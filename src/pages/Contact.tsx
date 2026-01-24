import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { TextGlitch } from '../components/TextGlitch';
import { GlassmorphismProfileCard } from '../components/GlassmorphismProfileCard';
import { PixelTrail } from '../components/PixelTrail';

export const Contact = () => {
  const profileData = {
    name: 'Irfan Salim',
    title: 'Data Analyst',
    bio: "I work on turning business and financial data into clear, actionable decisions. My focus is on analytics that drives revenue, performance optimization, and strategic insight using SQL, Python, and Power BI.",
    socialLinks: [
      { id: 'email', icon: Mail, label: 'Email', href: 'mailto:irfan.salim.analyst@gmail.com' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/irfan-salim-3b83a430a' },
      { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/Ifx321' },
      { id: 'phone', icon: Phone, label: 'Phone', href: 'tel:+919074874436' },
    ],
  };

  return (
    <div className="relative space-y-12">
      <PixelTrail 
        pixelSize={24}
        fadeDuration={1000}
        pixelClassName="bg-white/5 border-[0.5px] border-white/10"
      />
      <div className="flex items-center gap-4 py-2">
        <TextGlitch 
          text="CONTACT" 
          className="text-6xl md:text-8xl font-black tracking-tighter text-white"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-12">
        <GlassmorphismProfileCard {...profileData} />
        
        <div className="mt-12 text-center max-w-2xl">
          <p className="text-xl text-white/80 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
      </div>
    </div>
  );
};
