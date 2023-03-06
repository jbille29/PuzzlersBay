import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const GameThree = () => {

  const [activeGame, setActiveGame] = useOutletContext()

  useEffect(()=>{
    setActiveGame('gameThree')
  },[])

  return (
    <div>GameThree</div>
  )
}

export default GameThree