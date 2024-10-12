/** @format */

import { db } from '@/config/db';
import myschema from '@/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Extract the JSON data from the request body
    const { company_name, role, start_date, end_date, description } =
      await request.json();

    // Use the provided company logo URL
    const company_logo = 'https://avatar.iran.liara.run/public/girl';

    // Convert dates to valid Date objects if they are strings
    const parsedStartDate = new Date(start_date);
    const parsedEndDate = new Date(end_date);

    // Check if date parsing is valid
    if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Invalid date format. Please use YYYY-MM-DD format.',
        },
        { status: 400 }
      );
    }

    // Validate required parameters
    const missingFields: string[] = [];
    if (!company_name) missingFields.push('company_name');
    if (!role) missingFields.push('role');
    if (!description) missingFields.push('description');
    if (!start_date) missingFields.push('start_date');
    if (!end_date) missingFields.push('end_date');

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

    // Insert the experience data into the database
    const response = await db
      .insert(myschema.Experience)
      .values({
        company_name,
        company_logo,
        role,
        start_date: parsedStartDate, // Use the parsed date object
        end_date: parsedEndDate, // Use the parsed date object
        description,
      })
      .returning({
        id: myschema.Experience.id,
      });

    // Return success message for insertion
    return NextResponse.json(
      {
        status: 'success',
        message: 'Experience inserted successfully.',
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

// GET method to retrieve all experience data
// GET method to retrieve all experience data with only years for dates
export async function GET() {
  try {
    // Retrieve all experience entries from the database
    const experiences = await db.select().from(myschema.Experience);

    // Check if there are no experiences in the database
    if (!experiences.length) {
      return NextResponse.json(
        {
          status: true,
          message: 'No experiences found.',
          data: [],
        },
        { status: 200 }
      );
    }

    // Format the experience data to return only the year for start_date and end_date
    const formattedExperiences = experiences.map((exp) => ({
      ...exp,
      start_date: new Date(exp.start_date).getFullYear(), // Get only the year
      end_date: new Date(exp.end_date).getFullYear(), // Get only the year
    }));

    // Return the list of experiences with formatted dates
    return NextResponse.json(
      {
        status: true,
        message: 'Experiences retrieved successfully.',
        experience: formattedExperiences,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Log the error for debugging
    console.error('Error retrieving data:', error);

    // Return a generic error response
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while retrieving the data.',
        error: error?.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
