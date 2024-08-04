import React from 'react';
import withSoundEffects from '../withSoundEffects'; // Import the HOC
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Twitter(props) {
  const handleClick = (event) => {
    // Play the click sound effect
    if (props.onClick) props.onClick(event); // Call the onClick from HOC

    // Check which mouse button was clicked
    if (event.button === 0 || event.button === 1) {
      // Left-click (button 0) or Middle-click (button 1)
      window.open('https://twitter.com/devtunahan', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      {...props} // Spread props to include onMouseEnter and onClick from the HOC
      className="bg-[#14171A] text-white p-6 rounded-lg flex-grow basis-[20%] min-w-[150px] h-40 transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center border border-blue-400 shadow-lg"
      onClick={handleClick}  // Use onClick for click handling
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" 
        className='h-10 w-auto invert' 
        alt="Twitter Logo"
      />
    </div>
  );
}

export default withSoundEffects(Twitter); // Wrap with HOC to add sound effects
