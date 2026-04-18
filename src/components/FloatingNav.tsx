import { NavLink } from 'react-router-dom';
import { Home, Briefcase, LayoutGrid, Cpu, GraduationCap, MessageSquare, Download } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/projects', icon: LayoutGrid, label: 'Projects' },
  { path: '/experience', icon: Briefcase, label: 'Experience' },
  { path: '/skills', icon: Cpu, label: 'Skills' },
  { path: '/education', icon: GraduationCap, label: 'Education' },
  { path: '/contact', icon: MessageSquare, label: 'Contact' },
];

export const FloatingNav = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl pointer-events-auto">
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 group
              ${isActive ? "bg-white/10 text-cyan-400" : "text-white/50 hover:text-white hover:bg-white/5"}
            `}
          >
            <item.icon size={20} className="transition-transform group-hover:scale-110" />
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-zinc-900 text-white text-xs px-2 py-1 rounded border border-white/10 pointer-events-none">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
      <div className="w-[1px] h-6 bg-white/10 mx-1" />
      <a href="/assets/cv/Irfan_Salim_Resume.pdf" download="Irfan_Salim_Resume.pdf" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-cyan-400 transition-all font-bold text-sm">
        <Download size={18} />
        <span className="hidden md:block">CV</span>
      </a>
    </nav>
  );
};
