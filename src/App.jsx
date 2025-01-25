import { useState } from 'react'
import TimerCountdown from './hooks/useCount.js'
import {Footer, HeroContainer} from './components/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroContainer/> 
      <Footer/>
    </>
  )
}

export default App
