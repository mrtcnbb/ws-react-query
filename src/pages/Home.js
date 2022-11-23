import React from 'react'
import cry from '../assets/ram-pic.png'

const Home = () => {
  return (
    <div>
      <h1>Rick And Morty Universe</h1>
      <img className='cry-img' src={cry} alt="logo" height={500} />
    </div>
  )
}

export default Home