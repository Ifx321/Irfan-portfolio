import React from 'react';
import { CaseStudy } from '../../components/CaseStudy';

// MAIN IMAGE
import mainImage from '../../assets/projects/deforestation/preview1.jpg';

// PREVIEWS
import preview1 from '../../assets/projects/deforestation/preview1.jpg';
import preview2 from '../../assets/projects/deforestation/preview2.jpg';
import preview3 from '../../assets/projects/deforestation/preview3.jpg';
import preview4 from '../../assets/projects/deforestation/preview4.jpg';

export const DeforestationProject = () => {
  return (
    <CaseStudy 
      title="Deforestation Analysis in India (2001–2020)"
      tools={["Power BI", "DAX", "Power Query"]}

      /* MAIN DISPLAY IMAGE */
      mainImage={mainImage}

      /* PREVIEW SYSTEM (hover thumbnails) */
      previews={[
        preview1,
        preview2,
        preview3,
        preview4
      ]}

      problem="Analyzing two decades of forest cover loss across India to identify critical hotspots and primary drivers of deforestation."
      
      dataset="Historical forest cover data from 2001 to 2020, encompassing state-wise loss metrics, agricultural expansion, and industrial development indicators."
      
      methods={[
        "Architected a Star Schema data model by unpivoting wide-format temporal data and appending multiple sources into a single Fact table",
        "Developed custom Dimension tables for Locations and Drivers to optimize filter context and query performance",
        "Geographic heat mapping of high-impact zones",
        "Time-series decomposition of loss patterns"
      ]}
      
      insights={[
        "Significant acceleration in forest loss detected post-2015",
        "South and Northeastern India identified as major hotspots",
        "Identified Agriculture as the primary driver of deforestation, accounting for over 86% of total tree loss",
        "Pattern analysis revealed distinct seasonal peaks in loss events"
      ]}
      
      impact="Formulated data-driven projections showing that a 10% reduction in policy-driven deforestation could prevent millions of tons of carbon emissions, providing a strategic roadmap for environmental policy stakeholders."
      
      githubUrl="https://asquaretechnologiesweb.com/green-decline-dashboard-deforestation-in-india-2001-2021/"
    />
  );
};
