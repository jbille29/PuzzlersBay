import React, { useState, useEffect } from 'react'

const GameOneStats = () => {

  const [stats, setStats] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('gameOneScore');
    if (storedData) {
      setStats(storedData);
    }
  }, []);
  
  return (
    <div>
      Stats:
       {stats}
    </div>
  )
}

export default GameOneStats