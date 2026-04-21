import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Amanda from './components/Amanda'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<h1>Home</h1>} />
      <Amanda/>
    </Routes>
  )
}

export default App
