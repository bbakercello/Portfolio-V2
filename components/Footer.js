import React from 'react'

const Footer = () => {
    let mydate = new Date();
    let year = mydate.getFullYear();



  return (
    <div className='select-none bg-sky-700 rounded-t-lg'>
    <h6 className='flex justify-center text-sm text-sky-100 font-bold mt-8 pt-5 pb-1'>Ben Baker</h6>
    <h6 className='flex justify-center text-sm text-sky-100 pb-4'>{year}</h6>
    </div>
  )
}

export default Footer