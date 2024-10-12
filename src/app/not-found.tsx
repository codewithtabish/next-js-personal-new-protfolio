/** @format */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4'>
      <h2 className='text-4xl font-bold text-red-600 mb-4'>404 - Not Found</h2>
      <p className='text-lg text-gray-700 mb-6'>
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Link href='/'>
        <a className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'>
          Return Home
        </a>
      </Link>
    </div>
  );
}
