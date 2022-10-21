import React from 'react'

import {Link} from 'react-scroll/modules'
const Nav = () => {
  return (
    <div className='lg:scale-125  fixed z-10 top-0 left-0 right-0 shadow-lg'>
    <div className='nav relative lg:scale-100 text-xs md:text-base flex p-3 justify-around bg-slate-200 rounded-lg h-12'>
        <ul>
            <li className='pt-1'>Ben</li>
        </ul>
        <div className='flex'>
            <button className='pl-4 hover:underline'><Link activeClass='active' to='home' spy={true} smooth={true} offset={50} duration={500}>Home</Link></button>
            <button className='pl-4 hover:underline'><Link activeClass='active' to='about' spy={true} smooth={true} offset={50} duration={500}>About</Link></button>
            <button className='pl-4 hover:underline'><Link activeClass='active' to='skills' spy={true} smooth={true} offset={50} duration={500}>Skills</Link></button>
            <button className='pl-4 hover:underline'><Link activeClass='active' to='work' spy={true} smooth={true} offset={50} duration={500}>Work</Link></button>
            <button className='pl-4 hover:underline'><Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500}>Contact</Link></button>
        </div>
        
    </div>
   <div className='bg-sky-700 h-0.5 rounded-full'></div>
   </div>
  )
}

export default Nav