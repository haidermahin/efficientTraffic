import Link from 'next/link';
import React from 'react';
import Search from './Search';
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import MenuApp from './Menu';
import Image from 'next/image';
function Header() {
  return (
    <div className='bg-primary'>
      <div className='container flex h-full flex-row items-center justify-between bg-primary'>
        {/* Left side */}

        <Image
          src='/images/png/logo.png'
          alt='Logo'
          width={297}
          height={121}
          className='h-16 w-32 md:h-[121px] md:w-[297px]'
        />
        {/* Right side */}
        <div className='flex h-full flex-1 flex-col items-end justify-between gap-4 md:h-[121px] md:py-2 '>
          {/* Social Icons */}
          <div className='flex items-center gap-3'>
            <FaXTwitter className='cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-300' />
            <FaFacebook className='cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500' />
            <FaLinkedin className='cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-800' />
          </div>
          {/* Links */}
          <div className='flex items-center justify-end gap-2 text-sm font-medium uppercase sm:gap-3'>
            <Link
              className='transition-all duration-300 ease-in-out hover:text-gray-500'
              href={'/contact'}
              title='Contact'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className='border-2 border-t border-gray-900' />
      <MenuApp />
    </div>
  );
}

export default Header;
