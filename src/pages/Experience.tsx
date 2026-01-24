import React from 'react';
import { motion } from 'framer-motion';
import { TextGlitch } from '../components/TextGlitch';
import { PixelTrail } from '../components/PixelTrail';
import { NextNavButton } from '../components/NextNavButton';   // ✅ ADDED

export const Experience = () => {
  return (
    <div className="relative space-y-12 py-12">
      <PixelTrail 
        pixelSize={24}
        fadeDuration={1000}
        pixelClassName="bg-white/5 border-[0.5px] border-white/10"
      />

      <TextGlitch 
        text="Work Experience" 
        className="text-4xl font-bold tracking-tighter text-white" 
      />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <TextGlitch text="Data Analyst Intern" className="text-2xl font-bold text-white" />
            <p className="text-white/70">Asquare Technologies, Kochi, India</p>
          </div>
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/60">
            June 2025 – Nov 2025
          </span>
        </div>

        <ul className="space-y-4 text-white/90">
          {[
            "Used Python (Pandas) and SQL to clean raw datasets and fix reporting errors.",
            "Analyzed sales data to find high-performing regions and product trends.",
            "Created interactive Power BI dashboards for non-technical stakeholders.",
            "Translated technical findings into actionable executive summaries."
          ].map((bullet, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-zinc-600 mt-1.5">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* 🔥 NEXT PAGE NAVIGATION */}
      <NextNavButton to="/skills" label="View Skills" />

    </div>
  );
};