/** @format */

import BlogAllList from '@/components/custom/blog/BlogAllList';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <section>
      <main>
        <Image
          src={'/images/blog-b1.jpg'}
          width={1000}
          height={630}
          alt='Blog Banner'
          className='rounded-md mt-0 md:block hidden'
          // quality={100}
        />
        <BlogAllList />
      </main>
    </section>
  );
};

export default page;
