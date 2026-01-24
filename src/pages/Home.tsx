import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PixelTrail } from '../components/PixelTrail';
import { TextGlitch } from '../components/TextGlitch';
import { ParticleButton } from '../components/ParticleButton';
import { LandingHero } from '../components/LandingHero';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <LandingHero />
      <div className="relative space-y-12 py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <PixelTrail 
          pixelSize={24}
          fadeDuration={1000}
          pixelClassName="bg-white/5 border-[0.5px] border-white/10"
        />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white flex flex-col gap-4">
          <TextGlitch text="Data Analyst." hoverText="IRFAN SALIM" className="text-5xl md:text-7xl py-2" />
          <TextGlitch 
            text="Bridging financial principles with technical solutions." 
            className="text-2xl md:text-4xl text-white/70 py-1"
            delay={0.2}
          />
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] space-y-6 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <TextGlitch 
          text="ABOUT ME" 
          className="text-white/60 text-sm font-bold uppercase tracking-widest relative z-10"
        />
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium relative z-10">
          I work on transforming large-scale business and financial data into actionable insights that support real decision-making. With a strong commerce background, I focus on identifying revenue drivers, performance gaps, and operational inefficiencies using Python, SQL, and Power BI. My work centers on building analytical systems that go beyond dashboards — delivering insights that improve business outcomes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center md:justify-start"
      >
        <ParticleButton 
          onClick={() => navigate('/projects')}
          className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full flex items-center gap-3 text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <span>View Projects</span>
          <ArrowRight size={20} />
        </ParticleButton>
      </motion.div>
      </div>
    </div>
  );
};


