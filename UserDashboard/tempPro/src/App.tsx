import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import Component from './components/Blog'
import { Dashboard } from './components/dashboard'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Button>Click me</Button>
      <Dashboard></Dashboard>
      <Component></Component>

    </>
  )
}

export default App
