/** @format */

import React from 'react';
import Head from 'next/head';

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Metadata for SEO */}
      <Head>
        <title>Projects | Tabish's Portfolio</title>
        <meta
          name='description'
          content='Explore the diverse range of projects developed by Tabish, including Full Stack web development, Android applications, and React Native solutions.'
        />
        <meta
          name='keywords'
          content='Tabish, Projects, Full Stack Developer, React Native, Android, Web Development'
        />
        <meta
          property='og:title'
          content="Tabish's Projects"
        />
        <meta
          property='og:description'
          content="A portfolio showcasing Tabish's diverse projects in web development, Android, and React Native."
        />
        <meta
          property='og:url'
          content='https://www.codewithtabish.com/projects'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:image'
          content='https://www.codewithtabish.com/images/project-banner.png'
        />
        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:title'
          content="Tabish's Projects"
        />
        <meta
          property='twitter:description'
          content="Explore Tabish's portfolio of web, mobile, and data engineering projects."
        />
        <meta
          property='twitter:image'
          content='https://www.codewithtabish.com/images/project-banner.png'
        />

        {/* JSON-LD Structured Data */}
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.codewithtabish.com/projects',
            },
            headline: 'Projects by Tabish',
            description:
              "Explore Tabish's projects in Full Stack Development, Android, React Native, and Data Engineering.",
            author: {
              '@type': 'Person',
              name: 'Tabish',
            },
            publisher: {
              '@type': 'Person',
              name: 'Tabish',
            },
            image: 'https://www.codewithtabish.com/images/project-banner.png',
            url: 'https://www.codewithtabish.com/projects',
            datePublished: '2024-10-12',
          })}
        </script>
      </Head>

      {/* Project Content */}
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>My Projects</h1>
        <p className='mb-6'>
          Discover the various projects I’ve worked on, showcasing my skills in
          Full Stack Development, Android, and React Native.
        </p>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ProjectLayout;
