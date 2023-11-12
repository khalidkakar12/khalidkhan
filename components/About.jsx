'use client'
import { montserrat, poppins } from '@/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div  id='about' className={`bg-[#27167e] mt-0 space-y-1 ${montserrat.className}`}>
      <h2 data-aos="fade-up"  data-aos-delay="70" data-aos-duration="1100" data-aos-easing="ease-in"  className="headings">About Me</h2>
      <p data-aos="fade-up"  data-aos-delay="90" data-aos-duration="1200" data-aos-easing="ease-in" className="w-[86%] m-auto text-sm md:text-lg text-[#c4bebe] ">My name is khalid kakar. Embark on a journey through the digital cosmos with Khalid Kakar, a Full Stack Developer who weaves magic into every line of code. Khalid is your tech virtuoso, armed with an arsenal of skills that transcend the ordinary and bring your visions to life.</p>
      <h2 data-aos="fade-up"  data-aos-delay="110" data-aos-duration="1300" data-aos-easing="ease-in" className={`w-[86%] m-auto text-lg md:text-xl text-white ${poppins.className} font-medium`}>🚀 Your Vision, Khalid&apos;s Code 🚀</h2>
      <p data-aos="fade-up"  data-aos-delay="120" data-aos-duration="1400" data-aos-easing="ease-in-out" className="w-[86%] m-auto text-sm md:text-lg text-[#c4bebe] ">In Khalid&apos;s world, your vision is paramount. He breathes life into your ideas, transforming them into digital masterpieces. His code is the bridge between your imagination and reality, delivering results that astonish.</p>
    </div>
  )
}

export default About