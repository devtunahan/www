import React from 'react';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LatestWriting({ writings }) {
  const latestWriting = writings.at(-1);

  if (!latestWriting) return null;

  return (
    <div className="bg-[#cacaca] text-white p-4 rounded-lg flex flex-col justify-center items-start basis-full md:basis-[30%] h-40 relative transition-transform transform hover:scale-105 border border-gray-400 shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <FaBook className="text-white opacity-20 text-5xl md:text-7xl" />
      </div>
      <Link 
        to={`/writings/${latestWriting.id}`} 
        className="relative z-10 flex flex-col justify-center items-start h-full w-full"
      >
        <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-3">LATEST WRITING</h1>
      </Link>
    </div>
  );
}

export default LatestWriting;
