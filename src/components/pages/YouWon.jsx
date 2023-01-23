import { Link } from "react-router-dom";
import './YouWon.css'

export default function YouWon() {

    function handleRestart(){

    }
    return (
    <>
    <div className="youwon--container">
        <h1>You Won </h1>
        <button onClick={handleRestart}>
            <Link to="/">Restart Game</Link>
        </button>
    </div>
    </>
    )
}