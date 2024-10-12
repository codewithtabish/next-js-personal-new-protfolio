/** @format */

import { db } from '@/config/db';
import myschema from '@/schema';
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

// GET - Fetch all skills
export async function GET() {
  try {
    // Fetch all skills from the database
    const response = await db.select().from(myschema.Skills);

    // Return a success response with the retrieved data
    return NextResponse.json(
      {
        status: 'success',
        message: 'Skills retrieved successfully.',
        data: response, // Return all skills
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while retrieving skills.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// POST - Create a new skill
export async function POST(request: NextRequest) {
  try {
    const { name, level } = await request.json();

    // Validate required fields
    const missingFields: string[] = [];
    if (!name) missingFields.push('name');
    if (!level) missingFields.push('level');

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: `Missing required fields: ${missingFields.join(', ')}`,
        },
        { status: 400 }
      );
    }

    // Insert the new skill into the database
    const response = await db
      .insert(myschema.Skills)
      .values({ name, level })
      .returning({
        id: myschema.Skills.id,
        name: myschema.Skills.name,
        level: myschema.Skills.level,
      });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Skill created successfully.',
        data: response[0],
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error inserting skill:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while creating the skill.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// PUT - Update an existing skill
export async function PUT(request: NextRequest) {
  try {
    const { id, name, level } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Skill ID is required.',
        },
        { status: 400 }
      );
    }

    // Check if the skill exists
    const existingSkill = await db
      .select()
      .from(myschema.Skills)
      .where(eq(id, myschema.Skills.id));

    if (existingSkill.length === 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Skill not found.',
        },
        { status: 404 }
      );
    }

    // Update the skill
    const updatedSkill = await db
      .update(myschema.Skills)
      .set({ name, level })
      .where(eq(id, myschema.Skills.id))
      .returning({
        id: myschema.Skills.id,
        name: myschema.Skills.name,
        level: myschema.Skills.level,
      });

    return NextResponse.json(
      {
        status: 'success',
        message: 'Skill updated successfully.',
        data: updatedSkill[0],
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error updating skill:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while updating the skill.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete a skill
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Skill ID is required.',
        },
        { status: 400 }
      );
    }

    // Check if the skill exists
    const existingSkill = await db
      .select()
      .from(myschema.Skills)
      .where(eq(id, myschema.Skills.id));

    if (existingSkill.length === 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Skill not found.',
        },
        { status: 404 }
      );
    }

    // Delete the skill
    await db.delete(myschema.Skills).where(eq(id, myschema.Skills.id));

    return NextResponse.json(
      {
        status: 'success',
        message: 'Skill deleted successfully.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error deleting skill:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'An error occurred while deleting the skill.',
        error: error.message || 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}
