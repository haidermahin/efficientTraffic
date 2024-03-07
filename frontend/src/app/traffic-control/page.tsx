import Banner from '@components/Banner';
import Loader from '@components/Loader';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner
        imgsrc='/images/jpeg/photo-1535015585980-7cb6b4de8f14.jpeg'
        heading='Traffic Packages (TTMP)'
      />
      <div className='min-h-screen bg-gray-100 font-sans'>
        {/* Header */}
        <header className='bg-blue-500 py-4 text-white'>
          <div className='container mx-auto'>
            <h1 className='text-3xl font-semibold'>Traffic Control System</h1>
            <p className='text-sm'>
              Ensuring Safe and Efficient Traffic Management
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className='container mx-auto py-8'>
          {/* Features Section */}
          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold'>Key Features</h2>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {/* Feature 1 */}
              <div className='rounded-md bg-white p-6 shadow-lg'>
                <h3 className='mb-2 text-xl font-semibold'>Traffic Counts</h3>
                <p>
                  Record pre-construction traffic counts for all movements
                  including bicycle and pedestrians for AM/PM peak amd Off peak
                  to optimize the temporary conditions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className='rounded-md bg-white p-6 shadow-lg'>
                <h3 className='mb-2 text-xl font-semibold'>
                  Industry standard TTMP&apos;s
                </h3>
                <p>
                  Our comprehensive Packages include full sub plans such as
                  construction access Management, site restoration plan , full
                  pedestrian Management plans as well as custom plans.
                </p>
              </div>

              {/* Feature 3 */}
              <div className='rounded-md bg-white p-6 shadow-lg'>
                <h3 className='mb-2 text-xl font-semibold'>
                  Traffic impact analysis
                </h3>
                <p>
                  Elevate your projects with our Traffic Impact Analysis to
                  ensure streamlined and optimized traffic solutions with
                  minimal impact.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold'>
              {' '}
              Using out TTM&apos;s :
            </h2>
            <ul className='list-disc pl-6'>
              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  E
                </span>
                fficiently manage pedestrians and bicyclists
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  F
                </span>
                ully integrated solutions for your traffic Management lands
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  F
                </span>
                ine tuned scenario based solutions
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  I
                </span>
                ntelligently managed traffic signals
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  C
                </span>
                ompletely optimized signal timing
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  I
                </span>
                nnovative real-time traffic monitoring and adaptation
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  E
                </span>
                ffortless integration of work zone and live traffic
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  N
                </span>
                o compromises on project delivery and public safety
              </li>

              <li>
                <span
                  style={{
                    color: 'darkorange',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                  }}
                >
                  T
                </span>
                ailored solutions for your project scope
              </li>
            </ul>
          </section>

          {/* About Section */}
          <section className='mb-12'>
            <h2 className='mb-4 text-2xl font-semibold'>About Our System</h2>
            <p>
              Our traffic control system is designed to provide a comprehensive
              solution for managing and optimizing traffic in urban areas. With
              advanced features and smart algorithms, we aim to create safer and
              more efficient roadways.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className='mb-4 text-2xl font-semibold'>Contact Us</h2>
            <p>
              For inquiries or to learn more about our traffic control system,
              please reach out to us to book an appointment with our traffic
              engineers - The Subject Matter Experts!!!{' '}
              <a
                href='mailto:info@trafficcontrol.com'
                className='text-blue-500'
              >
                info@trafficcontrol.com
              </a>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
