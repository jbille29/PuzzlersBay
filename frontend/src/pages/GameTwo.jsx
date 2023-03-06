import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const GameTwo = () => {

  const [activeGame, setActiveGame] = useOutletContext()

  useEffect(()=>{
    setActiveGame('gameTwo')
  },[])

  return (
    <div>GameTwo</div>
  )
}

export default GameTwo