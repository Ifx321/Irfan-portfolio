import React from 'react';
import { Link } from 'react-router-dom';
import { TextGlitch } from '../components/TextGlitch';
import { PixelTrail } from '../components/PixelTrail';
import { NextNavButton } from '../components/NextNavButton';   // ✅ ADDED

import ecommerceThumb from '../assets/projects/ecommerce/thumb.jpg';
import videogamesThumb from '../assets/projects/videogames/thumb.jpg';
import deforestationThumb from '../assets/projects/deforestation/thumb.jpg';

const projects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Sales Analysis',
    tools: 'Python, Data Analysis, Pandas, Plotly',
    path: '/projects/ecommerce',
    image: ecommerceThumb
  },
  {
    id: 'deforestation',
    title: 'Deforestation Analysis in India',
    tools: 'Power BI, DAX, Power Query',
    path: '/projects/deforestation',
    image: deforestationThumb
  },
  {
    id: 'videogames',
    title: 'Video Games Market Analysis',
    tools: 'Python, Data Analysis, Pandas, Plotly',
    path: '/projects/videogames',
    image: videogamesThumb
  }
];

export const Projects = () => {
  return (
    <div className="relative space-y-12 py-12">
      
      <PixelTrail 
        pixelSize={24}
        fadeDuration={1000}
        pixelClassName="bg-white/5 border-[0.5px] border-white/10"
      />

      <TextGlitch 
        text="Key Projects" 
        className="text-4xl font-bold tracking-tighter text-white" 
      />

      <div className="flex flex-col gap-12 max-w-6xl mx-auto">

        {projects.map((project) => (
          <Link 
            key={project.id}
            to={project.path}
            className="group relative w-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-white/20"
          >
            
            {/* Thumbnail Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="relative w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.01]"
            />
            
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                
                <h3 className="text-xl font-bold text-white leading-tight">
                  <TextGlitch text={project.title} className="text-xl" />
                </h3>

                <p className="text-orange-500 text-sm font-medium mt-2">
                  {project.tools}
                </p>

              </div>
            </div>

          </Link>
        ))}
      </div>

      {/* NEXT PAGE NAVIGATION */}
      <NextNavButton to="/experience" label="View Experience" />

    </div>
  );
};
