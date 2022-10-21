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
      <div className="bg-slate-400">
        <Nav/>
        <div className="bg-slate-100  container rounded-lg">
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
  