import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import FeaturedProject from '../components/FeaturedProject';
import FlexboxContainer from '../components/FlexboxContainer'; // Import the new component

function Home({ projects, writings }) {
  return (
    <div className="mt-2 mx-auto max-w-2xl p-4 overflow-x-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Hi, I'm Tunahan Karakaya</h1>
        <p className='text-base text-gray-600 sm:text-base'>
          CS Student @ <a className='underline' href="https://www.jku.at/" target="_blank" rel="noopener noreferrer">JKU Linz</a>, Java / Fullstack Developer based in Austria
        </p>
        
{/* Badge with padding and icon */}
<div className="mt-6 mb-4 flex justify-center">
  <div className="inline-flex items-center bg-yellow-500 text-yellow-900 py-2 px-4 text-xs font-bold uppercase rounded-full glow-effect">
    <i className="fas fa-crown mr-2"></i> {/* Font Awesome crown icon */}
    Featured Project
  </div>
</div>





        {/* Featured Project container */}
        <FeaturedProject id="1" projects={projects} />

        {/* Use the FlexboxContainer component */}
        <FlexboxContainer writings={writings} />

      </div>

    {/* New full-width section */}
<div className="relative bg-[#171717] text-white mt-4 p-6 rounded-lg overflow-hidden">
  <i className="fas fa-envelope text-9xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#424242] opacity-30"></i>
  <div className="relative z-10">
    <h2 className="text-2xl font-bold mb-2">Interested in Working Together?</h2>
    <p className="text-base mb-4">I'm always open to discussing new projects and opportunities. Feel free to reach out if you'd like to collaborate or if you have any questions.</p>
    <a 
      href="mailto:me@tunahan.at" 
      className="bg-white text-[#171717] py-2 px-4 rounded-lg font-medium inline-block hover:bg-gray-100 transition"
    >
      Contact Me
    </a>
  </div>
</div>

    </div>
  );
}

export default Home;
