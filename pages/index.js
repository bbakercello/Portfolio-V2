import React from "react"
import Nav from "../components/Nav"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Homepage() {
    return (
      
      <div>
        <Nav/>
        <div className="bg-slate-100 lg:mr-0 rounded-lg dark:text-white">
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
  