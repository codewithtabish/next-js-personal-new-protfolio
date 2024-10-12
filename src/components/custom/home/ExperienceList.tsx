/** @format */

import React from 'react';
import { ResumeCard } from './resume-card';
import BlurFade from '@/components/ui/blur-fade'; // default export
import BlurFadeText from './blur-fade-text'; // default export
import { Avatar, AvatarImage } from './avatar'; // named exports
import { DATA } from '@/data/resume';
const ExperienceList = ({ experience }: { experience: any }) => {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <section id='work'>
      <div className='flex min-h-0 flex-col gap-y-3'>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className='text-xl font-bold'>Work Experience</h2>
        </BlurFade>
        {experience.map((work: any, id: any) => (
          <BlurFade
            key={work.company}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <ResumeCard
              key={work.company}
              logoUrl={work.company_logo}
              altText={work.company_name}
              title={work.company_name}
              subtitle={work.role}
              href={work?.href}
              badges={work?.badges}
              period={`${work.start_date} - ${work.end_date ?? 'Present'}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
