/** @format */

import { db } from '@/config/db';
import myschema from '@/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch all testimonials from the database
    const response = await db.select().from(myschema.Testimonials);

    // Return a success response with the retrieved data
    return NextResponse.json(
      {
        status: true,
        message: 'Testimonials retrieved successfully.',
        testimonials: response,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Log the error for debugging
    console.error('Error fetching testimonials:', error);

    // Return an error response with a clear message
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while retrieving testimonials.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extract the JSON data from the request body
    const { author, content, position, company, imageURL } =
      await request.json();

    // Validate required parameters
    const missingFields: string[] = [];
    if (!author) missingFields.push('author');
    if (!content) missingFields.push('content');
    if (!position) missingFields.push('position');
    if (!company) missingFields.push('company');
    if (!imageURL) missingFields.push('imageURL');

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

    // Insert the testimonial into the database
    const response = await db
      .insert(myschema.Testimonials)
      .values({
        author,
        content,
        position,
        company,
        imageURL,
      })
      .returning({
        id: myschema.Testimonials.id,
      });

    // Return success message for insertion
    return NextResponse.json(
      {
        status: 'success',
        message: 'Testimonial inserted successfully.',
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
    console.error('Error inserting testimonial:', error);

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
