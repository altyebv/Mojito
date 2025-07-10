import { useState } from 'react'
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)

import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";

function App() {


  return (
    <main>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
    </main>
  )
}

export default App
