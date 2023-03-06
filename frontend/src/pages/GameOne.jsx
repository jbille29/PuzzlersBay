import React, { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import axios from 'axios'

const GameOne = () => {
  
  const [activeGame, setActiveGame] = useOutletContext()
  const [secretWord, setSecretWord] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/wordmaze/next")
      const secretWord = response.data;
      console.log(secretWord)
      setSecretWord(secretWord);
      //localStorage.setItem("secretWord", secretWord);
      
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    setActiveGame('gameOne')

    fetchData()
    // call
  },[])

  const saveGame = () => {
    localStorage.setItem('gameOneScore', counter)
  }

  return (
    <div className="game-container">
      <div
        className='game'
        style={{
          backgroundColor:"red",
          width: "300px",
          height: "400px",
          borderRadius: "10px"
        }}> 

      </div>
    </div>
  )
}

export default GameOne