/** @format */

import { db } from '@/config/db';
import myschema from '@/schema';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

// / GET - Fetch all projects
export async function GET() {
  try {
    // Fetch all projects from the database
    const response = await db.select().from(myschema.Projects);

    // Return a success response with the retrieved data
    return NextResponse.json(
      {
        status: 'success',
        message: 'Projects retrieved successfully.',
        projects: response, // Return all projects
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while retrieving projects.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// POST - Create a new project
export async function POST(request: NextRequest) {
  try {
    const {
      title,
      description,
      tech_stack,
      project_link,
      image,
      video_url,
      type,
      start_date,
      githubRepoLink,
      end_date,
      isPublic,
    } = await request.json();

    // Validate required fields
    const missingFields: string[] = [];
    if (!title) missingFields.push('title');
    if (!description) missingFields.push('description');
    if (!tech_stack) missingFields.push('tech_stack');
    if (!project_link) missingFields.push('project_link');
    if (!image) missingFields.push('image');
    if (!githubRepoLink) missingFields.push('githubRepoLink');
    if (!video_url) missingFields.push('video_url');
    if (!type) missingFields.push('type');
    if (!start_date) missingFields.push('start_date');
    if (!end_date) missingFields.push('end_date');
    if (!isPublic) missingFields.push('isPublic');

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: `Missing required fields: ${missingFields.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Insert the new project into the database
    const response = await db
      .insert(myschema.Projects)
      .values({
        title,
        githubRepoLink,
        description,
        tech_stack,
        isPublic,
        project_link,
        image,
        video_url,
        type,
        start_date: new Date(start_date), // Ensure start_date is in proper format
        end_date: new Date(end_date), // Ensure end_date is in proper format
      })
      .returning({
        id: myschema.Projects.id,
        title: myschema.Projects.title,
      });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Project created successfully.',
        project: response[0],
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error inserting project:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while creating the project.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// / PUT - Update an existing project
export async function PUT(request: NextRequest) {
  try {
    const { id, title, description } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Project ID is required.',
        },
        { status: 400 }
      );
    }

    // Check if the project exists
    const existingProject = await db
      .select()
      .from(myschema.Projects)
      .where(eq(id, myschema.Projects.id));

    if (existingProject.length === 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Project not found.',
        },
        { status: 404 }
      );
    }

    // Update the project
    const updatedProject = await db
      .update(myschema.Projects)
      .set({ title, description })
      .where(eq(id, myschema.Projects.id))
      .returning({
        id: myschema.Projects.id,
        title: myschema.Projects.title,
        description: myschema.Projects.description,
      });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Project updated successfully.',
        data: updatedProject[0],
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while updating the project.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete a project
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Project ID is required.',
        },
        { status: 400 }
      );
    }

    // Check if the project exists
    const existingProject = await db
      .select()
      .from(myschema.Projects)
      .where(eq(id, myschema.Projects.id));

    if (existingProject.length === 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Project not found.',
        },
        { status: 404 }
      );
    }

    // Delete the project
    await db.delete(myschema.Projects).where(eq(id, myschema.Projects.id));

    return NextResponse.json(
      {
        status: 'success',
        message: 'Project deleted successfully.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while deleting the project.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
