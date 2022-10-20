import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
const Home = () => {
  return (
    <div className='flex pt-10 justify-around'>
        <div>
        <h2 className='text-4xl font-bold mb-3'>Hi,</h2>
        <h2 className='text-4xl font-bold mb-3'>I'm <span className='text-sky-700'>Ben</span></h2>
        <h2 className='text-4xl font-bold mb-3'>Software Engineer</h2>
        <div className='flex mt-2 '>
            <button className='w-20  h-8 bg-sky-700 self-center rounded-lg text-sm text-slate-200'>Contact</button>
            <button className='w-40 h-8 bg-sky-700 ml-2 self-center rounded-lg text-sm text-slate-200'>Download Resume</button>
        </div>
        
        
            <ul className='flex justify-between w-20 mt-6'>
                <li className=''><FontAwesomeIcon icon={faLinkedin}/></li>
                <li><FontAwesomeIcon icon={faGithub} /></li>
            </ul>
            </div>
        <div>
        <img src='https://i.imgur.com/fve5JWA.png' alt='Profile Photo' className='w-60'></img>
        </div>
    </div>
  )
}

export default Home