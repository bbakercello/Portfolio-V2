import React from 'react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactUs from './ContactUs.js'


const Contact = () => {
    
    
  return (
    <div className='flex justify-center'>
         <Popover className='pb-10 mt-20 flex-col'>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button className='w-40 text-sky-700 flex justify-center text-xl  underline font-bold'>
            Contact Me  
            <FontAwesomeIcon icon={faEnvelope} className={open ? 'rotate-180 transform' : ' '} />
          </Popover.Button>
          <Popover.Panel>
            
          </Popover.Panel>
        </>
      )}
    </Popover>
    <ContactUs/>
    </div>
  )
}

export default Contact