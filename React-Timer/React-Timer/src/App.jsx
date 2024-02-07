import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
      <br />
      <br />
      {show && <Timer />}
    </>
  )
}

export default App
