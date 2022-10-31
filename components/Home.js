import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import {Link} from 'react-scroll/modules'
import {motion} from 'framer-motion'
import { useTime } from "framer-motion"
import { useTransform } from 'framer-motion';
const Home = ({isVisible}) => {


  const time = useTime()
  const rotate = useTransform(
  time,
  [0, 100000], // For every 4 seconds...
  [0, 360], // ...rotate 360deg
  { clamp: false }
)
    
  return (
    
    <div id='home'className='lg:scale-125 lg:pt-20 sm:flex pt-12 sm:justify-around lg:justify-evenly mt-10'>
        <div className='grid justify-center '>
        <h2 className='select-none text-4xl font-bold mb-3'>Hi,</h2>
        <h2 className='select-none text-4xl font-bold mb-3'>I'm 
        <span className='select-none text-sky-700'> Ben</span>
        </h2>
        <h2 className='select-none text-4xl font-bold mb-3'>Software Engineer</h2>

        <div className='flex mt-2 '>
            <div className='relative mr-4'>
              <div className='absolute inset-0 bg-sky-700 blur rounded-lg'></div>
              <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}><button className='relative w-20  h-8 bg-sky-700 self-center rounded-lg text-sm text-slate-200'><Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link></button></motion.div>
            </div>

            <div className='relative'>
            <div className='absolute inset-0 bg-sky-700 blur rounded-lg'></div>
            <motion.div whileTap={{ scale: 0.8 }}  whileHover={{ scale: 1.2}}><button className='relative w-40 h-8 bg-sky-700 ml-2 self-center rounded-lg text-sm text-slate-200'><a target="_blank" href='https://drive.google.com/file/d/14fm8qSMMorGMkS6lBD3ANq6H9osy9BwJ/view?usp=sharing' download='BenBakerSoftwareEngineer.pdf'>Download Resume</a></button></motion.div>
            </div>
        </div>
        
        
            <div className='flex justify-between w-20 mt-6'>
              <a target="_blank" className='text-xl text-sky-700'href='https://www.linkedin.com/in/ben-baker-software/'><motion.div whileHover={{ scale: 1.2 }}><FontAwesomeIcon icon={faLinkedin}/></motion.div></a>
              <a target="_blank" className='text-xl text-sky-700'href='https://github.com/bbakercello  '><motion.div whileHover={{ scale: 1.2 }}><FontAwesomeIcon icon={faGithub}/></motion.div></a>
            </div>
            </div>
            
        <div className='h-1 sm:h-auto invisible w-0 sm:w-auto sm:visible'>
       
        <div className='relative invisible sm:visible'>
        
            <div className='absolute inset-0 scale-150 rotate-180 invisible sm:visible'>
            <motion.div
              style={{ rotate }}
              animate={{ x: [1, 4, 0], }} 
              whileHover={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: 1, right: 1 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            >
            <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg"  >
	              <path fill="#0369a1" d="M427,284.5Q439,329,396,347Q353,365,324.5,388.5Q296,412,258,419.5Q220,427,177.5,424.5Q135,422,90.5,401.5Q46,381,50,330Q54,279,60,241Q66,203,81.5,169.5Q97,136,111,88Q125,40,172.5,44Q220,48,258.5,56.5Q297,65,341,72Q385,79,400.5,120.5Q416,162,415.5,201Q415,240,427,284.5Z" />
            </svg>
            </motion.div>
            </div>
    
          <img src='https://i.imgur.com/fve5JWA.png' alt='Profile Photo' className='select-none relative invisible sm:visible sm:w-60'></img>
          </div> 
        </div>
       
    </div>
  )
}

export default Home