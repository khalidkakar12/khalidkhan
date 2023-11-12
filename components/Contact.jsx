'use client'
import AOS from 'aos';
import 'react-notifications/lib/notifications.css';
import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Image from 'next/image';
import { montserrat } from '@/constants';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading]= useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_215gvng',
'template_b9bmsme',
        {
          from_name: formData.name,
          to_name: "Khalid kakar",
          from_email: formData.email,
          to_email: "khalidkhankakar2468@gmail.com",
          message: formData.message,
        },
        'Cy-ED48cih6CwC7s0'
      )
      .then(
        () => {
          setLoading(false);
          NotificationManager.success('Thanks for contact👍🏻 I will get back to you as soon as possible.', 'Message sent successfully');

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          NotificationManager.success(`Oops!, something went wrong. Please try again.', 'Message isn't sent successfully`);
          alert("");
        }
      );
  };


  const handleChange = (e)=>{
    const {value, name}= e.target;
    setFormData({...formData, [name]:value})
  }

  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div id="contact"  className="bg-[url('/bgSvg3.svg')]  z-10 bg-cover bg-center">
      <h2 className="headings py-3 ">Contact Me</h2>
      <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className='px-4 py-7 glassmorphism w-[80vw] m-auto rounded-lg'>
        <p className="mb-3  text-sm font-Montserrat text-white ">Get in touch</p>
        <form ref={formRef} onSubmit={handleSubmit} action="#" className="w-full ">
          <div>
            <div className="flex flex-col mb-3">
              <label htmlFor="name" className={`text-white  font-bold ${montserrat.className}`}>Your name</label>
              <input
                type="text" id="name" name='name'
                className={`px-3 py-2  border InputGlassmorphism border-none ${montserrat.className} rounded-lg text-white  focus:outline-none focus:InputGlassmorphism placeholder:text-gray-500`}
                placeholder='Write your name...'
                value={formData.name}
                onChange={handleChange}
                required
              /
              >
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email" className='text-white font-Montserrat font-bold'>Your email</label>
              <input
                type="email" id="email" name='email'
                className={`px-3 py-2  border InputGlassmorphism border-none ${montserrat.className} rounded-lg text-white  focus:outline-none focus:InputGlassmorphism placeholder:text-gray-500`}
                placeholder='Write your email...'
                value={formData.email}
                onChange={handleChange}
                required
                /
              >
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="message" className='text-white font-Montserrat font-bold'>Message</label>
              <textarea
                rows="4" id="message" name='message'
                className={`px-3 py-2  border InputGlassmorphism border-none ${montserrat.className}  rounded-lg text-white  focus:outline-none focus:InputGlassmorphism placeholder:text-gray-500`}
                placeholder='What do you want to say...'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className={`gradientButton hover:font-bold w-full ${loading?'py-0': 'py-2'} font-Montserrat text-white rounded-lg`}>{loading?<Image src='/loading.svg' className='m-auto ' width={50} height={10} alt={"loading.."}/> : 'Send'}</button>
        </form>

      </div>
      <NotificationContainer/>
    </div>
  )
}

export default Contact