/** @format */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.codewithtabish.com', // Homepage
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.codewithtabish.com/projects', // About page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.codewithtabish.com/blogs', // Blog page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7, // Adjusted priority for blog
    },
    {
      url: 'https://www.codewithtabish.com/courses', // Courses page
      lastModified: new Date(),
      changeFrequency: 'monthly', // Adjust based on how often you update this page
      priority: 0.8,
    },
    // Add more pages as necessary
    {
      url: 'https://www.codewithtabish.com/contact', // Contact page (if applicable)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
