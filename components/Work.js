import React from 'react'
import Link from 'next/link'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Work = (props) => {
    
    const work = [
        {name: 'Body Bell Records',
         href:'https://body-bell-frontend.vercel.app/',
         description: 'Anonymous audio forum built', 
         background: 'https://i.imgur.com/cvn2bec.png',
        tech: []},
         {name: 'Anonimusic',
         href:'https://vocal-daffodil-44e825.netlify.app/',
         description: 'Anonymous audio forum built',
         tech: ['placeholder'],
        background: 'https://i.imgur.com/mMkPoQ3.jpg'},
         {name: 'LandPost',
         href:'https://landpost.herokuapp.com/blog',
         description: 'Anonymous audio forum built',
         tech: [],
        background: 'https://i.imgur.com/NpRstnS.jpg'}
    ]

    return(
        
        <div className='lg:scale-125 lg:p-20 mt-20 flex-col justify-center'>
            <h6 id='work' className='select-none text-sky-700 flex justify-center text-2xl  underline font-bold mb-10'>Work</h6>
        <ul className='md:flex  md:justify-around sm:grid sm:justify-around lg-justify-evenly'>
            
    {work.map((work,index) =>  {
        return(
                <div className='flex p-3 grid justify-center sm:p-3'key={index}>
                    <motion.div whileHover={{ scale: 1.2 }}>
                    <a className='ease-in duration-300 rounded-lg grid justify-items-stretch border-sky-700 w-40  hover:shadow-lg mb-6' href={work.href} target="_blank" >
                    <h6 className='font-bold font-italic justify-self-center pb-10 h-6'>{work.name}</h6>
                    <img className=' scale-125 mb-4 shadow-lg rounded-lg' src={work.background} alt='background'></img>
                    
                    </a>
                    
                    </motion.div>
                    <Popover className="relative static flex justify-center">
      {({ open }) => (
        <>
          <Popover.Button className={`
                ${open ? '' : 'text-opacity-90'}
                group flex justify-center items-center rounded-md bg-sky-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            ><span>Learn</span></Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute bottom-0 justify-center left-1/2 z-10 mt-3 w-60 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                </div>
                
                </div>
          </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
                </div>
         )
    })}</ul>
    </div>
    
    )
}

export default Work