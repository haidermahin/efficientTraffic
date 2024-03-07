import Image from 'next/image';
import React from 'react';
import { Carousel } from 'antd';

function Hero() {
  const images = [
    '/images/carousel/2.jpeg',
    '/images/carousel/10.jpeg',
    '/images/carousel/4.jpeg',
  ];

  return (
    <div className='bg-secondary'>
      <div className='sm:container'>
        <Carousel autoplay>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative h-64 md:h-[350px] lg:h-[450px]'
              style={{ maxWidth: '100%' }}
            >
              <Image
                src={image}
                fill
                className='object-cover'
                alt='hero section image'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
