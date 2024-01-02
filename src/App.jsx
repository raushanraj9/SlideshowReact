import { useState } from 'react'
import Imageslideshow from './components/Imageslideshow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-500 text-center'>SlideShow</h1>
      <Imageslideshow />

       
    </>
  )
}

export default App
