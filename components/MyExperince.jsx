'use client'

import { montserrat, poppins } from "@/constants";
import { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const MyExperince = () => {
    useEffect(()=>{
        AOS.init();
      },[])
return(
    <div  id='experience' className="bg-[#27167e] mt-0 space-y-1">
    <h2 data-aos="fade-up"  data-aos-delay="70" data-aos-duration="1100" data-aos-easing="ease-in"  className={`headings ${poppins.className}`}>My Experience</h2>
    <h2 data-aos="fade-up"  data-aos-delay="110" data-aos-duration="1300" data-aos-easing="ease-in" className={`w-[86%] m-auto text-lg md:text-xl text-white ${poppins.className} font-medium`}>Web Developer with Diverse Project Experience</h2>
    <p data-aos="fade-up"  data-aos-delay="90" data-aos-duration="1200" data-aos-easing="ease-in" className={`myExperiencePara ${montserrat.className}`}>I am a highly motivated and skilled web developer with hands-on experience in creating diverse web applications. I have successfully built projects including an Indeed clone, Inventory Shop, Translator, and AI Summarizer. My expertise spans HTML, CSS, JavaScript, MongoDB, Next.js, React.js, and Tailwind CSS.</p>
    <p data-aos="fade-up"  data-aos-delay="90" data-aos-duration="1200" data-aos-easing="ease-in" className={`myExperiencePara ${montserrat.className}`}>In the Indeed clone, I implemented advanced search features and intuitive interfaces. For the Inventory Shop, I developed a robust inventory management system using MongoDB. Additionally, I explored language processing and AI technologies in projects like the Translator and AI Summarizer.</p>
    <p data-aos="fade-up"  data-aos-delay="90" data-aos-duration="1200" data-aos-easing="ease-in" className={`myExperiencePara ${montserrat.className}`}>Proficient in Next.js and React.js, I craft dynamic and responsive web applications. I also excel in Tailwind CSS for creating visually appealing interfaces. With a passion for continuous learning and problem-solving, I am dedicated to delivering exceptional web experiences and contributing to innovative projects.</p>
    </div>
  )
}

export default MyExperince