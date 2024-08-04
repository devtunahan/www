// useSound.js
import { useEffect } from 'react';

const useSound = (src, volume = 0.5) => {
  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume; // Set default volume (0.0 to 1.0)
    
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src, volume]);

  return () => {
    const audio = new Audio(src);
    audio.volume = volume; // Set default volume (0.0 to 1.0)
    audio.play();
  };
};

export default useSound;
