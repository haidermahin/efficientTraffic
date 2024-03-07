import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, description, url }) => (
  <div className='flex flex-col gap-10 border border-gray-900 p-10'>
    <h2 className='text-center text-xl font-bold text-primary underline'>
      {title}
    </h2>
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        src={url}
        layout='responsive'
        width={300}
        height={300}
        alt={title}
      />
    </div>
    <p className='text-ellipsis text-center'>{description}</p>
  </div>
);

const TrafficSafety: React.FC = () => {
  return (
    <section className='bg-[#D9D9D9] py-14'>
      <div className='container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        <Card
          title='Traffic Management Plan(TMP)'
          description='State-approved product lists, MASH implementation standards, and information about crashworthy work zone devices.'
          url='/images/png/image.png'
        />
        <Card
          title='Traffic Signal'
          description='To Traffic Control Work Zone Awareness Week, campaigns, and other outreach materials.'
          url='/images/png/law.png'
        />
        <Card
          title='Traffic Packages(TTMP)'
          description='State laws, policies, standards, specifications, and plans in map or list view.'
          url='/images/png/publicawareness.png'
        />
      </div>
    </section>
  );
};

export default TrafficSafety;
