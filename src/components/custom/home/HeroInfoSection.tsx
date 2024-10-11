/** @format */
'use client';
import React from 'react';
import BlurFade from '@/components/ui/blur-fade'; // default export
import BlurFadeText from './blur-fade-text'; // default export
import { Avatar, AvatarImage } from './avatar'; // named exports

import { DATA } from '@/data/resume';
import { PersonalInfoInterface } from '@/types';

const HeroInfoSection = ({ info }: { info: PersonalInfoInterface }) => {
  // const response = await fetch('http://localhost:3000/api/peronalinfo', {
  //   cache: 'force-cache',
  // });
  // const data = await response.json();
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div className='mx-auto w-full max-w-2xl space-y-8'>
      <div className='gap-2 flex justify-between'>
        <div className='flex-col flex flex-1 space-y-1.5'>
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className='text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
            yOffset={8}
            text={`Hi, I'm ${info?.name?.split(' ')[0]} 👋`}
          />
          <BlurFadeText
            // animateByCharacter={true}
            // characterDelay={0.05}
            className='max-w-[600px] overflow-x-hidden md:text-xl'
            delay={BLUR_FADE_DELAY}
            text={info?.subtitle}
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Avatar className='size-28 border'>
            <AvatarImage
              className='object-cover'
              alt={DATA.name}
              // src='/images/imageone.png'
              src={info.profile_image}
              // || '/images/imageone.png'}
            />
            {/* <AvatarFallback>{DATA.initials}</AvatarFallback> */}
          </Avatar>
        </BlurFade>
      </div>
    </div>
  );
};

export default HeroInfoSection;
