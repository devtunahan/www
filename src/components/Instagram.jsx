import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Instagram() {
  const handleClick = () => {
    window.open('https://instagram.com/tunahan.at', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="bg-pink-500 text-white p-6 rounded-lg flex-grow basis-[20%] min-w-[150px] h-40 transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={faInstagram}
        className="text-5xl"
      />
    </div>
  );
}

export default Instagram;
