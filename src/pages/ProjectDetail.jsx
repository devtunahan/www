import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify for HTML sanitization

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find((p) => p.id === id);
    setProject(selectedProject);
  }, [id, projects]);

  useEffect(() => {
    if (project) {
        setImageUrl(`https://www-db.tunahan.at/api/files/${project.collectionId}/${id}/${project.image}`);
    }
}, [project, id]);


  if (!project) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      
      <div className="relative h-[380px] overflow-hidden rounded-xl mt-4">
        <img 
          src={imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <h1 className="text-3xl mt-5 font-bold">{project.title}</h1>
      <div className="flex gap-2 mt-4">
        {project.icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
        ))}
      </div>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.content) }}
      />
    </div>
  );
}

export default ProjectDetail;
