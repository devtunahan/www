import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Github() {
  const handleClick = () => {
    window.open('https://github.com/devtunahan', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="bg-[#141414] text-white p-6 rounded-lg flex-grow basis-[40%] min-w-[150px] h-40 transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={faGithub}
        className="text-5xl"
      />
    </div>
  );
}

export default Github;
