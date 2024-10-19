/** @format */

import { db } from '@/config/db';
import myschema from '@/schema';
import { NextRequest, NextResponse } from 'next/server';

// POST method to create a new blog post
export async function POST(request: NextRequest) {
  try {
    // Extract the JSON data from the request body
    const {
      title,
      content,
      published_at,
      tags,
      slug,
      banner_image,
      author,
      status,
      category,
      is_featured,
      seo_title,
      seo_description,
      seo_keywords,
      canonical_url,
      seo_image,
      structured_data,
      og_title,
      og_description,
      og_image,
      og_type,
      twitter_card,
    } = await request.json();

    // Validate required parameters
    const missingFields: string[] = [];
    if (!title) missingFields.push('title');
    if (!content) missingFields.push('content');
    if (!slug) missingFields.push('slug');
    if (!banner_image) missingFields.push('banner_image');
    if (!author) missingFields.push('author');

    // Return an error response for missing fields
    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Missing required fields: ' + missingFields.join(', '),
        },
        { status: 400 }
      );
    }

    // Insert the blog data into the database
    const response = await db
      .insert(myschema.Blogs)
      .values({
        title,
        content,
        published_at: published_at ? new Date(published_at) : null,
        tags,
        slug,
        banner_image,
        author,
        status: status || 'draft', // Default to 'draft'
        category,
        is_featured: is_featured || false, // Default to false
        seo_title,
        seo_description,
        seo_keywords,
        canonical_url,
        seo_image,
        structured_data,
        og_title,
        og_description,
        og_image,
        og_type: og_type || 'article', // Default to 'article'
        twitter_card: twitter_card || 'summary_large_image', // Default to 'summary_large_image'
      })
      .returning({
        id: myschema.Blogs.id,
      });

    // Return success message for insertion
    return NextResponse.json(
      {
        status: 'success',
        message: 'Blog post inserted successfully.',
        data: response,
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle different types of errors with specific messages
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Invalid JSON format.',
        },
        { status: 400 }
      );
    }

    // Log the error for debugging
    console.error('Error inserting blog post:', error);

    // Return a generic error response
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while processing your request.',
        error: error?.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// GET method to retrieve all blog posts
export async function GET() {
  try {
    // Retrieve all blog entries from the database
    const blogs = await db.select().from(myschema.Blogs);

    // Check if there are no blogs in the database
    if (!blogs.length) {
      return NextResponse.json(
        {
          status: true,
          message: 'No blog posts found.',
          data: [],
        },
        { status: 200 }
      );
    }

    // Return the list of blog posts
    return NextResponse.json(
      {
        status: true,
        message: 'Blog posts retrieved successfully.',
        blogs,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Log the error for debugging
    console.error('Error retrieving blogs:', error);

    // Return a generic error response
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while retrieving the blogs.',
        error: error?.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
