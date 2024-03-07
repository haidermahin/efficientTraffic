import Link from 'next/link';
import React from 'react';
import { FaLocationArrow, FaMobile } from 'react-icons/fa';

const services = [
  'Traffic Control',
  'Flagging',
  'Crash Protection',
  'Sales & Rentals',
  'Installation Services',
  'Project Management and Planning',
  'Traffic Control Training',
];

const Footer: React.FC = () => (
  <footer className='bg-[#2D3032] py-10 text-white'>
    <div className='container'>
      <div className='flex flex-col justify-between md:flex-row'>
        {renderOfficeSection(
          'Hamilton Office',
          '905-529-7000',
          '70 Frid Street, Unit #8, Hamilton, ON L8P 4M4',
        )}
        {renderOfficeSection(
          'GTA Office',
          '905-696-7961',
          '5830 Datsun Rd. Mississauga, ON L4W 1H2',
        )}
      </div>
    </div>
  </footer>
);

const renderOfficeSection = (title: string, phone: string, address: string) => (
  <div className='flex flex-col gap-3 px-16 pb-4 md:w-1/2 md:ps-0'>
    <h3 className='mb-2 text-xl font-medium text-gray-300'>{title}</h3>
    <p className='flex items-center gap-2 text-gray-500'>
      <FaMobile /> {phone}
    </p>
    <p className='flex items-baseline gap-2 text-gray-500'>
      <FaLocationArrow /> {address}
    </p>
  </div>
);

const renderServicesSection = () => (
  <div className='flex flex-col gap-3 px-16 pb-4 md:w-1/2'>
    <h3 className='mb-2 text-xl font-semibold text-gray-300'>Services</h3>
    {services.map((service, index) => (
      <Link key={index} href={'/'} className='text-gray-500'>
        {service}
      </Link>
    ))}
  </div>
);

export default Footer;
