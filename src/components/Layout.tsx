import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, LayoutGrid, Cpu, GraduationCap, Download, MessageSquare } from 'lucide-react';
import { PixelTrail } from './PixelTrail';
import { ParticleButton } from './ParticleButton';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/projects', icon: LayoutGrid, label: 'Projects' },
  { path: '/experience', icon: Briefcase, label: 'Experience' },
  { path: '/skills', icon: Cpu, label: 'Skills' },
  { path: '/education', icon: GraduationCap, label: 'Education' },
  { path: '/contact', icon: MessageSquare, label: 'Contact' },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', backgroundColor: '#09090b', overflow: 'hidden' }}>
      {/* Layer 0: The Animation */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <PixelTrail 
          pixelSize={24}
          fadeDuration={1000}
          pixelClassName="bg-white/5 border-[0.5px] border-white/10"
        />
      </div>

      {/* Layer 1: The Content */}
      <div className="relative z-10 flex h-screen" style={{ backgroundColor: 'transparent' }}>
        
        {/* Sidebar */}
        <aside className="w-64 bg-zinc-900/60 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between hidden lg:flex h-full pointer-events-auto">
          <div className="space-y-8">
            <div className="px-2">
              <h2 className="text-3xl font-bold tracking-tighter text-cyan-400">Irfan Salim</h2>
              <p className="text-white/60 text-sm">Data Analyst</p>
            </div>
            
            <nav className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive 
                      ? "bg-white/10 text-white border border-white/5" 
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon size={20} className="transition-transform group-hover:scale-110" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* ✅ WORKING DOWNLOAD BUTTON */}
          <div className="space-y-4">
            <a 
              href="public/assets/cv/Irfan_Salim_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ParticleButton className="w-full bg-white text-black hover:bg-zinc-200 flex items-center justify-center gap-2">
                <Download size={18} />
                <span>Download CV</span>
              </ParticleButton>
            </a>
          </div>
        </aside>

        {/* Main Area */}
        <main className="flex-1 overflow-y-auto pointer-events-none" style={{ backgroundColor: 'transparent' }}>
          {/* Layer 2: The Text Interaction Fix */}
          <div className="max-w-4xl mx-auto p-12 pointer-events-auto">
            {children}
          </div>
          
          {/* Mobile Navigation */}
          <nav className="fixed bottom-6 left-6 right-6 z-20 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-4 lg:hidden pointer-events-auto">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-bold tracking-tighter text-cyan-400">Irfan Salim</h2>
            </div>
            <div className="flex justify-around items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `p-3 rounded-xl transition-all ${
                    isActive ? "bg-white/10 text-white" : "text-white/50"
                  }`}
                >
                  <item.icon size={20} />
                </NavLink>
              ))}
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
};
