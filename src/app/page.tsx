/** @format */

import HeroAboutSection from '@/components/custom/home/HeroAboutSection';
import HeroInfoSection from '@/components/custom/home/HeroInfoSection';
import HomeHeroServerComponent from '@/components/custom/home/HomeHeroServerComponent';
import { outfit, lusitana } from '@/ui/fonts';
import Image from 'next/image';
import React from 'react';
const HomePage = () => {
  return (
    <main className='flex flex-col min-h-screen py-16 max-w-3xl mx-auto space-y-10 md:px-2 px-5'>
      <HomeHeroServerComponent />
    </main>
  );
};

export default HomePage;
