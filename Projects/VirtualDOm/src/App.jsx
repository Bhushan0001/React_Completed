
import { useState } from 'react'
import Scorecard from './components/Scorecard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
function App() {
  const [playerName, setplayerName] = useState(true)

  const changePlayer = ()=>{
    return setplayerName((currentplayer)=> !currentplayer)
  }
  return (
    <>
     {playerName ?<Scorecard key={playerName} changePlayer={changePlayer} Player="player1"></Scorecard> : <Scorecard key={playerName} changePlayer={changePlayer} Player="player2"></Scorecard> } 
    </>
  )
}

export default App
