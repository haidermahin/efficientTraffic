import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className='relative h-96'>
      <video 
        className='h-full w-full object-cover'
        src='/videos/Tcp.mp4'
        autoPlay 
        muted 
        loop 
        playsInline
      />
      <div className='absolute inset-0 bg-black opacity-50' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-3xl font-bold text-white md:text-5xl'>
          Traffic Control Plan
        </h1>
      </div>
    </div>
  );
};

export default Banner;
