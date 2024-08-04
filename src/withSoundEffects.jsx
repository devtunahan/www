// withSoundEffects.js
import React from 'react';
import useSound from './useSound'; // Import your custom hook
import hoverSound from '../public/sounds/hover.mp3'; // Path to your hover sound file
import clickSound from '../public/sounds/click.mp3'; // Path to your click sound file

const withSoundEffects = (WrappedComponent) => {
  return (props) => {
    const playHoverSound = useSound(hoverSound, 0.3); // Set volume to 30%
    const playClickSound = useSound(clickSound, 0.3); // Set volume to 30%

    const handleMouseEnter = () => playHoverSound();
    const handleClick = (event) => {
      playClickSound();
      if (props.onClick) props.onClick(event); // Ensure any existing onClick handler still works
    };

    return (
      <WrappedComponent
        {...props}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      />
    );
  };
};

export default withSoundEffects;
