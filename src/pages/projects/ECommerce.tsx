import React from 'react';
import { CaseStudy } from '../../components/CaseStudy';

/* ====== IMAGES ====== */
import ecommerceThumb from '../../assets/projects/ecommerce/thumb.jpg';

import preview1 from '../../assets/projects/ecommerce/preview1.jpg';
import preview2 from '../../assets/projects/ecommerce/preview2.jpg';
import preview3 from '../../assets/projects/ecommerce/preview3.jpg';
import preview4 from '../../assets/projects/ecommerce/preview4.jpg';

export const ECommerceProject = () => {
  return (
    <CaseStudy 
      title="E-Commerce Sales Analysis & Dashboard"

      /* ===== MAIN BIG IMAGE ===== */
      mainImage={ecommerceThumb}

      /* ===== SIDE HOVER PREVIEW (SLIDESHOW) ===== */
      previews={[preview1, preview2, preview3, preview4]}

      tools={["Python", "Pandas", "Plotly"]}

      problem="Evaluating sales performance and customer purchasing behavior to optimize inventory management and regional marketing efforts."

      dataset="Detailed e-commerce transaction dataset including order dates, product categories, shipping modes, and regional sales metrics."

      methods={[
        "Data cleaning and transformation using Pandas",
        "Trend analysis to identify peak sales periods and seasonal fluctuations",
        "Customer segmentation and behavior profiling",
        "Visualization of key performance indicators (KPIs) using Plotly"
      ]}

      insights={[
        "Identified Oceania and Sports as primary revenue drivers within a $65.2M total revenue dataset.",
        "Highest sales volume consistently occurs during the final quarter of the year",
        "Standard shipping is the most preferred mode",
        "Significant revenue concentration in the Western and Eastern regions"
      ]}

      impact="Pinpointed a 3.5/5 satisfaction ceiling linked to shipping delays; delivered actionable recommendations for logistics overhauls to boost long-term retention"

      /* ===== VIEW FULL PROJECT LINK ===== */
      githubUrl="https://ecommerce-salesanalysis.netlify.app/"
    />
  );
};
