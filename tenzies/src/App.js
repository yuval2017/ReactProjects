import './style.css';
import { Die } from './components/Die';
import React from 'react';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [numOfDices, setNumOfDices] = React.useState(10)
  const [tenzies, setTenzies] = React.useState(false)
  const [dices, setDices] = React.useState(allNewDice())
React.useEffect(
  ()=> {
    if (dices.length > 0 && dices.every(dice => dice.isHeld && dices[0].value === dice.value)){
      console.log("done!")
      setTenzies(true)
    }
  }
  ,[dices])

function generateNewDice(id){
 return {
    value: Math.ceil(Math.random() * 6) , isHeld: false, id: id
  }
}

function allNewDice(){
  const currDices = []
  for (let i = 0; i < numOfDices; i++){
    currDices.push(generateNewDice(nanoid()))
  }
  return currDices
}
function NewDiceGame(){
  setTenzies(false)
  setDices(allNewDice())
}
function onToggle(id){
  return () =>
    setDices(preveDices => preveDices.map(dice => dice.id === id? {...dice ,isHeld :!dice.isHeld} : dice))
}

function rollDice(){
  setDices(prevDices => prevDices.map(dice => !dice.isHeld ? generateNewDice(dice.id) : dice))
}

const diceElements = dices.map(dice => 
  <Die key = {dice.id} value = {dice.value} isHeld = {dice.isHeld} onToggle = {onToggle(dice.id)}/>)

  return (
    <main>
      {tenzies && <Confetti />}
       <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
      {diceElements}
      </div>
      {tenzies ? <button className='roll-dice' onClick={NewDiceGame}>New Game</button> : <button className='roll-dice' onClick={rollDice}>Roll</button>}
    </main>
  );
}

export default App;
