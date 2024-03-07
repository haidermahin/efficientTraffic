// pages/traffic-signals.js
import Banner from '@components/Banner';
import React from 'react';

const TrafficSignals = () => {
  return (
    <div>
      <Banner
        imgsrc='/images/jpeg/photo-1688447769153-322acf7414b5.jpeg'
        heading='Traffic Signals'
      />

      <header className='bg-blue-500 py-4 text-white'>
        <div className='container mx-auto'>
          <h1 className='text-3xl font-semibold'>Traffic Signals</h1>
          <p className='text-sm'>Optimizing Traffic Flow</p>
        </div>
      </header>

      <div className='container mx-auto py-16'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='rounded-lg bg-red-500/20 p-6'>
            <h2 className='text-xl font-bold'>
              {' '}
              Traffic phasing and signal drawings{' '}
            </h2>
            <p className='text-gray-600'></p>
          </div>
          <div className='bg-g rounded-lg bg-yellow-500/20 p-6'>
            <h2 className='text-xl font-bold'>Temporary traffic signals</h2>
            <p className='text-gray-600'></p>
          </div>
          <div className='bg-g rounded-lg bg-green-500/20 p-6'>
            <h2 className='text-xl font-bold'>Timing Plans</h2>
            <p className='text-gray-600'></p>
          </div>
        </div>
        <section className='mb-12  mt-10'>
          <h2 className='mb-4 text-2xl font-semibold'>
            Traffic Phasing and Signal Drawing
          </h2>
          <p>
            Traffic signals are controlled devices used to manage traffic at
            intersections. PHM 125 (Model for Signal Head and Specifications)
            provides detailed diagrams and specifications for signal head
            configurations, ensuring consistency and compliance with standards.
            These drawings outline signal head placement, lens colors, and other
            features.
          </p>
        </section>
        <section className='mb-12  mt-10'>
          <h2 className='mb-4 text-2xl font-semibold'>
            Temporary traffic signals
          </h2>
          <p>
            We use the traffic signal drawings to implement temporary traffic
            signals during construction projects and maintenance work. These
            temporary signals are typically mounted on overhead span wires to
            provide clear visibility. Our technical experts can specify the
            right lens materials, timing plans, and equipment needed to safely
            manage vehicular traffic flow, pedestrian movements as well as
            bicycle movements through work zones. Our traffic signals adhere to
            city standards, minimizing congestion and maximizing safety. This is
            essential to your project&apos;s success
          </p>
        </section>

        <section className='mb-12  mt-10'>
          <h2 className='mb-4 text-2xl font-semibold'>Timing Plans</h2>
          <p>
            Our team can provide timing plans for traffic signals that can be
            periodically updated to adapt to changing traffic conditions.
            Factors such as lane availability, storage length, and traffic
            impact analysis reports (TIA) influence timing adjustments, ensuring
            efficient traffic flow. Our customized adaptive signal timing plans
            enhance traffic flow and safety by responding to changing volumes,
            pedestrians and conditions in real-time. We specialize in optimizing
            and adjusting signals for maximum efficiency.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TrafficSignals;
