import Image from 'next/image';
import React from 'react';

interface BannerProps {
  imgsrc: string;
  heading: string;
}

const Banner: React.FC<BannerProps> = ({ imgsrc, heading }) => {
  return (
    <div className='relative h-96'>
      <Image
        className='h-full w-full bg-bottom object-cover'
        src={imgsrc}
        fill
        alt='Traffic Control Plan Banner'
      />
      <div className='absolute inset-0 bg-black opacity-50' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-3xl font-bold text-white md:text-5xl'>{heading}</h1>
      </div>
    </div>
  );
};

export default Banner;
