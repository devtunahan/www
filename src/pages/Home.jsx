import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import FeaturedProject from '../components/FeaturedProject';
import FlexboxContainer from '../components/FlexboxContainer';
import withSoundEffects from '../withSoundEffects'; // Import the HOC

// Wrap components with HOC
const FeaturedProjectWithSound = withSoundEffects(FeaturedProject);
const FlexboxContainerWithSound = withSoundEffects(FlexboxContainer);

function Home({ projects, writings }) {
  return (
    <div className="mt-2 mx-auto max-w-2xl p-4 overflow-x-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Hi, I'm Tunahan Karakaya</h1>
        <p className='text-base text-gray-600 sm:text-base'>
          CS Student @ <a className='underline' href="https://www.jku.at/" target="_blank" rel="noopener noreferrer">JKU Linz</a>, Java / Fullstack Developer based in Austria
        </p>
        <p className='text-base text-gray-600 sm:text-base'>
        I design & build digital products.
        </p>
        {/* Badge with padding and icon */}
        <div className="mt-6 mb-4 flex justify-center">
          <div className="inline-flex items-center bg-yellow-500 text-yellow-900 py-2 px-4 text-xs font-bold uppercase rounded-full glow-effect">
            <i className="fas fa-crown mr-2"></i> {/* Font Awesome crown icon */}
            Featured Project
          </div>
        </div>

        {/* Featured Project container */}
        <FeaturedProjectWithSound id="1" projects={projects} />

        {/* Use the FlexboxContainer component */}
        <FlexboxContainerWithSound writings={writings} />
      </div>
    </div>
  );
}

export default Home;
