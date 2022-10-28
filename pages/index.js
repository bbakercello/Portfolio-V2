import React, {useRef} from "react"
import Nav from "../components/Nav"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import Head from "next/head"



function Homepage() {

    
    return (
      <div>
        <Head>
          <title>Ben Baker</title>
          <meta name="Ben Baker" content="Check out my portfolio designed with NextJS and Tailwindcss to find more about me, my projects, skills and passions."/>
        </Head>
        <Nav/>
        <div  className="bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 lg:mr-0 rounded-lg ">
            <Home/>
            <About />
            <Skills/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
      </div>
    )
  }
  
  export default Homepage
  