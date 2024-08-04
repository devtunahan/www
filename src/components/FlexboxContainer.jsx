import React from 'react';
import withSoundEffects from '../withSoundEffects';
import Github from './Github';
import Instagram from './Instagram';
import Twitter from './Twitter';
import LatestWriting from './LatestWriting';
import Skills from './Skills';
import VSStats from './VSStats';
import OneToOne from './OneToOne';

// Wrap components with the HOC
const GithubWithSound = withSoundEffects(Github);
const InstagramWithSound = withSoundEffects(Instagram);
const TwitterWithSound = withSoundEffects(Twitter);
const LatestWritingWithSound = withSoundEffects(LatestWriting);
const SkillsWithSound = withSoundEffects(Skills);
const VSStatsWithSound = withSoundEffects(VSStats);
const OneToOneWithSound = withSoundEffects(OneToOne);

const FlexboxContainer = ({ writings }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {/* First row */}
      <GithubWithSound />
      <InstagramWithSound />
      <TwitterWithSound />
      {/* Second row */}
      <LatestWritingWithSound writings={writings} />
      <SkillsWithSound />
      {/* Third row */}
      <OneToOneWithSound />
    </div>
  );
};

export default FlexboxContainer;
