/** @format */

import React from 'react';

const BlogAllList = async () => {
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
    blogs = data.educations;
  } catch (error) {
    let education = null;
    console.error('Error fetching Blogs:', error);
    // Optionally handle or display the error state here
  }
  return <div>{JSON.stringify(blogs)}</div>;
};

export default BlogAllList;
