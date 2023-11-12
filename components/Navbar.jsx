'use client'
import { montserrat, navLinks, socialPlatforms } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={`m-auto w-[80%] ${montserrat.className} mt-3  absolute top-2 right-[10%]`}>
      {/* Mobile navigation */}
      <nav className={`glassmorphism border border-white  rounded-md text-white flex flex-col space-y-2 py-2 px-3 md:hidden `}>
        <div className="flex items-center justify-between ">
          <p className="font-bold text-lg">Khalid&apos;s portfolio</p>
          <button onClick={toggleNavbar} className="font-bold text-lg">{isOpen ? <Image src={'/Close.svg'} width={20} height={20} alt='Menu' className="h-7 w-7" /> : <Image src={'/Menu.svg'} width={20} height={20} alt='Menu' className="h-7 w-7" />} </button>
        </div>

        <div className={`transition ease-out duration-1000 ${isOpen ? 'flex translate-y-1' : 'hidden'} flex-col space-y-3 items-center `}>
          <Link href={'#'} className="font-bold text-[1rem] hover:bg-gray-800/20 w-full text-center">Home</Link>
          <Link href={'#about'} className="font-bold text-[1rem] hover:bg-gray-800/20 w-full text-center">About</Link>
          <Link href={'#contact'} className="font-bold text-[1rem] hover:bg-gray-800/20 w-full text-center">Contact me</Link>
          <Link href={'#projects'} className="font-bold text-[1rem] hover:bg-gray-800/20 w-full text-center">Projects</Link>
          {/* <div className="flex items-center space-x-2" >
          <button type='button' className="gradientButton py-1 rounded-lg px-3 hover:font-semibold" >SignUp</button>
          <button type='button' className="gradientButton py-1 rounded-lg px-3 hover:font-semibold" >LogIn</button>
        </div> */}
          <div className="flex items-center justify-center space-x-4">

            {
              socialPlatforms.map((item) => (
                <Link key={item.icon} href={item.link} target='_blank' className="font-bold text-[1rem]s"><Image src={item.icon} width={20} height={20} alt='Menu' className="w-7" /></Link>
              ))
            }

          </div>

        </div>
      </nav>

      <nav className="hidden glassmorphism border border-white  rounded-md text-white md:flex items-center justify-between py-2 px-3 ">
        <div className="flex items-center md:space-x-2 lg:space-x-3">
          <p className="font-bold md:mx-1 text-yellow-300 lg:mx-2 text-lg">Khalid&apos;s portfolio</p>

        </div>
        <div className="flex items-center space-x-6" >
          {/* <button type='button' className="gradientButton py-1 rounded-lg px-3 hover:font-semibold" >SignUp</button>
          <button type='button' className="gradientButton py-1 rounded-lg px-3 hover:font-semibold" >LogIn</button> */}
          {
            navLinks.map((link) => (
              <Link key={link.tag} href={link.link} className="text-[1rem]  hover:font-semibold">{link.tag}</Link>
            ))
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
