'use client'
import React from 'react'
import Card from './Card'
import { montserrat, poppins, technologies } from '@/constants'
import { Nested } from '@alptugidin/react-circular-progress-bar';

const Myskills = () => {
  return (
    <div>
      <h1 className={`headings ${poppins.className}`}>My skills</h1>
      <section className={`text-gray-600 ${montserrat.className} w-[80%] m-auto`}>
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              technologies.map((item,index) => (
                <Card key={item.name} item={item} index={index}/>
              ))
            }
            <div className='p-4  md:w-1/3 w-full'>
              <div className="w-full p-2 bg-blue-500/20  border-[3px] border-gray-200 rounded-lg shadow">
                <Nested
                  circles={[
                    { text: 'Javascript', value: 83, color: '#e60ed0' },
                    { text: 'NextJs', value: 80, color: '#0ea5e9' },
                    { text: 'ReactJs', value: 85, color: '#27f207' },
                    { text: 'MongoDB', value: 73, color: '#f70c0c' },
                    { text: 'TailwindCSS', value: 75, color: '#fac60a' }
                  ]}
                  sx={{
                    bgColor: '#cbd5e1',
                    barWidth: 3,
                    textColor: '#ffffff'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Myskills