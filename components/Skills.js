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


const Skills = () => {
  return (
    <div className='mt-20'>
        <div className='text-teal-700 flex justify-center text-2xl  underline'>
        <h4 className='font-bold'>Skills</h4>
        </div>
        <div className='flex justify-around mt-10'>
            <div>
                <h6 className='font-bold'>Professional Skills</h6>
            <ul>
                
                <li classname='bg-slate-400'>
                    <div classname='flex'>
                        <span> <FontAwesomeIcon icon={faJs}/></span> 
                        <span> JAVASCRIPT</span>                       
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                        <span> <FontAwesomeIcon icon={faPython}/></span>
                        <span> PYTHON</span>
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                        <span> <FontAwesomeIcon icon={faNodeJs}/></span> 
                        <span> NODEJS</span>
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                        <span> <FontAwesomeIcon icon={faReact}/></span>
                        <span> REACT</span>
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                       <span>NextJS</span>
                       <span> <FontAwesomeIcon icon={faNextjs}/></span> 
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                        <span>DJANGO</span>
                        <span> <FontAwesomeIcon icon={faDjango}/></span>
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                       <span>POSTGRESQL</span>
                       <span> <FontAwesomeIcon icon={faPostgresql}/></span> 
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                       <span>MONGODB</span>
                       <span> <FontAwesomeIcon icon={faMongodb}/></span> 
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                        <span>Tailwindcss</span>
                        <span> <FontAwesomeIcon icon={faTailwind}/></span>
                    </div>
                    
                </li>
                
                
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                       <span> <FontAwesomeIcon icon={faGithubSquare}/></span> 
                       <span> GIT</span>
                    </div>
                    
                </li>
                
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                       <span> <FontAwesomeIcon icon={faHtml5}/></span> 
                       <span> HTML5</span>
                    </div>
                    
                </li>
                <li classname='bg-slate-400'>
                    <div classname='flex bg-slate'>
                       <span> <FontAwesomeIcon icon={faCss3}/></span> 
                       <span> CSS</span>
                    </div>
                </li>
            </ul>
        </div>
        <div>interesting thing here</div>
        </div>
     </div>

  )
}

export default Skills