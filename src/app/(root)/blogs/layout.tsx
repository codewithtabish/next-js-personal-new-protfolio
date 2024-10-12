/** @format */

import React from 'react';
import Head from 'next/head';

const BlogsDashBoard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Metadata for SEO */}
      <Head>
        <title>Blogs | Tabish's Blog </title>
        <meta
          name='description'
          content='Read insightful articles and blogs on Full Stack Development, Android, React Native, and Data Engineering by Tabish.'
        />
        <meta
          name='keywords'
          content='Tabish, Blogs, Full Stack Developer, React Native, Android, Data Engineer'
        />
        <meta
          property='og:title'
          content="Tabish's Blog Dashboard"
        />
        <meta
          property='og:description'
          content='Explore blogs and articles about programming, development tips, and technology insights.'
        />
        <meta
          property='og:url'
          content='https://www.codewithtabish.com/blogs'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:image'
          content='https://www.codewithtabish.com/images/blog-banner.png'
        />
        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:title'
          content="Tabish's Blogs"
        />
        <meta
          property='twitter:description'
          content='Tech blogs, programming tips, and project insights by Tabish.'
        />
        <meta
          property='twitter:image'
          content='https://www.codewithtabish.com/images/blog-banner.png'
        />

        {/* JSON-LD Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.codewithtabish.com/blogs',
            },
            headline: 'Blogs by Tabish',
            description:
              'Explore technical blogs, programming tips, and technology insights by Tabish.',
            author: {
              '@type': 'Person',
              name: 'Tabish',
            },
            publisher: {
              '@type': 'Person',
              name: 'Tabish',
            },
            image: 'https://www.codewithtabish.com/images/blog-banner.png',
            url: 'https://www.codewithtabish.com/blogs',
            datePublished: '2024-10-12',
          })}
        </script>
      </Head>

      {/* Blog Content */}
      <div>{children}</div>
    </>
  );
};

export default BlogsDashBoard;
