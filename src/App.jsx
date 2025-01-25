import { useState } from 'react'
import TimerCountdown from './hooks/useCount.js'
import {Footer, TeaserHeroContainer} from './components/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeaserHeroContainer/> 
      <Footer/>
    </>
  )
}

export default App
