/** @format */

import React from 'react';
import Head from 'next/head';
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
import HackathonList from './HackathonList';

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
        cache: 'no-store',
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
        cache: 'no-store',
      }
    );

    if (!response.status) {
      throw new Error('Failed to fetch Education info');
    }

    const data = await response.json();
    education = data.educations;
  } catch (error) {
    let education = null;
    console.error('Error fetching Education:', error);
    // Optionally handle or display the error state here
  }

  // Fallback content in case info is null or error occurs
  if (!education) {
    return (
      <div>Error loading educational information. Please try again later.</div>
    );
  }

  // Experience fetching
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
    console.error('Error fetching Experience:', error);
    // Optionally handle or display the error state here
  }

  if (!experience) {
    return (
      <div>Error loading experience information. Please try again later.</div>
    );
  }

  // Skills fetching
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
    console.error('Error fetching Skills:', error);
  }

  if (!skills) {
    return <div>Error loading skills information. Please try again later.</div>;
  }

  // Projects fetching
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      cache: 'default',
    });

    if (!response.status) {
      throw new Error('Failed to fetch projects ');
    }

    const data = await response?.json();
    projects = data?.projects;
  } catch (error) {
    projects = null;
    console.error('Error fetching projects:', error);
  }

  if (!projects) {
    return (
      <div>Error loading projects information. Please try again later.</div>
    );
  }

  // Feedback fetching
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/feedback`,
      {
        cache: 'force-cache',
      }
    );

    if (!response.status) {
      throw new Error('Failed to fetch Testimonials ');
    }

    const data = await response?.json();
    feedbacks = data?.testimonials;
  } catch (error) {
    feedbacks = null;
    console.error('Error fetching testimonials:', error);
  }

  if (!feedbacks) {
    return (
      <div>Error loading feedback information. Please try again later.</div>
    );
  }

  return (
    <>
      <Head>
        <title>Tabish Talha's Portfolio</title>
        <meta
          name='description'
          content='Explore the journey of Tabish Talha, a Full Stack Developer specializing in Android and React Native.'
        />
        <meta
          name='keywords'
          content='Tabish, Talha, Talha Tabish, Portfolio, Full Stack Developer, Android Developer, React Native, Projects'
        />
        <meta
          property='og:title'
          content="Tabish Talha's Portfolio"
        />
        <meta
          property='og:description'
          content="Showcasing Tabish Talha's skills, experience, and projects in software development."
        />
        <meta
          property='og:url'
          content='https://www.codewithtabish.com'
        />
        <meta
          property='og:image'
          content='https://www.codewithtabish.com/images/portfolio-banner.png'
        />
        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:title'
          content="Tabish Talha's Portfolio"
        />
        <meta
          property='twitter:description'
          content="Explore Tabish Talha's journey in software development."
        />
        <meta
          property='twitter:image'
          content='https://www.codewithtabish.com/images/portfolio-banner.png'
        />

        {/* JSON-LD for Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Tabish Talha',
            jobTitle: 'Full Stack Developer',
            url: 'https://www.codewithtabish.com',
            sameAs: [
              'https://www.linkedin.com/in/tabish',
              'https://github.com/tabish',
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'CodeWithTabish',
            },
          })}
        </script>
      </Head>
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
          <FeedbackList feedbacks={feedbacks} />
        </section>
        <HackathonList />
        <GETInTouch />
      </section>
    </>
  );
};

export default HomeHeroServerComponent;
