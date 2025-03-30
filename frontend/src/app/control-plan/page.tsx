//import Banner from '@components/Banner';
import Banner from './_components/Banner';
import React from 'react';

const TrafficControlPlan = () => {
  return (
    <div>
      <Banner />
      <div className='container mx-auto py-14'>
        <h1 className='mb-4 text-4xl font-bold'>Traffic Control Plan</h1>
        <p className='mb-8  text-gray-700'>
          Efficient traffic, it is in our name! We are the experts in creating
          unique traffic control plans for long term, short term and
          intermediate settings. We are here to ensure a smooth interface of
          vehicles, construction activities, pedestrians and cyclists. Our
          expertly drawn, engineered traffic management plans will accommodate
          construction zones, Traffic management around the construction zone,
          pedestrian traffic and management as well as Traffic management for
          work vehicles accessing the construction zone.
        </p>
        <h2 className='mb-4 text-3xl font-bold'>
          Features of Our Traffic Control Plan
        </h2>
        <ul className='mb-8 list-inside list-disc text-gray-700'>
          <li>Advanced traffic management system</li>
          <li>Dynamic traffic signal control</li>
          <li>Intelligent speed management</li>
          <li>Congestion zone identification and management</li>
          <li>Pedestrian safety measures</li>
        </ul>
        <h2 className='mb-4 text-3xl font-bold'> Managing Traffic Operations</h2>
        <p className='mb-8  text-gray-700'>
        We provide standardized procedures for effectively establishing, installing and maintaining temporary traffic control zones. 
        We provide devices, and layouts based on varying site conditions and work types. 
        We ensure traffic controllers set up safe work zones that smoothly guide all road users through construction zones.
        </p>
        <h2 className='mb-4 text-3xl font-bold'> Industry Standards: </h2>
        <p className='mb-8 text-gray-700'>
        Efficient Traffic boasts seasoned traffic engineering professionals who excel in managing temporary traffic conditions across various provinces, including BC, Ontario, and Quebec. Their expertise spans traffic management, pedestrian management, and the integration of transit stops and services into temporary work zones. 
        Our traffic management team includes professionals holding the prestigious Ontario P.Eng licenses as well as the coveted P.T.O.E. (Professional Traffic Operations Engineer) designation.
        </p>
      </div>
    </div>
  );
};

export default TrafficControlPlan;
