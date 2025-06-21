import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from '../Button/Button'
import Banner from '../Banner/Banner'
const Homepage = () => {
  let alertM = ()=>{
    alert()
  }
  return (
    <>
        <Banner/>
    <Button text="Get started" className='get-started-btn' clickHandler={alertM}/>

  </>
  )
}

export default Homepage