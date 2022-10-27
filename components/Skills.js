import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/fontawesome-free-brands';
import { faCss3 } from '@fortawesome/fontawesome-free-brands';
import { faJs } from '@fortawesome/fontawesome-free-brands';
import { faPython } from '@fortawesome/fontawesome-free-brands';
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs } from '@fortawesome/fontawesome-free-brands';
import { faGithubSquare} from '@fortawesome/fontawesome-free-brands';
import { faReact } from '@fortawesome/fontawesome-free-brands';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

const skills = [
    {name: 'JAVASCRIPT',
     icon: faJs},
    {name: 'PYTHON',
     icon: faPython},
     {name: 'NODEJS',
     icon: faNodeJs},
     {name: 'REACT',
     icon: faReact},
     {name: 'NEXTJS',
     icon: faJs},
     {name: 'DJANGO',
     icon: faTable},
     {name: 'POSTGRESQL',
     icon: faCalendarWeek},
     {name: 'MONGODB',
     icon: faDatabase},
     {name: 'TAILWINDCSS',
     icon: faWind},
     {name: 'GIT',
     icon: faGithubSquare},
     {name: 'HTML5',
     icon: faHtml5},
     {name: 'CSS',
     icon: faCss3},  
]

const Skills = () => {
  return (
    
    <div className='dark:bg-gray-800 lg:scale-125 lg:p-20 mt-20'id='skills'>
        <div className='text-sky-700 flex justify-center text-2xl  underline'>
        <h4 className='font-bold'>Skills</h4>
        </div>
        <div className='grid  justify-center md:flex md:justify-around lg-justify-evenly mt-10'>
            <div className=''>
                <h6 className='font-bold self-center'>Professional Skills</h6>
            <ul className=''>
                {skills.map((skills,index) =>  {
                    return(
                        <li key ={index} className='m-2 rounded-lg h-8 flex justify-left pl-3 border-solid border-2 border-sky-700 bg-slate-100 shadow-lg w-80'>
                            <div>
                                <span className='text-sky-700'> <FontAwesomeIcon icon={skills.icon}/></span> 
                                <span className='pl-2 text-xs font-bold'> {skills.name}</span>
                            </div>
                        </li>
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