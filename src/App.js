import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [inputNumber, setInputNumber] = useState(1)
  const [answer, setAnswer] = useState(1)
  
  const isPrime = (inputNumber) => {

    let isPrime = true

  if (inputNumber === 1) {
    return inputNumber
  } 
  else if(inputNumber > 1 ){
    for (let i = 2; i < number; i++) {
      if (inputNumber % i == 0) {
          isPrime = false;
          break;
      }
  }

  }
}


  useEffect (() => {
      if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
          setAnswer("fizzbuzz")
        } else if (inputNumber % 3 === 0) {
          setAnswer("fizz")
        } else if (inputNumber % 5 === 0) {
          setAnswer("buzz")
        } else {
          setAnswer(inputNumber);
        }
  }, [inputNumber])

  const handleChange=() => {
    setInputNumber(inputNumber+1)
  }
  
  
  return (
    <>

    <h1>Number is {answer}</h1>

    <button value={inputNumber} onClick={handleChange}>Press ME!</button>
    
    </>
  )
}

export default App;
