import './style.css';
import { Die } from './components/Die';
import React from 'react';
import {nanoid} from "nanoid"

function App() {
  const [numOfDices, setNumOfDices] = React.useState(10)
  const [dices, setDices] = React.useState(allNewDice())


function allNewDice(){
  const currDices = []
  for (let i = 0; i < numOfDices; i++){
    currDices.push({value: Math.ceil(Math.random() * 6) , isHeld: false, id: nanoid()})
  }
  return currDices
}
function rollDice(){
  setDices(allNewDice())
}
const diceElements = dices.map(dice => 
  <Die key = {dice.id} value = {dice.value}/>)

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
