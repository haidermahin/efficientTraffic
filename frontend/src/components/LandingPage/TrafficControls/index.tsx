'use client';
import { FaTrafficLight } from 'react-icons/fa';

const sections = [
  {
    title: 'Traffic Management Plans',
    description: 'Description for Traffic Control',
    imageUrl: '/images/jpeg/photo-1639953855866-e4008dd10a93.jpeg',
  },
  {
    title: 'Traffic Signals',
    description: 'Description for Traffic Signals',
    imageUrl: '/images/jpeg/photo-1650184723880-1f03e780b2cb.jpeg',
  },
  {
    title: 'Traffic Packages(TTMP)',
    description: 'Description for To Traffic Control',
    imageUrl: '/images/jpeg/photo-1583429891508-015ef9cd958e.jpeg',
  },
  {
    title: 'AFAD/ Flagging',
    description: 'Description for AFAD/ Flagging',
    imageUrl: '/images/jpeg/photo-1483213097419-365e22f0f258.jpeg',
  },
  {
    title: 'Traffic Control Personnel',
    description: 'Description for Traffic Control Personal',
    imageUrl: '/images/jpeg/photo-1532918507736-e5ef4153b3c9.jpeg',
  },
  {
    title: 'More',
    description: 'Description for More',
    imageUrl: '/images/jpeg/photo-1688447769153-322acf7414b5.jpeg',
  },
];

function Tools() {
  return (
    <div className='container flex justify-center py-14'>
      <div className=' lg:w-2/2  grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:w-2/3'>
        {sections.map((section, index) => (
          <div className='group relative flex cursor-pointer' key={index}>
            <div
              className='h-[272px] w-full bg-cover bg-center '
              style={{ backgroundImage: `url(${section.imageUrl})` }}
            >
              <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2  transform'>
                <div className='flex h-16 w-16 items-center   justify-center rounded-full  border border-primary bg-white'>
                  <FaTrafficLight size={40} className='text-primary' />
                </div>
              </div>
              <button className='absolute bottom-0 left-0 w-full bg-gray-900 p-4 font-medium text-white opacity-90'>
                {section.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
