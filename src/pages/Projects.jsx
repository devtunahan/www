import React from 'react'
import Project from '../components/Project'

function Projects() {
  return (
    <div>   
      <div className="flex flex-wrap justify-center gap-8 mt-8"> {/* Increased gap for spacing between rows */}
      <div className="flex flex-wrap justify-center w-[1200px] gap-6"> {/* Added gap for spacing between columns */}
        <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
        <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
        <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
        <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
        <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
        <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
         <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
         <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
         <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
         <Project
          imageSrc="https://placehold.co/600x400"
          title="Sample Project"
          icons={['/icons/XML.svg', '/icons/Tailwind-CSS.svg', '/icons/TeX.svg']} // Pass SVG file names
          className="m-4" // Added margin to each Project component
        />
      </div>
    </div>
    </div>
  )
}

export default Projects
