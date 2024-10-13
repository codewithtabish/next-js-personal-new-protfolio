/** @format */

import React from 'react';
import AdSenseAd from '../AdSenseAd';

const BlogSidebar = () => {
  return (
    <div className='min-h-screen p-2'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
      commodi, unde architecto officia optio assumenda numquam deserunt,
      officiis ab deleniti tempore amet cum sint eum. Illo quasi culpa libero.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt
      commodi, unde architecto officia optio assumenda numquam deserunt,
      officiis ab deleniti tempore amet cum sint eum. Illo quasi culpa libero.
      <AdSenseAd
      //   slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID}
      />
    </div>
  );
};

export default BlogSidebar;
