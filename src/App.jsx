import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}> +</button >
      <p className='text-2xl'>{count}</p>
      <button onClick={() => setCount(count => count - 1)}>-</button>
    </div >
  )
}

export default App
