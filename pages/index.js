import React, {useRef} from "react"
import Nav from "../components/Nav"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import Head from "next/head"
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
import { motion, useScroll } from "framer-motion";


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

function Homepage() {
  const { scrollYProgress } = useScroll()
 
    
    return (

      <div>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <Head>
          <title>Ben Baker</title>
          <meta name="Ben Baker" content="Check out my portfolio designed with NextJS and Tailwindcss to find more about me, my projects, skills and passions."/>
        </Head>
        <Nav/>
        <div  className="bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 lg:mr-0 rounded-lg ">
            <Home/>
            <About />
            <Skills skills={skills}/>
            <Work skills={skills}/>
            <Contact/>
            <Footer/>
        </div>
     
      </div>
    )
  }
  
  export default Homepage
  