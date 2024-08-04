import { useCallback } from 'react';

const useSound = (src) => {
  const playSound = useCallback(() => {
    const audio = new Audio(src);
    audio.play();
  }, [src]);

  return playSound;
};

export default useSound;
