import { useContext, useState, useEffect } from 'react';
import './App.css';
import Hero from './components/molecules/Hero'
import Monster from './components/molecules/Monster';
import { MonsterCurrentHpContext, MonsterMaxHpContext } from './components/context/MonsterHpContext';


export default function App() {

  const [levelNumber, setLevelNumber] = useState(1);
  const [isDone,setIsDone] = useState(true) //newGame
  const [isNew,setIsNew] = useState(true) //newGame

  console.log('render App')


  useEffect(() =>
      levelNumber >= 5 ? setIsDone(true) : undefined
  , [levelNumber])


  const [maxHp,setMaxHp] = useContext(MonsterMaxHpContext)
  const [currentHp,setCurrentHp] = useContext(MonsterCurrentHpContext)

  useEffect(() =>
  (currentHp <= 0 ? handleLevelUp(): undefined),
   [currentHp]
  
  )

  function handleStartGame() {
    setIsNew(false);
    setIsDone(false)
    setLevelNumber(1)
  }

  function handleLevelUp() {
    setLevelNumber((prev)=> prev+1)
  }

  function handleRestartGame(){
    setIsDone((prev)=>!prev);
    setLevelNumber(1)
  }


  return (
    
      <div className="game--div">
          {  
          isNew ? (
            <>
              <h1>Hello</h1>
              <button onClick={handleStartGame}>Start Game</button>
            </>
          ) :
          !isDone ?(
            <>
              <Hero />
              <Monster level={levelNumber} />
              <button onClick={handleLevelUp}> Next Level</button>
            </>
          ) :
            <>
              <h1>Congratulations!</h1>
              <h2>You WON!</h2>
              <button onClick={handleRestartGame}>Restart Game</button>
            </>
          }
        </div>

  );
}
  