import React, { useState, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [sliderStyle, setSliderStyle] = useState({});
  const navRef = useRef(null);
  const audioRef = useRef(null); // Reference to the audio element

  const updateSliderPosition = (path) => {
    const linkElement = navRef.current.querySelector(`[href="${path}"]`);
    if (linkElement) {
      const { offsetLeft, offsetWidth } = linkElement;
      const textElement = linkElement.querySelector('span');
      const { offsetWidth: textWidth } = textElement;

      setSliderStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`, // Use the link's width for the slider
      });
    }
  };

  useEffect(() => {
    updateSliderPosition(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    updateSliderPosition(path);
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set volume to 20%
      audioRef.current.play(); // Play the sound effect
    }
  };

  return (
    <>
      <nav className='relative flex justify-center mt-6 text-base font-medium' ref={navRef}>
        <div className='bg-[#E3E3E4] p-2 rounded-full text-gray-800 relative'>
          <div 
            className="absolute bg-white drop-shadow-sm rounded-full transition-all duration-300 ease-in-out h-8 top-1/2 -translate-y-1/2"
            style={sliderStyle}
          />
          <Link 
            to="/" 
            onClick={() => handleLinkClick('/')}
            className={`relative px-3 py-2 rounded-full transition-all duration-300 ease-in-out ${location.pathname === '/' ? 'text-gray-800' : ''}`}
          >
            <span className="relative z-10">T</span>
          </Link>
          <Link 
            to="/about" 
            onClick={() => handleLinkClick('/about')}
            className={`relative px-3 py-2 rounded-full transition-all duration-300 ease-in-out ${location.pathname === '/about' ? 'text-gray-800' : ''}`}
          >
            <span className="relative z-10">About</span>
          </Link>
          <Link 
            to="/projects" 
            onClick={() => handleLinkClick('/projects')}
            className={`relative px-3 py-2 rounded-full transition-all duration-300 ease-in-out ${location.pathname === '/projects' ? 'text-gray-800' : ''}`}
          >
            <span className="relative z-10">Projects</span>
          </Link>
          {
            /*
            <Link 
            to="/writings" 
            onClick={() => handleLinkClick('/writings')}
            className={`relative px-3 py-2 rounded-full transition-all duration-300 ease-in-out ${location.pathname === '/writings' ? 'text-gray-800' : ''}`}
          >
            <span className="relative z-10">Writings</span>
          </Link>
            */
          }
        </div>
      </nav>
      <audio ref={audioRef} src="/sounds/slide.mp3" preload="auto" />
      <Outlet />
    </>
  );
}

export default Navbar;
