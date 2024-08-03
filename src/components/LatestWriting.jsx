import React from 'react';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LatestWriting({ writings }) {
  const latestWriting = writings.at(-1) || {};

  if (!latestWriting.title) return null;

  return (
    <div className="bg-[#222222] text-white p-4 rounded-lg flex flex-col justify-between basis-full md:basis-[20%] h-40 relative transition-transform transform hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <FaBook className="text-white opacity-20 text-5xl md:text-7xl" />
      </div>
      <Link 
        to={`/writings/${latestWriting.id}`} 
        className="relative z-10 flex flex-col h-full"
      >
        <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-3">LATEST WRITING</h1>
        <h3 className="text-xs md:text-sm mb-2 truncate">{latestWriting.topic}</h3>
        <h2 className="text-sm md:text-base font-semibold mb-2 truncate">{latestWriting.title}</h2>
        <div className="text-xs md:text-sm flex justify-between items-end mt-2">
          <span>{latestWriting.author}</span>
          <span>{latestWriting.readingTime}</span>
        </div>
      </Link>
    </div>
  );
}

export default LatestWriting;
