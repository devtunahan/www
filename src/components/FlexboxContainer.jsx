// components/FlexboxContainer.js
import React from 'react';
import Github from './Github';
import Instagram from './Instagram';
import Twitter from './Twitter';
import LatestWriting from './LatestWriting';
import Skills from './Skills';
import VSStats from './VSStats';
import OneToOne from './OneToOne';

const FlexboxContainer = ({writings}) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {/* First row */}
      {/* Github */}
      <Github />
      {/* Instagram */}
      <Instagram />
      {/* Twitter */}
      <Twitter />  
      {/* Second row */}
      <LatestWriting writings={writings} />
      {/* Latest Blogpost */}
      {/* Skills */}
      <Skills />      

      {/* Third row */}
      {/* VS Code stats */}
      {/*<VSStats />*/} 
      {/* 1:1 call -> cal.com */}
      <OneToOne />
    </div>
  );
};

export default FlexboxContainer;
