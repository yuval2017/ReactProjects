import './style.css';
import { Die } from './components/Die';
import React from 'react';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
import { Timer } from './components/Timer'
import { useStopwatch } from 'react-use-precision-timer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {
  const [numOfDices, setNumOfDices] = React.useState(10)
  const [tenzies, setTenzies] = React.useState(false)
  const [dices, setDices] = React.useState(allNewDice())
  const [numberOfRolls, setNumberOfRolls] = React.useState(0)
  //const {startTimer, stopTimer, resetTimer ,time, formatTime} = Timer()
  const {
    start,
    stop,
    pause,
    resume,
    isStarted,
    isStopped,
    isRunning,
    isPaused,
    getElapsedRunningTime,
  } = useStopwatch();


  

  const [elapsedTime, setElapsedTime] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(getElapsedRunningTime());
    }, 1);

    return () => clearInterval(intervalId);
  }, [getElapsedRunningTime]);
  const formattedTime = new Date(elapsedTime).toISOString().substr(11, 12)


  const [resetTime, setResetTime] = React.useState(false)

  //const {seconds, minutes, hours, days, isRunning, start, pause, reset} = useStopwatch({autoStart: false})
  
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
  setNumberOfRolls(prevNum => prevNum + 1)
  setDices(prevDices => prevDices.map(dice => !dice.isHeld ? generateNewDice(dice.id) : dice))
}

const diceElements = dices.map(dice => 
  <Die key = {dice.id} value = {dice.value} isHeld = {dice.isHeld} onToggle = {onToggle(dice.id)}/>)


  return (
    <main>
      {tenzies && <Confetti />}
 

      <div>
      <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!
    trigger={<button> Trigger</button>}
    </div>
  </Popup>
      <div>Elapsed time: {formattedTime}</div>
      <div>Stopwatch status: {isRunning() ? 'running' : 'not running'}</div>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Reset</button>
      {isRunning() ? <button onClick={() => pause()}>Pause</button>: <button onClick={() => resume()}>Resume</button>}
      
      </div>
      {/* <h1 className="title">{formattedTime || '00:00:00.000'}</h1> */}
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
