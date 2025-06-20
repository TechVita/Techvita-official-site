
import { Link, Outlet } from 'react-router-dom'
import './App.css'



function App() {

  return (
    <>
      <h2>Call Header Component Here</h2>
      <Outlet/>
      <h2>Call Footer Component Here</h2>
    </>
  )
}

export default App
