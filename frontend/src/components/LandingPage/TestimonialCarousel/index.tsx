import React from 'react';
import { Carousel, Avatar } from 'antd';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatarUrl: string;
}

const testimonialData: Testimonial[] = [
  {
    name: 'Umar',
    role: 'CEO',
    text: 'Our CEO is a veteran of 27 years in the industry with a civil engineering background and experiences all over the globe in traffic management and work on infrastructure projects all over the globe. He has experienced, worked, and fueled his passion for Traffic and Transport as well as Urban transportation in the Middle East and North America in the cities of Alberta, Calgary, and Toronto. He leads efficient traffic by example.',
    avatarUrl: '/images/jpeg/user1.jpeg',
  },
];
const TestimonialCarousel: React.FC = () => {
  return (
    <div className='bg-[#D9D9D9]'>
      <div className='testimonial-carousel container mx-auto w-4/5 py-14'>
        <div className='mb-5 flex flex-col items-center justify-center'>
          <h4 className=' text-2xl uppercase md:text-3xl'>
            Message from our CEO
          </h4>
        </div>
        <Carousel
          autoplay
          slidesToShow={1}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {testimonialData.map((testimonial, i) => (
            <div
              key={i}
              className='flex flex-col items-center gap-5 text-center'
            >
              <div className='flex flex-col gap-5'>
                <p className='text-2xl font-semibold'>{testimonial.name}</p>
                <p className='mx-auto max-w-5xl'>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
