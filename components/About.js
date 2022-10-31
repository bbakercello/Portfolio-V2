import React from 'react'
import {motion} from 'framer-motion'


const About = () => {
  return (
   
    <div  id='about' className='select-none scale-100 lg:scale-125 lg:p-20 mt-2 sm:mt-20 '>
        
        <div className='text-sky-700 flex justify-around text-2xl  underline'>
            <h4 className='font-bold'>About</h4>
        </div>
        <div className='grid justify-center sm:flex sm:justify-around lg-justify-evenly mt-10'>
            <div className='grid justify-center'>
            <motion.div
              
              whileHover={{ scale: 1.1 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
            >
              <motion.a
  whileFocus={{ scale: 1.2 }}
  href="#"
/>
            <img src='https://i.imgur.com/9diMR92.jpg' alt='Profile' className='w-60 rounded-lg shadow-lg'></img>
            </motion.div>
            </div>
            <div className='w-80'>
                <h6 className='pt-6 font-bold'>Ben Baker</h6>
                <p className='pt-4 text-xs md:text-sm'> I'm a full-stack engineer who loves developing core infrastructures of technological products. I specialize in Javascript technologies (MERN stack - MongoDB, Express JS, React JS, Node JS) to build complete web applications. I develop elegant solutions using open source tools and proactively look for ways to make systems run efficiently. In my free time as a cellist and composer, I write electronic pieces of <a target="_blank" href='https://open.spotify.com/artist/75HkJT1YV8rHpnNV5zMmOj'className='hover:text-sky-700 transition duration-150 ease-out hover:ease-in'>music</a> using modular synthesizers and digital instruments.</p>
            </div>
        </div>
    </div>
    
  )
}

export default About