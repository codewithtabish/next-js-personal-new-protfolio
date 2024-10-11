/** @format */

import React from 'react';
import HeroInfoSection from './HeroInfoSection';
import HeroAboutSection from './HeroAboutSection';

const HomeHeroServerComponent = async () => {
  let info = null;

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

  return (
    <section className='space-y-14'>
      <HeroInfoSection info={info} />
      <HeroAboutSection info={info} />
    </section>
  );
};

export default HomeHeroServerComponent;
