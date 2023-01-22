
import { useDifficulty, useSetDifficulty } from '../context/ConfigContext'
import './Config.css'

export default function Config({children}) {

    const difficulty = useDifficulty();
    const updateDifficulty = useSetDifficulty();

    function handleEasy(){
        updateDifficulty(1)
    }
    
    function handleMedium(){
        updateDifficulty(2)
    }

    function handleHard(){
        updateDifficulty(3)
    }

    function handleDifficulty(numberDifficulty) {
        return(
        numberDifficulty === 1 ? "Easy" :
        numberDifficulty === 2 ? "Medium" :
        numberDifficulty === 3 ? "Hard" :
        "Not defined"
        )
    }

    return (
    <>
        <div className="configPage--container">
            <h1>Configuration Screen</h1>
            <h3>Selected Difficulty: {handleDifficulty(difficulty)}</h3>
            <div className="config--container">
                <button onClick={handleEasy}>Easy</button>
                <button onClick={handleMedium}>Medium</button>
                <button onClick={handleHard}>Hard</button>
        </div>
        </div>
    </>

    )
}