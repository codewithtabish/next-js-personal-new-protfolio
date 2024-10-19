/** @format */

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfoInterface {
  id: string;
  name: string;
  subtitle: string;
  bio: string;
  profile_image: string;
  contact_email: string;
  social_links: SocialLinks;
}

interface ApiResponse {
  status: boolean;
  message: string;
  info: PersonalInfoInterface;
}

type JSONValue = string | number | boolean | null | JSONArray | JSONObject;

interface JSONArray extends Array<JSONValue> {}

interface JSONObject {
  [key: string]: JSONValue;
}

// Import necessary types
// import { JSONValue } from 'some-json-library'; // Replace with actual import if using a specific JSON library

// Define the Blog interface
export interface BlogInterface {
  id: string; // UUID for the blog post
  title: string; // Title of the blog post
  content: string; // Content of the blog post
  published_at?: Date; // Optional published date of the blog post
  tags: JSONValue; // JSON array of tags for categorization
  slug: string; // SEO-friendly URL slug
  banner_image: string; // URL of the blog banner image
  author: string; // Author of the blog post
  status: 'draft' | 'published'; // Post status
  category?: string; // Optional blog category
  is_featured: boolean; // Whether the blog is featured

  // SEO fields
  seo_title?: string; // Optional SEO title
  seo_description?: string; // Optional SEO description
  seo_keywords?: string; // Optional comma-separated keywords for SEO
  canonical_url?: string; // Optional canonical URL for avoiding duplicate content issues
  seo_image?: string; // Optional image for SEO and social media sharing
  structured_data?: JSONValue; // Optional JSON for schema.org structured data
  og_title?: string; // Optional Open Graph title
  og_description?: string; // Optional Open Graph description
  og_image?: string; // Optional Open Graph image
  og_type?: 'article' | string; // Optional Open Graph type
  twitter_card?: 'summary' | 'summary_large_image' | string; // Optional Twitter card type
}
