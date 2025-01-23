import { useState } from 'react'
import TimerCountdown from './hooks/useCount.js'
import {HeroContainer} from './components/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroContainer/> 
    </>
  )
}

export default App
