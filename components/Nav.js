import React from 'react'

const Nav = () => {
  return (
    <div className='nav text-xs flex p-3 justify-around'>
        <ul className='text-left'>
            <li className=''>Ben</li>
        </ul>
        <div className='flex'>
            <div className='pl-4'>Home</div>
            <div className='pl-4'>About</div>
            <div className='pl-4'>Skills</div>
            <div className='pl-4'>Work</div>
            <div className='pl-4'>Contact</div>
        </div>
    </div>
   
  )
}

export default Nav