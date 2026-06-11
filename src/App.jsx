import React ,{useState}from 'react'
import Nav from './Componets/Nav'
import Hero from './Componets/Hero'
import TrustedBy from './Componets/TrustedBy'
import Services from './Componets/Services'

const App = () => {
    const[theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
  return (
    <div className=' dark: relative min-h-screen'>
      <Nav theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
    </div>
  )
}

export default App
