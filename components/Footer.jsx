import { socialPlatforms } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-[100vw]  mt-5 flex flex-col md:flex-row items-center justify-center md:justify-between md:px-10 px-2">
      <div className='flex items-center flex-col md:flex-row space-x-3 justify-center '>
        <Link href={'/'} className="flex items-center space-x-4">
        <Image src={'/profile.png'} width={38} height={38} alt='profile..' className='h-10 w-10 object-contain rounded-full' />
        <p className="font-bold text-lg text-yellow-400 font-Montserrat">Khalid&apos;s portfolio</p>
        </Link>
        <div className="border-2 border-l h-12 border-white hidden md:block"/>
        <p className='text-white text-sm'>Copyright &copy; 2023 KhalidKakar.com.</p>
      </div>
      <div className="flex items-center space-x-4">
      {
              socialPlatforms.map((item) => (
                <Link key={item.icon} href={item.link} target='_blank' className="font-bold text-[1rem]"><Image src={item.icon} width={20} height={20} alt='Menu' className="h-6 w-6" /></Link>
              ))
            }
      </div>
    </footer>
  )
}

export default Footer