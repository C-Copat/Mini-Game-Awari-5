import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './YouWon.css'

export default function YouWon() {

    const navigate = useNavigate()

    function handleRestart(){
        // The idea was to actually restart states, but it's done by default
    }

    // Redirects automatically to home after 5 secs

/*     useEffect(() =>{
        setTimeout( () => {
            navigate("/")
        },5000)
        return clearTimeout()
    }, []) */

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