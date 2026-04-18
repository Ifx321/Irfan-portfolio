import React from 'react';
import { motion } from 'framer-motion';
import { TextGlitch } from '../components/TextGlitch';
import { PageContainer } from '../components/PageContainer';

import { NextNavButton } from '../components/NextNavButton';   // ✅ ADDED

export const Experience = () => {
  return (
    <PageContainer>
      <div className="relative space-y-12">


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
              "Automated end-to-end data cleaning pipelines using Python (Pandas) and SQL, eliminating manual errors and ensuring 100% data integrity for business reporting.",
              "Synthesized sales and financial trends across global regions to identify high-growth product categories, providing the data foundation for strategic resource allocation.",
              "Engineered interactive Power BI dashboards transforming raw financial datasets into visual stories, enabling stakeholders to track key metrics in real-time.",
              "Facilitated faster decision-making for executive stakeholders by translating complex technical findings into clear, actionable summaries.",
              " Produced project documentation including a Business Requirement Document (BRD) covering data schema, KPI definitions, and stakeholder requirements — establishing a structured analytical framework."
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
    </PageContainer>
  );
};