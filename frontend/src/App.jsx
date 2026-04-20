import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<h1>Home</h1>} />
    </Routes>
  )
}

export default App
