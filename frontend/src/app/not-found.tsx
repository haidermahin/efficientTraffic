import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NotFoundPage() {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-200'>
      <div className='flex flex-col items-center gap-5 rounded-lg bg-white px-20 py-5 shadow-md'>
        <Image
          src={'/images/png/404_error.png'}
          width={350}
          height={350}
          className='object-cover'
          alt='404'
        />
        <h1 className='text-5xl font-semibold text-gray-800'>Page Not Found</h1>
        <p className='text-gray-600'>
          The page you are looking for does not exist.
        </p>
        <Link
          href='/'
          className='rounded-full bg-[#4756A0] px-4 py-3 font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#374A8C]'
        >
          Go back to the home page
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
