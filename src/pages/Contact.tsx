import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { TextGlitch } from '../components/TextGlitch';
import { GlassmorphismProfileCard } from '../components/GlassmorphismProfileCard';
import { PageContainer } from '../components/PageContainer';


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
    <PageContainer>
      <div className="relative space-y-12">

        <div className="flex items-center gap-4 py-2">
          <TextGlitch
            text="CONTACT"
            className="text-6xl md:text-8xl font-black tracking-tighter text-white"
          />
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <GlassmorphismProfileCard {...profileData} />

        </div>
      </div>
    </PageContainer>
  );
};
