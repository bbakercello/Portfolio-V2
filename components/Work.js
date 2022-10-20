import React from 'react'
import Link from 'next/link'

const work = [
    {name: 'Body Bell Records',
     href:'https://body-bell-frontend.vercel.app/',
    background: 'https://i.imgur.com/cvn2bec.png'},
     {name: 'Anonimusic',
     href:'https://vocal-daffodil-44e825.netlify.app/',
    background: 'https://i.imgur.com/mMkPoQ3.jpg'},
     {name: 'LandPost',
     href:'https://landpost.herokuapp.com/blog',
    background: 'https://i.imgur.com/NpRstnS.jpg'}
]

const Work = () => {
    return(
        
        <div className='lg:scale-125 lg:p-20 mt-20 flex-col justify-center'>
            <h6 id='work' className='text-sky-700 flex justify-center text-2xl  underline font-bold mb-10'>Work</h6>
        <ul className='md:flex  md:justify-around sm:grid sm:justify-around lg-justify-evenly'>
            
    {work.map((work,index) =>  {
        return(
                <div className='flex p-3 justify-center sm:p-3'key={index}>
                    <a className='ease-in duration-300 rounded-lg grid justify-items-stretch hover:border-solid hover:border-2 border-sky-700 hover:text-lg hover:font-bold w-40 hover:w-60 hover:bg-slate-100 hover:shadow-lg' href={work.href} target="_blank" >
                    <h6 className='font-bold font-italic justify-self-center'>{work.name}</h6>
                    <img className='' src={work.background} alt='background'></img>
                    </a>
                </div>
        )
    })}</ul>
    </div>
    
    )
}

export default Work