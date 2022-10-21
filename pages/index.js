import React from "react"
import Nav from "../components/Nav"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Contact from "../components/Contact"


function Homepage() {
    return (
      <div className="">
        <Nav/>
        <div className="bg-slate-100 pb-20 w-screen">
        <Home/>
        <About />
        <Skills/>
        <Work/>
        <Contact/>
        </div>
      </div>
      
    )
  }
  
  export default Homepage
  