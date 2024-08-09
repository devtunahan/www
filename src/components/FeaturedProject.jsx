import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import withSoundEffects from '../withSoundEffects'; // Import the HOC

function FeaturedProject({ id, projects, onMouseEnter, onClick }) {

    const [project, setProject] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const selectedProject = projects.find((p) => p.id === id);
        setProject(selectedProject || null);
    }, [id, projects]);

    useEffect(() => {
        if (project) {
            setImageUrl(`https://www-db.tunahan.at/api/files/${project.collectionId}/${id}/${project.image}`);
        }
    }, [project, id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <Link
            to={`/projects/${project.id}`}
            className="relative block"
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            <div className="relative w-full h-[380px] overflow-hidden transition-transform transform hover:scale-105 rounded-xl">
                <img 
                    className="w-full h-full object-cover"
                    src={imageUrl} 
                    alt="Project Image" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center backdrop-blur-sm bg-white/25 rounded-tl-xl rounded-tr-xl">
                    <h1 className="text-gray-800 text-2xl font-semibold">{project.title}</h1>
                    <div className="inline-flex flex-wrap items-center gap-2">
                        {project.icons.map((icon, index) => (
                            <span 
                                key={index}
                                className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
                            >
                                <Icon src={`${icon}`} alt={`icon-${index}`} />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default withSoundEffects(FeaturedProject); // Wrap with HOC
