import React ,{useState}from 'react'
import Nav from './Componets/Nav'
import Hero from './Componets/Hero'
import TrustedBy from './Componets/TrustedBy'
import Services from './Componets/Services'
import OurWork from './Componets/OurWork'
import Team from './Componets/Team'
import CountactUs from './Componets/CountactUs'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import Footer from './Componets/Footer'

const App = () => {
    const[theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
  return (
    <div className=' dark:bg-black relative'>
      <Toaster/>
      <Nav theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Team/>
      <CountactUs/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App
