import { useState } from 'react'
import TimerCountdown from './hooks/useCount.js'
import {Footer, TeaserHeroContainer} from './components/'
import LinkedInComponent from './components/LinkedInSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeaserHeroContainer/> 
      <LinkedInComponent/>
      <Footer/>
    </>
  )
}

export default App
