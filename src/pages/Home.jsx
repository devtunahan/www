import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Home() {
  return (
    <div className="mt-2 mx-auto max-w-2xl p-4 overflow-x-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Hi, I'm Tunahan Karakaya</h1>
        <p className='text-base text-gray-600 sm:text-base'>
          CS Student @ <a className='underline' href="https://www.jku.at/" target="_blank" rel="noopener noreferrer">JKU Linz</a>, Java / Fullstack Developer based in Austria
        </p>
        
        {/* Badge with padding and icon */}
        <div className="mt-6 mb-2 flex justify-center">
          <div className="inline-flex items-center bg-gray-900 text-white py-2 px-4 text-xs font-bold uppercase rounded-lg">
            <i className="fas fa-crown mr-2"></i> {/* Font Awesome crown icon */}
            Featured Project
          </div>
        </div>

        {/* Image container */}
        <div className="flex justify-center">
          <img className="w-full h-auto rounded-xl grayscale" src="https://placehold.co/600x400" alt="Placeholder" />
        </div>

        {/* Flex container with seven larger elements */}
        <div className="flex gap-4 mt-6 justify-center flex-wrap">
          <div className="bg-blue-500 text-white p-6 rounded-lg flex-1 min-w-[150px] h-40 grayscale transition-transform transform hover:scale-105">Element 1</div>
          <div className="bg-green-500 text-white p-6 rounded-lg flex-2 min-w-[150px] h-40 grayscale transition-transform transform hover:scale-105">Element 2</div>
          <div className="bg-red-500 text-white p-6 rounded-lg flex-1 min-w-[150px] h-40 grayscale transition-transform transform hover:scale-105">Element 3</div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg flex-3 min-w-[150px] h-40 grayscale transition-transform transform hover:scale-105">Element 4</div>
          <div className="bg-purple-500 text-white p-6 rounded-lg flex-1 min-w-[150px] h-40 grayscale transition-transform transform hover:scale-105">Element 5</div>
          <div className="bg-teal-500 text-white p-6 rounded-lg flex-2 min-w-[150px] h-40 grayscale transition-transform transform hover:scale-105">Element 6</div>
          <div className="bg-pink-500 text-white p-6 rounded-lg flex-1 min-w-[150px] h-40 grayscale transition-transform transform hover:scale-105">Element 7</div>
        </div>
      </div>

      {/* New full-width section */}
      <div className="bg-blue-500 text-white mt-4 p-6 rounded-lg grayscale">
        <h2 className="text-2xl font-bold mb-2 sm:text-2xl">Interested in Working Together?</h2>
        <p className="text-base mb-4 sm:text-base">I'm always open to discussing new projects and opportunities. Feel free to reach out if you'd like to collaborate or if you have any questions.</p>
        <a 
          href="mailto:tunahan.karakaya@example.com" 
          className="bg-white text-blue-500 py-2 px-4 rounded-lg font-semibold inline-block hover:bg-gray-100 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Home;
