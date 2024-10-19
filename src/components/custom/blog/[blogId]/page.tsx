/** @format */

import React from 'react';
import Loader from '../../Loading';

type Props = {
  params: {
    blogId: string;
  };
};
const SingleBlogPage = async ({ params }: Props) => {
  const { blogId } = params;
  const blog = await fetch(`http://localhost:3000/api/blogs/${blogId}`);
  if (!blog) {
    return <Loader />;
  }

  return <main></main>;
};

export default SingleBlogPage;
