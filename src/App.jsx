import React ,{useState}from 'react'
import Nav from './Componets/Nav'

const App = () => {
    const[theme,setTheme]=useState('light')
  return (
    <div className=' dark relative min-h-screen'>
      <Nav theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
