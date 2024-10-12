/** @format */

import React from 'react';
import HeroInfoSection from './HeroInfoSection';
import HeroAboutSection from './HeroAboutSection';
import EducationList from './EducationList';
import ExperienceList from './ExperienceList';
import { SkillIcons } from './SkillCard';
import SkillSections from './SkillList';
import ProjectList from './ProjectList';
import GETInTouch from './GETInTouch';
import FeedbackList from './FeedbackList';
import BlurFade from '@/components/ui/blur-fade';

const HomeHeroServerComponent = async () => {
  let info = null;
  let education = null;
  let experience = null;
  let skills = null;
  let projects = null;
  let feedbacks = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/personal-info`,
      {
        cache: 'no-cache', // You can change this to 'no-store' for uncached fetches
      }
    );

    if (!response.status) {
      throw new Error('Failed to fetch personal info');
    }

    const data = await response.json();
    info = data.info;
  } catch (error) {
    console.error('Error fetching personal info:', error);
    // Optionally handle or display the error state here
  }

  // Fallback content in case info is null or error occurs
  if (!info) {
    return (
      <div>Error loading personal information. Please try again later.</div>
    );
  }

  // SECOND PART
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/education`,
      {
        cache: 'force-cache', // You can change this to 'no-store' for uncached fetches
      }
    );

    if (!response.status) {
      throw new Error('Failed to fetch Education info');
    }

    const data = await response.json();
    education = data.educations;
  } catch (error) {
    let education = null;
    console.error('Error fetching  Education:', error);
    // Optionally handle or display the error state here
  }

  // Fallback content in case info is null or error occurs
  if (!education) {
    return (
      <div>Error loading educationl information. Please try again later.</div>
    );
  }
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/work`, {
      cache: 'force-cache', // You can change this to 'no-store' for uncached fetches
    });

    if (!response.status) {
      throw new Error('Failed to fetch Work experience ');
    }

    const data = await response?.json();
    experience = data.experience;
  } catch (error) {
    experience = null;
    console.error('Error fetching  Experience:', error);
    // Optionally handle or display the error state here
  }

  // Fallback content in case info is null or error occurs
  if (!experience) {
    return (
      <div>Error loading experience information. Please try again later.</div>
    );
  }
  // SKILLS PART
  // SKILLS PART
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`, {
      cache: 'force-cache', // You can change this to 'no-store' for uncached fetches
    });

    if (!response.status) {
      throw new Error('Failed to fetch Skills experience ');
    }

    const data = await response?.json();
    skills = data?.data;
  } catch (error) {
    skills = null;
    console.error('Error fetching  Skills:', error);
    // Optionally handle or display the error state here
  }

  // Fallback content in case info is null or error occurs
  if (!skills) {
    return <div>Error loading skills information. Please try again later.</div>;
  }
  // Projects PART
  // PROJECTS PART
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`);

    if (!response.status) {
      throw new Error('Failed to fetch Skills experience ');
    }

    const data = await response?.json();
    projects = data?.projects;
  } catch (error) {
    projects = null;
    console.error('Error fetching  projects:', error);
    // Optionally handle or display the error state here
  }

  // Fallback content in case info is null or error occurs
  if (!projects) {
    return (
      <div>Error loading projects information. Please try again later.</div>
    );
  }
  // testimonials PART
  // PROJECTS PART
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`);

    if (!response.status) {
      throw new Error('Failed to fetch Skills Testimonials ');
    }

    const data = await response?.json();
    feedbacks = data?.testimonials;
  } catch (error) {
    feedbacks = null;
    console.error('Error fetching  testimonials:', error);
    // Optionally handle or display the error state here
  }

  // Fallback content in case info is null or error occurs
  if (!feedbacks) {
    return (
      <div>Error loading feedbacks information. Please try again later.</div>
    );
  }

  return (
    <section className='space-y-14'>
      <HeroInfoSection info={info} />
      <HeroAboutSection info={info} />
      <EducationList education={education} />
      <ExperienceList experience={experience} />
      <section>
        <SkillIcons />
        <SkillSections skills={skills} />
      </section>
      <section>
        <ProjectList projects={projects} />
      </section>
      <section>
        {/* <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className='text-xl font-bold'>Feedbacks</h2>
        </BlurFade> */}
        <FeedbackList feedbacks={feedbacks} />
      </section>
      <GETInTouch />

      {/* {JSON.stringify(experience)} */}
    </section>
  );
};

export default HomeHeroServerComponent;
