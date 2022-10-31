import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactUs from './ContactUs.js'
import { motion } from 'framer-motion'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'



const Contact = () => {
    
    
  return (

    
    <>
    
    <div id='contact' className='relative select-none lg:scale-125 flex justify-center mt-40'>
         <Popover className="static flex justify-center">
      {({ open }) => (
        <><motion.div whileHover={{ scale: 1.2 }}>
          <Popover.Button className={`
                ${open ? '' : 'text-opacity-90'}
                group flex justify-center items-center rounded-md bg-slate-100 border-sky-700 border-solid border-2 px-3 h-8 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            ><span className='text-sky-700 font-bold text-xl'>Contact</span></Popover.Button>
            </motion.div>
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-1"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-1"
              leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute bottom-0 justify-center left-1/2 z-10 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            
              <div className="rounded-lg relative grid justify-center gap-1 bg-blur p-3 bg-gradient-to-b from-sky-700 via-sky-600 to-sky-700">
          
                <ContactUs/>
                </div>
                
                
          </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
    </div>
    </>
  )
}



export default Contact