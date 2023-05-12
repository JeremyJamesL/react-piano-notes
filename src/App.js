import allNotes from "./Data/all-notes.js"
import FlashCard from "./Components/FlashCard.js"
import Piano from "./Components/Piano.js"
import GuessesCounter from "./Components/GuessCounter/GuessesCounter.js";
import { useEffect, useReducer, useState } from "react";
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'incorrect' : 
    return  {
      ...state,
      guesses: state.guesses + 1,
      incorrect: state.incorrect + 1
    }

    case 'correct' : 
    return {
      ...state, 
      guesses: state.guesses + 1,
      correct: state.correct + 1
    }
    default :
      console.log('sorry, no more expressions to be made')
  }
}



function App() {

  const guessesCount = {
    guesses: 0,
    correct: 0,
    incorrect: 0
  }
  
  const [guessesState, dispatch] = useReducer(reducer, guessesCount);
  const [activeFlashCard, updateFlashCard] = useState(allNotes[23]);
  const [isCorrect, updateIsCorrect] = useState('');
  const [guess, updateGuess] = useState();
 

  const generateRandomNote = () => {
    return Math.floor(Math.random() * allNotes.length);
  }

  useEffect(() => {
      if(isCorrect === 'true') {
        setTimeout(() => {
          updateFlashCard(allNotes[generateRandomNote()])
          updateIsCorrect('');
        }, 2000);
        dispatch({type: 'correct'})
      } else if(isCorrect === 'false') {
        console.log('is incorrect')
        dispatch({type: 'incorrect'})
      } else if(isCorrect === 'neither') {
        setTimeout(() => {
          updateFlashCard(allNotes[generateRandomNote()])
          updateIsCorrect('');
        }, 2000);
      }
  }, [guess, isCorrect])

  return (

    <div className="app">
        <FlashCard note={activeFlashCard} isCorrect={isCorrect} />
        <Piano note={activeFlashCard} updateIsCorrect={updateIsCorrect} updateGuess={updateGuess} activeFlashCard={activeFlashCard}/>
        <GuessesCounter guessesState={guessesState}/>
    </div>
  )
}

export default App
