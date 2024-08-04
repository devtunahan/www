import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import withSoundEffects from '../withSoundEffects'; // Import the HOC

function Instagram(props) {
  const handleClick = (event) => {
    // Play the click sound effect
    if (props.onClick) props.onClick(event); // Call the onClick from HOC

    // Check which mouse button was clicked
    if (event.button === 0 || event.button === 1) {
      // Left-click (button 0) or Middle-click (button 1)
      window.open('https://instagram.com/tunahan.at', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      {...props} // Spread props to include onMouseEnter and onClick from the HOC
      className="bg-[#e1306c] text-white p-6 rounded-lg flex-grow basis-[20%] min-w-[150px] h-40 transition-transform transform hover:scale-105 cursor-pointer flex items-center justify-center border border-pink-400 shadow-lg"
      onClick={handleClick}  // Use onClick for click handling
    >
      <FontAwesomeIcon
        icon={faInstagram}
        className="text-5xl"
      />
    </div>
  );
}

export default withSoundEffects(Instagram); // Wrap with HOC to add sound effects
