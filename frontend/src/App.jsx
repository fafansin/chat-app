import { useState } from 'react'
import './App.css'
import Login from '../pages/login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Login></Login>
    </div>
  )
}

export default App
