/** @format */
'use client';
import React from 'react';
import AdBanner from '../AdBanner';

const BlogSidebar = () => {
  return (
    <div className='min-h-screen p-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
      commodi, unde architecto officia optio assumenda numquam deserunt,
      officiis ab deleniti tempore amet cum sint eum. Illo quasi culpa libero.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
      commodi, unde architecto officia optio assumenda numquam deserunt,
      officiis ab deleniti tempore amet cum sint eum. Illo quasi culpa libero.
      <div className='flex flex-wrap justify-between'>
        <div className='w-full md:w-8/12 px-4 mb-8'>
          <div className='bg-black mb-5'>
            {/* <AdBanner
              dataAdFormat='auto'
              dataFullWidthResponsive={true}
              dataAdSlot='7562574138'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
