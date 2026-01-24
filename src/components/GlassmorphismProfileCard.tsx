import React, { useState } from 'react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

import profileImg from "../assets/profile/profile.jpg";

interface SocialLink {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
}

interface ActionButtonProps {
  text: string;
  href: string;
}

interface GlassmorphismProfileCardProps {
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
  actionButton: ActionButtonProps;
}

const SocialButton = ({ 
  item, 
  setHoveredItem, 
  hoveredItem 
}: { 
  item: SocialLink; 
  setHoveredItem: (id: string | null) => void; 
  hoveredItem: string | null;
}) => (
  <div className="relative">
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      aria-label={item.label}
    >
      <div className="relative z-10 flex items-center justify-center">
        <item.icon size={20} className="transition-all duration-200 ease-out text-white/70 group-hover:text-white" />
      </div>
    </a>
    <div 
      role="tooltip"
      className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-zinc-900 text-white border-white/10 ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
    >
      {item.label}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-zinc-900 border-b border-r border-white/10" />
    </div>
  </div>
);

const ActionButton = ({ socialLinks }: { socialLinks: SocialLink[] }) => (
  <div className="flex flex-col items-center gap-4 mt-8 w-full">
    <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Let's Talk</span>
    <div 
      className="flex items-center gap-2 p-2 rounded-full backdrop-blur-md transition-all duration-300 ease-out bg-white/10 border border-white/20"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
    >
      {socialLinks.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target={item.href.startsWith('http') ? "_blank" : undefined}
          rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out group hover:bg-white hover:text-black text-white/70 border border-transparent hover:border-white"
          aria-label={item.label}
        >
          <item.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  </div>
);

export const GlassmorphismProfileCard = ({
  name,
  title,
  bio,
  socialLinks = [],
}: GlassmorphismProfileCardProps) => {
  return (
    <div className="relative w-full max-w-sm">
      <div 
        className="relative flex flex-col items-center p-8 rounded-3xl border transition-all duration-500 ease-out backdrop-blur-xl bg-zinc-900/40 border-white/10"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="flex justify-center mb-4">
          <img src={profileImg} alt="Irfan Salim" className="w-[120px] h-[120px] rounded-full object-cover border-2 border-white/20" />
        </div>
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="mt-1 text-sm font-medium text-orange-500">{title}</p>
        <p className="mt-4 text-center text-sm leading-relaxed text-white/60">{bio}</p>

        <div className="w-1/2 h-px my-6 rounded-full bg-white/10" />

        <ActionButton socialLinks={socialLinks} />
      </div>
      
      <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-500 ease-out blur-3xl opacity-20 bg-gradient-to-r from-orange-500/50 to-amber-500/50" />
    </div>
  );
};
