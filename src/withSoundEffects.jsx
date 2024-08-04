import React from 'react';
import useSound from './useSound'; // Import your custom hook
import hoverSound from '/sounds/hover.mp3'; // Correct path to your hover sound file
import clickSound from '/sounds/click.mp3'; // Correct path to your click sound file

const withSoundEffects = (WrappedComponent) => {
  return (props) => {
    const playHoverSound = useSound(hoverSound);
    const playClickSound = useSound(clickSound);

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
