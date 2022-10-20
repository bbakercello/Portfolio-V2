import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/fontawesome-free-brands';
import { faCss3 } from '@fortawesome/fontawesome-free-brands';
import { faJs } from '@fortawesome/fontawesome-free-brands';
import { faPython } from '@fortawesome/fontawesome-free-brands';
import { faTailwind } from '@fortawesome/fontawesome-free-brands';
import { faMongodb } from '@fortawesome/fontawesome-free-brands';
import { faNodeJs } from '@fortawesome/fontawesome-free-brands';
import { faGithubSquare} from '@fortawesome/fontawesome-free-brands';
import { faReact } from '@fortawesome/fontawesome-free-brands';
import { faNextjs } from '@fortawesome/fontawesome-free-brands';
import { faDjango } from '@fortawesome/fontawesome-free-brands';
import { faPostgresql } from '@fortawesome/fontawesome-free-brands';

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
     icon: faNextjs},
     {name: 'DJANGO',
     icon: faDjango},
     {name: 'POSTGRESQL',
     icon: faPostgresql},
     {name: 'MONGODB',
     icon: faMongodb},
     {name: 'TAILWINDCSS',
     icon: faTailwind},
     {name: 'GIT',
     icon: faGithubSquare},
     {name: 'HTML5',
     icon: faHtml5},
     {name: 'CSS',
     icon: faCss3},  
]

const Skills = () => {
  return (
    <div className='mt-20'>
        <div className='text-sky-700 flex justify-center text-2xl  underline'>
        <h4 className='font-bold'>Skills</h4>
        </div>
        <div className='flex justify-around mt-10'>
            <div className=''>
                <h6 className='font-bold'>Professional Skills</h6>
            <ul>
                {skills.map((skills,index) =>  {
                    return(
                        <li className='m-2 rounded-lg h-8 flex justify-left pl-3 border-solid border-2 border-sky-700 bg-slate-100 shadow-lg w-80'>
                            <div>
                                <span className='text-sky-700'> <FontAwesomeIcon icon={skills.icon}/></span> 
                                <span className='pl-2 text-xs font-bold'> {skills.name}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className='flex flex-col justify-center'><img src='https://i.imgur.com/KlUfw1D.jpg' alt='picture' className='w-80 rounded-lg grayscale-[50%]'></img></div>
        </div>
     </div>

  )
}

export default Skills