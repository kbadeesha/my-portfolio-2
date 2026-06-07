import React from 'react';
import { TechData } from './TechData';

const Tech = () => {
  return (
    <div className="tech-container">
      {TechData.map((tech) => (
        <div key={tech.name} className="tech-item">
          <a href={tech.url} target="_blank" rel="noopener noreferrer">
            <img src={tech.logo} alt={`${tech.name} logo`} />
          </a>
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
