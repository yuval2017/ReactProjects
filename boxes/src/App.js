import boxes from './boxes';
import React from 'react';
import './style.css';
import Box from './Box';

function App() {
  
  const [squares, setSquares] = React.useState(boxes)

  //one option..
  function tuggle(id){
    return ()=>{
      setSquares(prevSquares => {
        return prevSquares.reduce((prevValue, currentValue) =>{ 
          if (id === currentValue.id) {
            const new_square = {...currentValue ,
            on: !currentValue.on}
            prevValue.push(new_square)
          }else{
            prevValue.push(currentValue)
          }
          return prevValue
        }
        ,[])
      }
      
      )
    }
  }
  //two option..
  function tuggle2(id){
    return ()=>
      setSquares(prevSquares => {
        return prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on}: square 
        })
      })
}∂
  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on} toggle = {tuggle(square.id)}></Box>
  ))
  return (
    <main>
      {squareElements}
    </main>
  );
}

export default App;
