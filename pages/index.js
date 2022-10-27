import React from "react"
import Nav from "../components/Nav"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Head from 'next/head'

function Homepage() {
    return (
      
      <div>
        <Head>
          <title>Full Stack Developer and Software Engineer - NextJS and Javascript | Ben Baker</title>
          <meta name="description" content="Check out my portfolio designed with NextJS and Tailwindcss to find more about me, my projects, skills and passions." />
        </Head>
        <Nav/>
        <div className="bg-slate-100 lg:mr-0 rounded-lg">
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
  