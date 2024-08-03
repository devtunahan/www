import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Twitter() {
  const handleClick = () => {
    window.open('https://twitter.com/devtunahan', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="bg-zinc-900 text-white p-6 rounded-lg flex-grow basis-[20%] min-w-[150px] h-40 transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-5xl"
      />
    </div>
  );
}

export default Twitter;
