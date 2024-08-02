import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify for HTML sanitization

function ProjectDetail({projects}) {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    
    const selectedProject = projects.find((p) => p.id === id);
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
