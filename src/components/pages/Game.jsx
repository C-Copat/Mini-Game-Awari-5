import { Link } from "react-router-dom";
import './Game.css'

export default function Game() {

    return(
        <>
        <div className="game--container">
        <p>Fight Page</p>
        <p><Link to="/won">Won</Link></p>
        </div>
        </>
    )
}