/** @format */

import React from 'react';
import BlurFadeText from './blur-fade-text';
import BlurFade from '@/components/ui/blur-fade';
import { ProjectCard } from './project-card';

const ProjectList = ({ projects }: { projects: any }) => {
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div>
      <section id='projects'>
        <div className='space-y-12 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Check out my latest work
                </h2>
                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
            {projects.map((project: any, id: any) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                {/* <p>{project?.video_url}</p> */}
                <ProjectCard
                  href={project.project_link}
                  projectID={project?.id}
                  key={project?.title}
                  title={project.title}
                  description={project.description}
                  projectURL={project.project_link}
                  dates={project?.dates}
                  tags={project.tech_stack}
                  image={project.image}
                  video={project.video_url}
                  type={project.type}
                  isPublic={project.isPublic}
                  //   links={project?.links}
                  githubRepoLink={project?.githubRepoLink}
                  //   githubRepoLink={project?.githubRepoLink}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectList;
