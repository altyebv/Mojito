import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)

import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/menu.jsx";
import Contact from "./components/Contact.jsx";

function App() {


  return (
    <main>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
    </main>
  )
}

export default App
