/** @format */
'use client';
import React from 'react';
import AdBanner from '../AdBanner';
// import AdBanner from '../AdBanner';

const BlogSidebar = () => {
  return (
    <div className='lg:min-h-screen p-2 lg:block hidden'>
      <div className='flex flex-wrap justify-between'>
        <div className='w-full md:w-8/12 lg:w-6/12 xl:w-4/12 px-4 mb-8'>
          <div className=''>
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
