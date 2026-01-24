import React from 'react';
import { CaseStudy } from '../../components/CaseStudy';

/* ====== IMAGES ====== */
import videogamesThumb from '../../assets/projects/videogames/thumb.jpg';

import preview1 from '../../assets/projects/videogames/preview1.jpg';
import preview2 from '../../assets/projects/videogames/preview2.jpg';
import preview3 from '../../assets/projects/videogames/preview3.jpg';
import preview4 from '../../assets/projects/videogames/preview4.jpg';

export const VideoGamesProject = () => {
  return (
    <CaseStudy 
      title="Video Games Sales Analysis"

      /* ===== MAIN BIG IMAGE ===== */
      mainImage={videogamesThumb}

      /* ===== SIDE HOVER PREVIEW (SLIDESHOW) ===== */
      previews={[preview1, preview2, preview3, preview4]}

      tools={["Python", "Pandas", "Plotly"]}

      problem="Explaining the evolution of the gaming industry by analyzing sales data to identify top-performing platforms, genres, and regional market leaders."

      dataset="VGChartz dataset containing 16,500+ records of video games with sales greater than 100,000 copies, spanning multiple decades and platforms."

      methods={[
        "Comprehensive data cleaning and handling of missing values",
        "Exploratory Data Analysis to identify top publishers and genres",
        "Platform-specific performance benchmarking (Nintendo, Sony, Microsoft)",
        "Regional sales comparison (North America, Europe, Japan, Other)"
      ]}

      insights={[
        "Action and Sports are the most dominant genres in terms of global sales volume",
        "Nintendo platforms (DS, Wii) show exceptional long-term market penetration",
        "North America remains the largest single market, accounting for nearly 50% of total sales in key periods",
        "Sony (PS2, PS3) maintains consistent global dominance across multiple generations"
      ]}

      impact="Uncovered critical market trends that define successful game launches, highlighting the importance of platform-specific genre optimization and regional marketing focus."

      /* ===== VIEW FULL PROJECT LINK ===== */
      githubUrl="https://videogames-salesanalysis.netlify.app/"
    />
  );
};
