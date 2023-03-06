import logo from './logo.svg';
import './App.css';
import './Counter';
import Counter from './Counter';
import React from 'react';


function App() {

  const [count, setCount] = React.useState(0) 
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    function substract(){
        setCount(prevCount => prevCount - 1)
    }
  return (
    <div className='counter'>
    <button name='counter --minus' onClick={substract}></button>
  {/* pass number into count component */}
    <Counter number = {count}></Counter>
    <button name='counter --plus' onClick={add}></button>
</div>
  );
}

export default App;
