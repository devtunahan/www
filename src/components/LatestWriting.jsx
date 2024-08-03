import React from 'react';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LatestWriting({ writings }) {
  const latestWriting = writings.length > 0 ? writings[writings.length - 1] : {};

  if (!latestWriting.title) return null; // Render nothing if there's no writing

  return (
    <div className="bg-purple-500 text-white p-4 rounded-lg flex flex-col justify-between basis-[20%] h-40 relative transition-transform transform hover:scale-105">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <FaBook className="text-white opacity-20 text-8xl" />
      </div>
      <Link 
        to={`/writings/${latestWriting.id}`} 
        className="relative z-10 flex flex-col h-full"
      >
        <div className="flex-1">
          <h1 className="text-xl font-bold mb-3">LATEST WRITING</h1>
          <h2 className="text-base font-semibold mb-2 truncate">{latestWriting.title}</h2>
          <h3 className="text-sm italic mb-2 truncate">{latestWriting.topic}</h3>
        </div>
        <div className="text-sm flex justify-between items-end mt-2">
          <span>{latestWriting.author}</span>
          <span>{latestWriting.readingTime}</span>
        </div>
      </Link>
    </div>
  );
}

export default LatestWriting;
