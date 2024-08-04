import React from 'react';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import withSoundEffects from '../withSoundEffects'; // Ensure this path is correct

function LatestWriting({ writings, ...props }) { // Spread the rest of props
  const latestWriting = writings.at(-1);

  const handleClick = (event, url) => {
    // Check if the middle mouse button (button 1) was clicked
    if (event.button === 1 || event.button === 0) {
      // Middle-click or left-click
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="bg-[#cacaca] text-white p-4 rounded-lg flex flex-col justify-center items-start basis-full md:basis-[30%] h-40 relative transition-transform transform hover:scale-105 border border-gray-400 shadow-lg"
      {...props} // Spread props to include handlers from the HOC
    >
      {latestWriting ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <FaBook className="text-white opacity-20 text-5xl md:text-7xl" />
          </div>
          <Link 
            to={`/writings/${latestWriting.id}`} 
            className="relative z-10 flex flex-col justify-center items-start h-full w-full"
            onClick={(event) => handleClick(event, `/writings/${latestWriting.id}`)} // Handle click with sound
            {...props} // Spread props to include handlers from the HOC
          >
            <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-3">LATEST WRITING</h1>
          </Link>
        </>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <p className="text-lg md:text-xl font-bold">No latest writing available</p>
        </div>
      )}
    </div>
  );
}

export default withSoundEffects(LatestWriting);
