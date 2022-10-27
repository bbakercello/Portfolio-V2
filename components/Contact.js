import React from 'react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactUs from './ContactUs.js'


const Contact = () => {
    
    
  return (
    
    <div id='contact' className='lg:scale-125 flex justify-center'>
         <Popover className='pb-10 mt-20 flex-col'>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button className='w-40 text-sky-700 flex justify-center text-xl  underline font-bold hover:text-sky-500'>
            Contact 
            <FontAwesomeIcon icon={faEnvelope} className='pl-3 pt-1' />
          </Popover.Button>
          <Popover.Panel>
          <ContactUs/>
          </Popover.Panel>
        </>
      )}
    </Popover>
    
    </div>
    
  )
}

export default Contact