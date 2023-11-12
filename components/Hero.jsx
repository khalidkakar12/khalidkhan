'use client'
import Image from 'next/image'
import Link from 'next/link';
import '../app/globals.css'
import { montserrat, titilliumweb } from '@/constants';


const Hero = () => {

  return (
    <section className="flex flex-col mt-[3rem] md:mt[4rem]  justify-center items-center h-[100vh]">
      <div className='border-4 border-blue-800 shadow-[0_0_50px_15px_#48abe0] p-2 rounded-full'>
        <Image src={'/profile.jpg'} width={60} height={60} alt="profile" className="h-[15rem] w-[15rem] rounded-full" />
      </div>
      <div className="texture mt-1">
        <p className={`md:text-lg text-sm  ${montserrat.className} font-light text-white text-center`}>
          Hi, I&apos;m
        </p>
        <h1 className={`md:text-5xl  text-3xl ${titilliumweb.className} font-extrabold text-white text-center`}>Khalid Khan Kakar</h1>
        <p className={`md:text-xl w-[70%] m-auto text-lg ${montserrat.className}  text-white text-center`}>
         Empowering digital experiences with modern prowess, I am Khalid Kakar—a skillful and passionate full-stack web developer harnessing the latest technologies 🔥
        </p>
        <div className="flex justify-center items-center space-x-3 mt-2">

        <Link href={'#contact'} className={`gradientButton py-2 px-3 rounded-lg text-white text-lg ${montserrat.className} font-semibold`}>Contact Me</Link>
        {/* <button type='button' className="gradientButton py-2 px-3 rounded-lg text-white text-lg font-Montserrat font-semibold">Preview CV</button> */}


        </div>
        <div>
          <Link href={'#about'}><Image src={'/Arrowdown.svg'} width={20} height={20} alt='Arrowdown' className="element h-16 w-16 m-auto"/></Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
