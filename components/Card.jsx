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
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    800,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          500,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}



const Card = ({item}) => {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <Tilt options={defaultOptions} className='p-4  md:w-1/3 w-full'>
<div data-aos={'zoom-in'} data-aos-delay="90" data-aos-duration="1500" data-aos-easing="ease-in" className="w-full p-2 bg-blue-500/20  border-[3px] border-gray-200 rounded-lg shadow">
<CircularProgressbarWithChildren strokeWidth={5}   styles={buildStyles({
    rotation: 0.50,
    strokeLinecap: 'round',
    pathTransitionDuration: 2,
    pathColor: `#1fc435`,
    trailColor: '#bafff5',
  })} value={item.skillRate} >
    <div className="flex flex-col items-center  justify-center space-y-1 md:space-x-2">
            <Image src={item.img} width={50} height={50} alt={item.name} className="object-contain" /> 
        <h5 className={`mb-1 text-xl md:text-2xl font-medium text-yellow-400 ${titilliumweb.className} `}>{item.name}</h5>
        <strong className="text-white">{item.skillRate}%</strong>
    </div>
</CircularProgressbarWithChildren>
</div>
</Tilt>
  )
}

export default Card