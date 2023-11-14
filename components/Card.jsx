'use client'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from "next/image"
import { Tilt } from 'react-tilt'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { titilliumweb } from '@/constants';
const defaultOptions = {
	reverse:        false,  
	max:            35,     
	perspective:    800,  
	scale:          1,    
	speed:          500,   
	transition:     true,   
	axis:           null,   
	reset:          true,    
	easing:         "cubic-bezier(.03,.98,.52,.99)",  
}



const Card = ({item}) => {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Tilt options={defaultOptions} className='p-4   md:w-1/3 w-full'>
<div data-aos={'zoom-in'} data-aos-delay="90" data-aos-duration="1500" data-aos-easing="ease-in" className="w-full p-2 bg-blue-500/20  border-[3px] border-gray-200 rounded-lg shadow-[0_0_30px_5px_#3bdbf7]">
<CircularProgressbarWithChildren strokeWidth={5}   styles={buildStyles({
    rotation: 0.50,
    strokeLinecap: 'round',
    pathTransitionDuration: 2,
    pathColor: `#1fc435`,
    trailColor: '#bafff5',
  })} value={item.skillRate} >
    <div className="flex  flex-col items-center  justify-center space-y-1 md:space-x-2">
            <Image src={item.img} width={200} height={200} alt={item.name} className="object-contain lg:h-20 lg:w-20 h-16 w-16 md:h-[4rem] md:w-[4rem] " /> 
        <h5 className={`mb-1 text-xl md:text-2xl font-semibold text-yellow-400 ${titilliumweb.className} `}>{item.name}</h5>
        <strong className="text-white">{item.skillRate}%</strong>
    </div>
</CircularProgressbarWithChildren>
</div>
</Tilt>
  )
}

export default Card
