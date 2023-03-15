
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { education } from '../../data/education';
import { InfoCard } from "./shared/Infocard";

export const Education = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="section-container">
      <div className="title-container">
        <h1 className="section-main-title"> Education</h1>
        <SchoolIcon className="about-icon"/>
      </div>
      
      { education.map((item,i) => (
        <InfoCard
          expanded={expanded} 
          expandFn={handleExpandClick} 
          key={i}
          content={item} 
        />
      )) }
    </div>
  )
}
