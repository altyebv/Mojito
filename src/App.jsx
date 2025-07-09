import { useState } from 'react'
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)

import './App.css'

function App() {


  return (
    <div className='flex-center h-[100vh]'>
        <p id='greet'>Hola</p>
    </div>
  )
}

export default App
