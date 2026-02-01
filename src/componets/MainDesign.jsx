import React from 'react'
import './MainDesign.css'
import { Link } from 'react-router-dom'
import dice from '../assets/dices.png'

const Main = () => {
  return (
    <div className='container'>
      <div className='left'>
        <img src={dice} alt="dice" />
      </div>
      <div className='right'>
        <h1>Dice Game</h1>
        <Link to="/play">
          <button className='btn'>Play Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Main
