/** @format */

import { MetadataRoute } from 'next';

const baseUrl = 'https://www.codewithtabish.com';

async function fetchBlogs() {
  const response = await fetch(`${baseUrl}/api/blogs`);
  const allblogs = await response.json();
  const { blogs } = allblogs;
  return blogs;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await fetchBlogs(); // Fetch dynamic blogs

  const staticUrls = [
    {
      url: `${baseUrl}`, // Homepage
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`, // Blog listing page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`, // Static Projects page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more static URLs for other pages like contact, courses, etc.
  ];

  const blogUrls = blogs.map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`, // Dynamic blog URL
    // lastModified: new Date(blog.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls]; // Combine static and dynamic URLs
}
