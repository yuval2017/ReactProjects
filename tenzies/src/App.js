import './style.css';
import { Die } from './components/Die';
import React from 'react';
import {nanoid} from "nanoid"

function App() {
  const [numOfDices, setNumOfDices] = React.useState(10)
  const [dices, setDices] = React.useState(allNewDice())

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
      <div className="die-container">
      {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
