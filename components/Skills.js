import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'


const Skills = (props) => {
  return (
    
    <div className='select-none lg:scale-125 lg:p-20 mt-20'id='skills'>
        <div className='text-sky-700 flex justify-center text-2xl  underline'>
        <h4 className='font-bold'>Skills</h4>
        </div>
        <div className='grid  justify-center md:flex md:justify-around lg-justify-evenly mt-10'>
            <div className=''>
                <h6 className='font-bold self-center'>Professional Skills</h6>
            <ul className=''>
                {props.skills.map((skills,index) =>  {
                    return(
                        <>
                        <motion.div whileHover={{ scale: 1.2 }}>
                        <li key ={index} className='m-2 rounded-lg h-8 flex justify-left pl-3 border-solid border-2 border-sky-700 bg-gradient-to-r from-slate-100 to-late-200 hover:bg-black-100 shadow-lg w-80'>
                            <div>
                                <span className='text-sky-700'> <FontAwesomeIcon icon={skills.icon}/></span> 
                                <span className='pl-2 text-xs font-bold'> {skills.name}</span>
                            </div>
                        </li>
                        </motion.div>
                        </>
                    )
                })}
            </ul>
        </div>
        <div className='flex flex-col justify-center pt-5'><img src='https://i.imgur.com/KlUfw1D.jpg' alt='picture' className='w-80 rounded-lg grayscale-[50%] shadow-lg self-center'></img></div>
        </div>
     </div>
 

  )
}

export default Skills