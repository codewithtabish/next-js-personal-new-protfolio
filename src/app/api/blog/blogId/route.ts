/** @format */

// /** @format */

// import { db } from '@/config/db';
// import myschema from '@/schema';
// import { eq } from 'drizzle-orm';
// import { NextRequest, NextResponse } from 'next/server';

// // GET method to retrieve a blog post by blogId passed as a query parameter
// export async function GET(req: NextRequest) {
//   try {
//     // Extract the blogId from the URL's query parameters
//     const { searchParams } = new URL(req.url);
//     const blogId = searchParams.get('blogId'); // Example URL: /api/blog?blogId=123
//     console.log('THE SINGLE BLOG ID IS ', blogId);

//     // Validate if blogId exists
//     if (!blogId) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: 'blogId is required as a query parameter.',
//         },
//         { status: 400 }
//       );
//     }

//     // Fetch the blog post from the database using the provided blogId
//     const blog = await db
//       .select()
//       .from(myschema.Blogs)
//       .where(eq(myschema.Blogs.id, blogId))
//       .limit(1);

//     // Check if the blog post was found
//     if (!blog.length) {
//       return NextResponse.json(
//         {
//           status: false,
//           message: 'Blog post not found.',
//         },
//         { status: 404 }
//       );
//     }

//     // Return the blog post in the response
//     return NextResponse.json(
//       {
//         status: true,
//         message: 'Blog post retrieved successfully.',
//         blog: blog[0], // Return the first (and only) blog in the array
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     // Log the error for debugging purposes
//     console.error('Error retrieving blog:', error);

//     // Return a generic error response
//     return NextResponse.json(
//       {
//         status: 'error',
//         message: 'An error occurred while retrieving the blog post.',
//         error: error?.message || 'Internal Server Error',
//       },
//       { status: 500 }
//     );
//   }
// }
