import Image from 'next/image';
import React from 'react';

const WorkZoneSection: React.FC = () => (
  <section className='bg-[#EFEFEF] py-14'>
    <div className='container flex flex-col  gap-10 md:flex-row md:justify-between'>
      <div className='md:w-1/2'>
        <h2 className='mb-4 text-2xl font-semibold text-primary md:text-3xl lg:text-5xl '>
          Why choose us ?
        </h2>
        <h3 className='mb-4 text-lg font-medium text-gray-600 md:text-xl lg:text-3xl'>
          SERVICE – EXPERIENCE – SAFETY
        </h3>
        <div className='flex flex-col gap-5'>
          <p className='text-sm text-gray-600'>
            <b>Traffic Control Planning : </b>
            Our traffic control plans optimize work zone safety and traffic
            flow. We analyze site conditions and requirements to engineer
            innovative plans , while ensuring compliance with local regulations.
            You can rely on us to make work zones safer for both workers and
            commuters.
          </p>
          <p className='text-sm text-gray-600'>
            <b>On-Time Delivery</b> : We understand delays cost time and money.
            That&apos;s why we take onus of project schedules, proactively
            identifying risks well in advance. With contingencies in place, we
            provide traffic control services on-time, every time.
          </p>
          <p className='text-sm text-gray-600'>
            <b>Safety First : </b>
            Safety drives every decision we make - from initial planning to
            final implementation. We leave no stone unturned in identifying
            hazards, insisting on high visibility standards, implementing strict
            traffic control.
          </p>
          <p className='text-sm text-gray-600'>
            <b>Quality Control : </b>
            Our commitment to service excellence, safety, and on-time delivery
            sets us apart. Work with us for best-in-class traffic control
            services tailored to your unique needs. We drive results while never
            compromising safety.
          </p>
        </div>
      </div>

      <div
        className='relative  w-full md:w-1/2'
        style={{ maxWidth: '100%', height: '450px' }}
      >
        <Image
          src={'/images/jpeg/6530cdbdaaf37.jpg'}
          fill
          className=' object-cover'
          alt='hero section image'
        />
      </div>
    </div>
  </section>
);

export default WorkZoneSection;
