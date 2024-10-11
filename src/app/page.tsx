/** @format */

import HeroInfoSection from '@/components/custom/home/HeroInfoSection';
import { outfit, lusitana } from '@/ui/fonts';
import Image from 'next/image';
import React from 'react';
const HomePage = () => {
  return (
    <main className='flex flex-col min-h-[100vh] py-16 max-w-4xl mx-auto'>
      <section>
        <HeroInfoSection />
      </section>
    </main>
  );
};

export default HomePage;
