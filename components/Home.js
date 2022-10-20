import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import {Link} from 'react-scroll/modules'

const Home = () => {
    
  return (
    <div id='home'className='lg:scale-125 lg:p-20 grid justify-center sm:flex pt-10 sm:justify-around lg:justify-evenly mt-10'>
        <div>
        <h2 className='text-4xl font-bold mb-3'>Hi,</h2>
        <h2 className='text-4xl font-bold mb-3'>I'm <span className='text-sky-700'>Ben</span></h2>
        <h2 className='text-4xl font-bold mb-3'>Software Engineer</h2>
        <div className='flex mt-2 '>
            <button className='w-20  h-8 bg-sky-700 self-center rounded-lg text-sm text-slate-200'><Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link></button>
            <button className='w-40 h-8 bg-sky-700 ml-2 self-center rounded-lg text-sm text-slate-200'><a target="_blank" href='https://drive.google.com/file/d/14fm8qSMMorGMkS6lBD3ANq6H9osy9BwJ/view?usp=sharing' download='BenBakerSoftwareEngineer.pdf'>Download Resume</a></button>
        </div>
        
        
            <div className='flex justify-between w-20 mt-6'>
                <a target="_blank" className='text-xl text-sky-700 hover: text-sky-600'href='https://www.linkedin.com/in/ben-baker-software/'><FontAwesomeIcon icon={faLinkedin}/></a>
                <a target="_blank" className='text-xl text-sky-700 hover: text-sky-600'href='https://github.com/bbakercello'><FontAwesomeIcon icon={faGithub}/></a>
            </div>
            </div>
        <div>
        <img src='https://i.imgur.com/fve5JWA.png' alt='Profile Photo' className='invisible w-1 sm:visible sm:w-60'></img>
        </div>
    </div>
  )
}

export default Home