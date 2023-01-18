import { useContext, createContext, useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero'
import Monster from './components/Monster';



export default function App() {

  const [levelNumber, setLevelNumber] = useState(1);
  const [isDone,setIsDone] = useState(true) //newGame
  const [isNew,setIsNew] = useState(true) //newGame


  useEffect(() =>
      levelNumber >= 5 ? setIsDone(true) : undefined
  , [levelNumber])


  return (
    <>
      {
      
      isNew ? (
        <>
          <h1>Hello</h1>
          <button 
          onClick={() =>{
            setIsNew(false);
            setIsDone(false)
            setLevelNumber(1)
          }}
          >Start Game</button>
        </>
      ) :
      
      !isDone ?(
        <div className="game--div">
          <Hero />
          <Monster
            level={levelNumber} 
          />
          <button 
          onClick={()=>{setLevelNumber((prev)=> prev+1)
            }}
          >
            Next Level</button>

        </div>
      ) :
        <>
          <h1>Congratulations!</h1>
          <h2>You WON!</h2>
          <button 
            onClick={() =>{
              setIsDone((prev)=>!prev);
              setLevelNumber(1)
            }}
          >Restart Game</button>
        </>
      }
    </>
  );
}
  