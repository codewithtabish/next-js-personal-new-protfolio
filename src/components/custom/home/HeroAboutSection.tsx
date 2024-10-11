/** @format */

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Markdown from 'react-markdown';
import BlurFade from '@/components/ui/blur-fade';
import { DATA } from '@/data/resume';

const HeroAboutSection = () => {
  //   const response = await fetch('http://localhost:3000/api/peronalinfo', {
  // cache: 'force-cache',
  //   });
  //   const data = await response.json();
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className='text-xl font-bold'>About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
          {DATA?.summary}
        </Markdown>
      </BlurFade>
    </div>
  );
};

export default HeroAboutSection;
