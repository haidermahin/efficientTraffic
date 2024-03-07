import Banner from '@components/Banner';
import ContactUsForm from './_componenets/contact-us';
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import Link from 'next/link';

const ContactForm: React.FC = () => {
  return (
    // <>
    //   <Banner heading='Contact Us' imgsrc='/images/jpeg/phone.jpg' />
    //   <div className='mx-auto my-20 flex max-w-xl flex-col items-center justify-center rounded border border-gray-100 bg-white shadow'>
    //     <h1 className='p-5 text-center text-3xl font-bold'>Get in Touch</h1>
    //     <p className='mb-10 w-4/5 text-center text-sm text-gray-600'>
    //       We&apos;d love to hear from you! Whether you have a question,
    //       suggestion, or just want to say hello, feel free to drop us a message
    //       using the form below.
    //     </p>
    //     <ContactUsForm />
    //   </div>
    // </>
    <section className='py-10 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:items-stretch lg:gap-x-20'>
          <div className='flex flex-col justify-center lg:py-5'>
            <div>
              <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight'>
                Connect with Us
              </h2>
              <p className='mx-auto mt-4 max-w-xl text-base leading-relaxed text-black'>
                Follow us on our social media platforms for the latest updates
                and promotions.
              </p>
              <div className='mt-4 flex gap-2'>
                <Link
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFacebook size={18} />
                </Link>
                <Link
                  href='https://twitter.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaXTwitter size={18} />
                </Link>
                <Link
                  href='https://www.instagram.com//'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagram size={18} />
                </Link>
                <Link
                  href='https://www.youtube.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaYoutube size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className='lg:pl-12'>
            <div className='overflow-hidden rounded-md bg-[#f2f2f2]'>
              <div className='p-6 sm:p-10'>
                <h3 className='text-3xl font-semibold text-black'>
                  Contact Us
                </h3>
                <p className='mt-4 text-base text-gray-600'>
                  We&apos;re Here to Help! Have any questions, comments, or
                  concerns? We&apos;d love to hear from you. Fill out the form
                  below and we&apos;ll get back to you as soon as possible.
                </p>

                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
