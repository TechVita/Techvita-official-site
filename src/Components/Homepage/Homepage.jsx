import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from '../Button/Button'
const Homepage = () => {
  return (
    <>
    <div>Homepage</div>
    <Button text="Get started" className='get-started-btn' link='/'/>
  </>
  )
}

export default Homepage