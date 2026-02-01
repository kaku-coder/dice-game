import React, { useState } from 'react'
import './Number.css'

const Number = (props) => {
  
  return (
    <div 
      className='number-contenor'
      onClick={props.toggleNumber}
      style={{
        backgroundColor: props.isSelected ? "black" : "white",
        color: props.isSelected ? "white" : "black"
      }}
    >
      <h1 className='number-color'>{props.number}</h1>
    </div>
  )

}

export default Number
