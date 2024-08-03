import React, { useEffect, useState } from 'react';
import Project from '../components/Project';

function Projects({ projects }) {
  // Example projects data, including unique ids

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8 mb-8">
      <div className="flex flex-wrap justify-center w-[1200px] gap-6">
        {projects.map(project => (
          <Project
            key={project.id}
            id={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            icons={project.icons}
            className="m-4"
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
