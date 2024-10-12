/** @format */

import React from 'react';
import HeroInfoSection from './HeroInfoSection';
import HeroAboutSection from './HeroAboutSection';
import EducationList from './EducationList';
import ExperienceList from './ExperienceList';
import { SkillIcons } from './SkillCard';
import SkillSections from './SkillList';

const HomeHeroServerComponent = async () => {
  let info = null;
  let education = null;
  let experience = null;
  let skills = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/personal-info`,
      {
        cache: 'reload', // You can change this to 'no-store' for uncached fetches
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
        cache: 'default', // You can change this to 'no-store' for uncached fetches
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
      cache: 'no-cache', // You can change this to 'no-store' for uncached fetches
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
      cache: 'no-cache', // You can change this to 'no-store' for uncached fetches
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

      {/* {JSON.stringify(experience)} */}
    </section>
  );
};

export default HomeHeroServerComponent;
