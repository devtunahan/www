import React from 'react';
import Project from '../components/Project';

function Projects() {
  // Example projects data, including unique ids
  const projectData = [
    {
      "id": "1",
      "title": "Project 1",
      "imageSrc": "https://placehold.co/1200x800",
      "icons": ["/icons/XML.svg", "/icons/Tailwind-CSS.svg", "/icons/TeX.svg"],
      "content": "<h1 class=\"underline text-blue-600\">Hello World</h1><p>This is an example content.</p><img src=\"test.png\" alt=\"Example Image\" />"
    },
    {
      "id": "2",
      "title": "Project 2",
      "imageSrc": "https://placehold.co/1200x800",
      "icons": ["/icons/XML.svg", "/icons/Tailwind-CSS.svg", "/icons/TeX.svg"],
      "content": "<h1 class=\"text-green-600\">Welcome to Project 2</h1><p>Here is some more content for Project 2.</p><img src=\"example.png\" alt=\"Another Image\" />"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8">
      <div className="flex flex-wrap justify-center w-[1200px] gap-6">
        {projectData.map(project => (
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
