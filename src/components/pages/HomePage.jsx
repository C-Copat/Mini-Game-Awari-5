import { Link } from "react-router-dom";
import './HomePage.css'

export default function HomePage() {
    return (
    <>
    <div className="homepage--container">
        <h1>New Game Page</h1>
        <p>Click on the button below to start the game from level 1</p>
        <button>
            <Link to="/game">Start Game</Link>
        </button>
    </div>
    </>
    
    )
}