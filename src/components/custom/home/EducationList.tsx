/** @format */

import React from 'react';
import BlurFade from '@/components/ui/blur-fade';
import { ResumeCard } from './resume-card';
import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

const EducationList = async ({ education }: { education: any }) => {
  //   const response = await fetch('http://localhost:3000/api/education', {
  //     cache: 'force-cache',
  //   });
  //   const data = await response.json();
  //   const { educations } = data;
  return (
    <div>
      <div className='flex min-h-0 flex-col gap-y-3'>
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className='text-xl font-bold'>Education</h2>
        </BlurFade>
        {education?.map((education: any) => (
          <BlurFade
            key={education.id}
            delay={BLUR_FADE_DELAY * 8 + 6 * 0.05}
          >
            <ResumeCard
              key={education.institution_name}
              href={education.institution_url}
              logoUrl={education.imageURL}
              altText={education.institution_name}
              title={education.institution_name}
              subtitle={education.degree}
              period={`${education.start_date} - ${education.end_date}`}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default EducationList;