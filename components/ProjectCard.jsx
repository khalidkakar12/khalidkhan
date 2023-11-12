'use client'
import Link from 'next/link'
import '../app/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
import Image from 'next/image';
import { montserrat, titilliumweb } from '@/constants';

const ProjectCard = ({project}) => {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="wrapper p-4 md:w-1/2 w-full " data-aos={'flip-up'} data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out ">
    <div className="card cursor-pointer">
        <Image src="/bgSvg1.svg" height={200} width={100} className="h-full w-full absolute top-0 left-0 object-cover rounded-lg"  alt="Mountain" />
        <div className="info">
            <h1 className={`${titilliumweb.className}  tracking-[3px] text-2xl text-yellow-400 font-bold `}>{project.projectName}</h1>
            <p className={montserrat.className}>{project.projectDetail}</p>
            <p className='text-sm text-red-500 '>{project.message}</p>
            <div className="flex items-center space-x-2 mt-1">
            <Link  href={project.githubLink} target='_blank' className={`gradientButton py-2 px-4 rounded-md ${montserrat.className} hover:font-bold`}>Code</Link>
            <Link href={project.liveLink} target='_blank' className={`gradientButton py-2 px-4 rounded-md ${montserrat.className} hover:font-bold`}>Preview</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProjectCard