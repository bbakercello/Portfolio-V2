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
        <div className=' mt-20 flex-col justify-center'>
            <h6 className='text-sky-700 flex justify-center text-2xl  underline font-bold mb-10'>Work</h6>
        <ul className='flex justify-around'>
            
    {work.map((work,index) =>  {
        return(
                <div>
                    <a className='grid justify-items-stretch border-solid border-2 border-sky-700 w-40' href={work.href}>
                    <h6 className='justify-self-center'>{work.name}</h6>
                    <img clasName='' src={work.background} alt='background'></img>
                    </a>
                </div>
        )
    })}</ul>
    </div>
    )
}

export default Work