/** @format */

import BlurFade from '@/components/ui/blur-fade';
import { BlogInterface } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FullBlogList from './FullBlogList';
import SimilarBlog from './SimilarBlog';

const BlogAllList = async () => {
  const BLUR_FADE_DELAY = 0.04;

  let blogs = null;
  // SECOND PART
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
      cache: 'default',
    });

    if (!response.status) {
      throw new Error('Failed to fetch Blogs info');
    }

    const data = await response.json();
    blogs = data?.blogs;
    console.log('THE BLOGS ARE ', blogs);
  } catch (error) {
    let education = null;
    console.error('Error fetching Blogs:', error);
    // Optionally handle or display the error state here
  }
  return (
    <section className=''>
      <FullBlogList blogs={blogs} />
      <div className='md:block hidden'>
        {/* <SimilarBlog blogs={blogs} /> */}
      </div>
    </section>
  );
};

export default BlogAllList;
