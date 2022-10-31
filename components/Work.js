import React from 'react'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Work = (props) => {
    
    const work = [
        {name: 'Body Bell Records',
         href:'https://body-bell-frontend.vercel.app/',
         description: 'Indie Electronic Record Label', 
         background: 'https://i.imgur.com/cvn2bec.png',
        tech: 'NextJS, Tailwind, SpotifyAPI, MongoDB, Nodejs',
        git: 'https://github.com/bbakercello/body-bell-frontend',
        creators: 'Ben Baker'},
         
        {name: 'Anonimusic',
         href:'https://vocal-daffodil-44e825.netlify.app/',
         description: 'Anonymous Audio Forum',
         tech: 'MERN, Cloudinary, Audio-Player',
        background: 'https://i.imgur.com/mMkPoQ3.jpg',
        git: 'https://github.com/hspinks2692/anonimusic_frontend',
        creators: 'Harvey Spinks/Tim Rathert/Ben Baker'},
         
        {name: 'LandPost',
         href:'https://landpost.herokuapp.com/blog',
         description: 'Environmental Social Media',
         tech: 'Express, Nodejs, HTML, CSS',
        background: 'https://i.imgur.com/NpRstnS.jpg',
        git: 'https://github.com/bbakercello/Landpost',
        creators: 'David Robles/Victoria Vela/Ben Baker'}
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
        <motion.div whileHover={{ scale: 1.2 }}>
          <Popover.Button className={`
                ${open ? '' : 'text-opacity-90'}
                group flex justify-center items-center rounded-md bg-sky-700 px-3 h-8 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            ><span>Learn</span></Popover.Button>
            </motion.div>
          <Popover.Overlay className="fixed inset-1 bg-gradient-to-b from-slate-100 to-sky-700 opacity-30 blur-sm ronded-full" />
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-1"
              leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute bottom-0 justify-center left-1/2 z-10 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
            
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid justify-center gap-1 bg-white p-3">
                
                <div className='font-bold flex justify-center'>{work.description}</div>
                <span className='work flex justify-center text-sm select-none font-bold'>Technology Used:</span>
                <div className='work text-xs select-none'>{work.tech}</div>
                <div className='work flex justify-center text-sm select-none font-bold'>Team:</div>
                <div className='work text-xs select-none flex justify-center'>{work.creators}</div>
                <div className='work text-sky-700 flex justify-right'>
                    <motion.div className='pr-4'whileHover={{ x: 100, scale: 1.2}}
                                whileTap={{ scale: 0.8 }}
                                style={{ x: 100 }}>
                                    <a href={work.git}><FontAwesomeIcon icon={props.skills[9].icon}/>
                                    </a>
                    </motion.div>
                    <motion.div className=''
                                whileHover={{ x: 100, scale: 1.2}}
                                whileTap={{ scale: 0.8 }}
                                style={{ x: 100 }}>
                                    <a href={work.href}>Open
                                    </a>
                    </motion.div>
                </div>
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