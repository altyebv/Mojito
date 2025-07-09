import { useState } from 'react'
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)

import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {


  return (
    <main>
        <Navbar/>
        <Hero/>
        <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App
