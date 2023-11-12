'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
import ProjectCard from './ProjectCard'
import { poppins, projectDetails } from '@/constants'

const Projects = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div id="projects">
      <h1 className={`headings ${poppins.className}`}>My Projects</h1>
    <p data-aos="fade-up"  data-aos-delay="90" data-aos-duration="1200" data-aos-easing="ease-in" className="w-[86%] m-auto font-Montserrat text-sm md:text-lg text-[#c4bebe]">Delve into my expertise showcased in a curated selection of projects, each embodying my adept problem-solving, diverse technological proficiency, and efficient project management. From conquering complex challenges to seamlessly navigating various technologies, these projects demonstrate my ability to transform ideas into tangible solutions. Dive in and witness the culmination of my skills, evident in every line of code and live demo, providing a glimpse into my problem-solving prowess and effective project execution.</p>

      <section className="text-gray-600  w-[80%] m-auto">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
{
    projectDetails.map((project)=>(
        <ProjectCard  key={project.projectName} project={project}/>

    ))
}
          </div>
          </div>
          </section>
    
    </div>
  )
}

export default Projects