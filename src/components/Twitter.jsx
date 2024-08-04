import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Twitter() {
  const handleClick = (event) => {
    // Check if the middle mouse button (button 1) was clicked
    if (event.button === 1) {
      window.open('https://twitter.com/devtunahan', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="bg-[#14171A] text-white p-6 rounded-lg flex-grow basis-[20%] min-w-[150px] h-40 transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center border border-blue-400 shadow-lg"
      onMouseDown={handleClick}  // Use onMouseDown to detect mouse button clicks
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" className='h-10 w-auto invert' />
    </div>
  );
}

export default Twitter;
