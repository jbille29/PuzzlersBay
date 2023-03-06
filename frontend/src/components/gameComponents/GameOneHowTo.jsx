import React from 'react'

const GameOneHowTo = () => {
  return (
    <>
        <h2 className='modal-title'>How To Play GameOne</h2>
        <p className='modal-subtitle'>Guess the Wordle in 6 tries.</p>
        <ul>
            <li className='modal-text'>Each guess must be a valid 5-letter word.</li>
            <li className='modal-text'>The color of the tiles will change to show how close your guess was to the word.</li>
        </ul>
        <strong><p className='modal-text'>Examples</p></strong>
        <p className='modal-text'>W is the word and in the correct spot.</p>
        <p className='modal-text'>I is the word and in the correct spot.</p>
        <p className='modal-text'>'U is not the word in any spot.</p>
        <p className='modal-text'>A new puzzle is released daily at midnight. If you haven't already, you can sign up for our daily email reminder.</p>
    </>
  )
}

export default GameOneHowTo