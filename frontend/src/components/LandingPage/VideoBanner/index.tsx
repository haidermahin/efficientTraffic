import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

export default function VideoBanner() {
  return (
    <div className='bg-secondary'>
      <div className='sm:container'>
        <section className='relative flex h-64 items-center justify-center overflow-hidden md:h-[350px] lg:h-[450px]'>
          <video
            className='absolute min-h-full w-auto min-w-full max-w-none'
            src='/videos/banner-vid.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-20 text-center'>
            <div className='flex flex-col gap-8'>
              <h1 className='mx-auto w-2/3 text-5xl font-semibold text-white'>
                Efficient Traffic Management for Smooth Journeys
              </h1>

              <Link
                href='/contact'
                className='hover:bg-primary/50 mx-auto w-36 rounded bg-primary py-2 font-semibold text-white'
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className='absolute inset-0 bg-black/50' />
        </section>
      </div>
    </div>
  );
}
