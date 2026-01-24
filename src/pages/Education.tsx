import React from 'react';
import { motion } from 'framer-motion';
import { TextGlitch } from '../components/TextGlitch';
import { PixelTrail } from '../components/PixelTrail';
import { NextNavButton } from '../components/NextNavButton';  // ✅ FIXED IMPORT

export const Education = () => {
  return (
    <div className="relative space-y-12 py-12">
      <PixelTrail 
        pixelSize={24}
        fadeDuration={1000}
        pixelClassName="bg-white/5 border-[0.5px] border-white/10"
      />

      <TextGlitch 
        text="Education" 
        className="text-4xl font-bold tracking-tighter text-white" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl flex flex-col md:flex-row justify-between gap-8"
      >
        <div>
          <TextGlitch text="Bachelor of Commerce (B.Com)" className="text-3xl font-bold text-white" />
          <p className="text-xl text-white/60 mt-2">Kerala University</p>
        </div>
        <div className="text-right">
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/50 whitespace-nowrap min-w-fit inline-flex items-center">
            June 2021 – March 2024
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl flex flex-col md:flex-row justify-between gap-8"
      >
        <div>
          <TextGlitch text="Higher Secondary Education (Commerce)" className="text-3xl font-bold text-white" />
          <p className="text-xl text-white/60 mt-2">Kerala Higher Secondary Education Board</p>
        </div>
        <div className="text-right">
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/50 whitespace-nowrap min-w-fit inline-flex items-center">
            June 2019 – March 2021
          </span>
        </div>
      </motion.div>

      {/* 🔥 NEXT PAGE NAVIGATION */}
      <NextNavButton to="/contact" label="View Contact" />

    </div>
  );
};