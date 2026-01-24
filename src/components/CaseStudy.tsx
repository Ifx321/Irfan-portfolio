import React, { useState } from 'react';
import { PixelTrail } from './PixelTrail';
import { TextGlitch } from './TextGlitch';
import { ArrowLeft, ExternalLink} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyProps {
  title: string;
  tools: string[];
  problem: string;
  dataset: string;
  methods: string[];
  insights: string[];
  impact: string;
  githubUrl?: string;   // reused as "View Full Project" link
  demoUrl?: string;
  mainImage?: string;
  previews?: string[];   // images for hover preview
}

export const CaseStudy = ({
  title,
  tools,
  problem,
  dataset,
  methods,
  insights,
  impact,
  githubUrl,
  demoUrl,
  mainImage,
  previews = [],
}: CaseStudyProps) => {

  const allImages = mainImage ? [mainImage, ...previews] : previews;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!allImages.length) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zone = rect.width / allImages.length;
    const index = Math.min(
      allImages.length - 1,
      Math.floor(x / zone)
    );

    setActiveIndex(index);
  };

  return (
    <div className="relative min-h-screen py-12 space-y-12">

      <PixelTrail 
        pixelSize={24}
        fadeDuration={1000}
        pixelClassName="bg-white/5 border-[0.5px] border-white/10"
      />
      
      <Link 
        to="/projects"
        className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group relative z-[9999] cursor-pointer pointer-events-auto"    
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Projects</span>
      </Link>

      {/* TITLE */}
      <div className="space-y-4">
        <TextGlitch 
          text={title} 
          className="text-4xl md:text-6xl font-black tracking-tighter text-white"
        />
        <div className="flex flex-wrap gap-2">
          {tools.map(tool => (
            <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-orange-500 font-medium">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* 🔥 INTERACTIVE MAIN PREVIEW */}
      <div 
        onMouseMove={handleMouseMove}
        className="w-full aspect-video bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center cursor-crosshair relative"
      >
        {allImages.length > 0 ? (
          <img 
            src={allImages[activeIndex]} 
            alt={title} 
            className="w-full h-full object-contain transition-all duration-500"
          />
        ) : (
          <p className="text-xl text-white/20">Project Image Placeholder</p>
        )}

        {allImages.length > 1 && (
          <div className="absolute bottom-4 right-6 text-white/40 text-sm">
            Hover to preview →
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        <div className="space-y-8">
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Problem Statement</h3>
            <p className="text-white/70 leading-relaxed text-lg">{problem}</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Dataset Overview</h3>
            <p className="text-white/70 leading-relaxed text-lg">{dataset}</p>
          </section>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Methods & Tools</h3>
            <ul className="space-y-2">
              {methods.map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-orange-500 mt-1.5 text-xs">◆</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Key Insights</h3>
            <ul className="space-y-2">
              {insights.map((insight, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-orange-500 mt-1.5 text-xs">◆</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Business Impact</h3>
            <p className="text-white/70 leading-relaxed text-lg">{impact}</p>
          </section>

          <div className="flex gap-4 pt-6">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all
                           relative z-[9999] cursor-pointer pointer-events-auto"
              >
                <ExternalLink size={20} />
                <span>View Full Project</span>
              </a>
            )}

            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all border border-white/10"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
