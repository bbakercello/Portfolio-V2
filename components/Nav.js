import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
        <ul className='grid grid-cols-12 pt-2 pb-2 text-xs gap-x-4'>
            <li className='p-3 pl-3 col-start-2 place-self-start col-span-1 '>Ben</li>
            <li className='p-3 col-start-7 col-span-1 place-self-start'>Home</li>
            <li className='p-3 col-start-8 col-span-1 place-self-start'>About</li>
            <li className='p-3 col-start-9 col-span-1 place-self-start'>Skills</li>
            <li className='p-3 col-start-10 col-span-1 place-self-start'>Work</li>
            <li className='p-3 col-start-11 col-span-1 place-self-start'>Contact</li>
        </ul>
    </div>
   
  )
}

export default Nav