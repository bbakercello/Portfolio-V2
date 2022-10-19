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
                
                <li>
                    <div classname='flex'>
                        <span>JAVASCRIPT</span>
                        <span> <FontAwesomeIcon icon={faJs}/></span>                        
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                        <span>PYTHON</span>
                        <span> <FontAwesomeIcon icon={faPython}/></span>
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                        <span>Tailwindcss</span>
                        <span> <FontAwesomeIcon icon={faTailwind}/></span>
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                       <span>NextJS</span>
                       <span> <FontAwesomeIcon icon={faNextjs}/></span> 
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                        <span>DJANGO</span>
                        <span> <FontAwesomeIcon icon={faDjango}/></span>
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                       <span>POSTGRESQL</span>
                       <span> <FontAwesomeIcon icon={faPostgresql}/></span> 
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                       <span>MONGODB</span>
                       <span> <FontAwesomeIcon icon={faMongodb}/></span> 
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                       <span>GIT</span>
                       <span> <FontAwesomeIcon icon={faGithubSquare}/></span> 
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                       <span>NODEJS</span>
                       <span> <FontAwesomeIcon icon={faNodeJs}/></span> 
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                        <span>REACT</span>
                        <span> <FontAwesomeIcon icon={faReact}/></span>
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                       <span>HTML5</span>
                       <span> <FontAwesomeIcon icon={faHtml5}/></span> 
                    </div>
                    
                </li>
                <li>
                    <div classname='flex'>
                       <span>CSS</span>
                       <span> <FontAwesomeIcon icon={faCss3}/></span> 
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