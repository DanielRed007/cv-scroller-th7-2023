
import React, { useState } from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import { experience } from "../../data/experience";
import { InfoCard } from "./shared/Infocard";

export const Experience = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="section-container">
      <div className="title-container">
        <h1 className="section-main-title"> Experience</h1>
        <TimelineIcon className="about-icon"/>
      </div>

      <div className="info-card-container">
        { experience.map((item,i) => (
          <InfoCard
            expanded={expanded} 
            expandFn={handleExpandClick} 
            key={i}
            content={item} 
          />
        )) }
      </div>
    </div>
  )
}
