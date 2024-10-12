/** @format */

import IconCloud from '@/components/ui/icon-cloud';
import BlurFadeText from './blur-fade-text';
import BlurFade from '@/components/ui/blur-fade';

// import IconCloud from '@/components/magicui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'python',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'kotlin',
  'androidstudio',
  'sonarqube',
  'figma',
];

export function SkillIcons() {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div>
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className='text-xl font-bold'>Skill</h2>
      </BlurFade>
      <div className='relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  mx-auto px-20 pb-20  '>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
