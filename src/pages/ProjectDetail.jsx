import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify for HTML sanitization

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Example data, replace with your data fetching logic
    const projectData = [
      {
        "id": "1",
        "title": "Project 1",
        "imageSrc": "https://placehold.co/600x400",
        "icons": ["/icons/XML.svg", "/icons/Tailwind-CSS.svg", "/icons/TeX.svg"],
        "content": "<h1 class='underline text-blue-600'>Hello World</h1><p>This is an example content.</p><img src='test.png' alt='Example Image' />"
      },
      {
        "id": "2",
        "title": "Project 2",
        "imageSrc": "https://placehold.co/600x400",
        "icons": ["/icons/XML.svg", "/icons/Tailwind-CSS.svg", "/icons/TeX.svg"],
        "content": "<h1 class='text-green-600'>Welcome to Project 2</h1><p>Here is some more content for Project 2.</p><img src='example.png' alt='Another Image' />"
      }
    ];
    
    const selectedProject = projectData.find((p) => p.id === id);
    setProject(selectedProject);
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <div className="flex gap-2 mt-4">
        {project.icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
        ))}
      </div>
      <img src={project.imageSrc} alt={project.title} className="w-full h-auto mt-4" />
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.content) }}
      />
    </div>
  );
}

export default ProjectDetail;
