import React, { useState } from 'react'
// import HeroSection from './HeroSection';
import './HeroSection.css'
import Number from './Number';
import dice1 from '../assets/dice_1.png'
import dice2 from '../assets/dice_2.png'
import dice3 from '../assets/dice_3.png'
import dice4 from '../assets/dice_4.png'
import dice5 from '../assets/dice_5.png'
import dice6 from '../assets/dice_6.png'

const HeroSection = () => {
  const numbers = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 }
  ];
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6]
  const getRandomIndex = () => Math.floor(Math.random() * diceImages.length)

  // keep the currently shown dice stable across re-renders
  const [diceIndex, setDiceIndex] = useState(() => getRandomIndex())
  const randomdice = diceImages[diceIndex]
  const [selectedNumber, setSelectedNumber] = useState(null);

  const [showRules, setShowRules] = useState(false)
  const [count, setcount] = useState(0)

  console.log("this is the selected number " + selectedNumber)
  console.log(diceIndex + 1)


  const rollDice = () => {
    if (selectedNumber === null) {
      alert("please select a number");
      return;
    }
    const newIndex = getRandomIndex()
    setDiceIndex(newIndex)
    const rolledNumber = newIndex + 1

    if (selectedNumber === rolledNumber) {
      // correct guess: add rolled number
      setcount(prev => prev + rolledNumber)
    } else {
      // incorrect guess: deduct 2 points
      setcount(prev => prev - 1)
    }
    console.log("this is the couting numbe " + count)
  }


  return (
    <div className='hero-section'>
      <div className='top'>
        <div className='left-hero'>
          <h1 className='top-Number'>{count}</h1>
          <p className='top-paragraph'>Total score</p>
        </div>
        <div className='right-hero'>
          <div className='righthero-number'>
            {numbers.map((dice, i) => (
              <Number
                key={i}
                number={dice.number}
                isSelected={dice.number === selectedNumber}
                toggleNumber={() => setSelectedNumber(dice.number)}
              />
            ))}
          </div>
          <p className='select-number'>Select number</p>
        </div>
      </div>
      <div className='dice-section'>
        <div className='img-section'>
          <img
            src={randomdice}
            alt="dice"
            onClick={rollDice}
            className='dice-img'
          // onClick={() => setDiceIndex(getRandomIndex())}
          />
        </div>
        <p className='click-dice'>Click on Dice to roll</p>
        <div className='rule-button'>
          <button
            className='btn-reset'
            onClick={() => { setcount(0); setSelectedNumber(null); }}
          >
            Reset Score
          </button>
          <button
            className='btn-rules'
            onClick={() => setShowRules(prev => !prev)}
            aria-expanded={showRules}
          >
            {showRules ? 'Hide Rules' : 'Show Rules'}
          </button>
        </div>

        {showRules && (
          <div className='rules-container'>
            <h2 className='rules-title'>How to play dice game</h2>
            <div className='rules-text'>
              <p>Select any number</p>
              <p>Click on dice image</p>
              <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
              <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default HeroSection
