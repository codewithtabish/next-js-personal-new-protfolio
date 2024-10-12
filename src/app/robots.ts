/** @format */

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '*', // Allow all pages
      disallow: ['/dashboard/'], // Disallow all dashboard routes
    },

    sitemap: 'https://www.codewithtabish.com/sitemap.xml', // Update with your actual sitemap URL
  };
}
