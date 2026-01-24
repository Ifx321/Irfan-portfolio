import React from 'react';
import { motion } from 'framer-motion';
import { TextGlitch } from '../components/TextGlitch';
import { PixelTrail } from '../components/PixelTrail';
import { SiPython, SiPostgresql, SiSimpleanalytics, SiGooglebigquery } from "react-icons/si";
import { RiMicrosoftLine } from "react-icons/ri";
import { IconType } from 'react-icons';
import { NextNavButton } from '../components/NextNavButton';   // ✅ ADDED

interface SkillCardProps {
  name: string;
  icon: IconType;
}

const SkillCard = ({ name, icon: Icon }: SkillCardProps) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center gap-4 group transition-colors hover:border-orange-500/30"
  >
    <div className="w-16 h-16 flex items-center justify-center text-white/40 group-hover:text-white transition-all duration-500">
      <Icon size={48} />
    </div>
    <span className="text-white/70 font-medium group-hover:text-white transition-colors">{name}</span>
  </motion.div>
);

interface CertCardProps {
  title: string;
  image: string;
  status?: string;
}

const CertCard = ({ title, image, status }: CertCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
  >
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      {status && <span className="text-orange-500 text-sm font-medium">{status}</span>}
    </div>
  </motion.div>
);

export const Skills = () => {
  const coreSkills = [
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: SiPostgresql },
    { name: "Power BI", icon: SiSimpleanalytics },
    { name: "Excel", icon: RiMicrosoftLine },
    { name: "Google BigQuery", icon: SiGooglebigquery }
  ];

  const softSkills = [
    "Communication",
    "Critical Thinking",
    "Data Visualization",
    "ETL Pipelines",
    "Data Transformation",
    "Financial Literacy"
  ];

  const certificates = [
    { title: "Google Data Analytics", image: "/assets/certificates/google-data-analytics.png" },
    { title: "Kaggle Advanced SQL", image: "/assets/certificates/kaggle-sql.png" },
    { title: "Kaggle Pandas", image: "/assets/certificates/kaggle-pandas.png" },
    { title: "Kaggle Data Visualization", image: "/assets/certificates/kaggle-dataviz.png" }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
      <PixelTrail 
        pixelSize={24}
        fadeDuration={1000}
        pixelClassName="bg-orange-500/5 border-[0.5px] border-orange-500/10"
      />

      {/* Hero Section */}
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <TextGlitch text="SKILLS &" className="text-6xl md:text-8xl font-black tracking-tighter text-white" />
          <TextGlitch text="CERTIFICATIONS" className="text-6xl md:text-8xl font-black tracking-tighter text-white" />
        </div>
      </section>

      {/* Section 1: Core Skills */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <TextGlitch text="Core Skills" className="text-2xl font-bold uppercase tracking-widest text-white/50" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coreSkills.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>

      {/* Section 2: Professional Skills */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <TextGlitch text="Professional Skills" className="text-2xl font-bold uppercase tracking-widest text-white/50" />
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {softSkills.map(skill => (
              <div key={skill} className="group flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange-500/20 group-hover:bg-orange-500 transition-colors" />
                <span className="text-xl text-white/60 group-hover:text-white transition-colors duration-300 font-light">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Certifications */}
      <section className="space-y-12 pb-20">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <TextGlitch text="Certifications" className="text-2xl font-bold uppercase tracking-widest text-white/50" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map(cert => (
            <CertCard key={cert.title} {...cert} />
          ))}
        </div>
      </section>

      {/* NEXT PAGE NAVIGATION */}
      <NextNavButton to="/education" label="View Education" />

    </div>
  );
};