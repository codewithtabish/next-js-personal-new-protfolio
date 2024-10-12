/** @format */

import { db } from '@/config/db';
import myschema from '@/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch all personal information from the database
    const response = await db.select().from(myschema.Education);

    // Return a success response with the retrieved data
    return NextResponse.json(
      {
        status: true,
        message: 'Data retrieved successfully.',
        educations: response,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Log the error for debugging
    console.error('Error fetching data:', error);

    // Return an error response with a clear message
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while retrieving data.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Extract the JSON data from the request body
    const {
      institution_name,
      degree,
      field_of_study,
      start_date,
      end_date,
      imageURL,
      personal_info_id,
    } = await request.json();

    // Validate required parameters
    const missingFields: string[] = [];
    if (!institution_name) missingFields.push('institution_name');
    if (!degree) missingFields.push('degree');
    if (!field_of_study) missingFields.push('field_of_study');
    if (!start_date) missingFields.push('start_date');
    if (!end_date) missingFields.push('end_date');
    if (!imageURL) missingFields.push('imageURL');
    if (!personal_info_id) missingFields.push('personal_info_id');

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

    const response = await db
      .insert(myschema.Education)
      .values({
        institution_name,
        degree,
        field_of_study,
        start_date,
        end_date,
        imageURL,
      })
      .returning({
        id: myschema.Education.id,
      });

    // Return success message for insertion
    return NextResponse.json(
      {
        status: 'success',
        message: 'Education history inserted successfully.',
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
    console.error('Error inserting data:', error);

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
