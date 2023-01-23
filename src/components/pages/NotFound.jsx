import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
    return(
        <>
        <div className='notfound--container'>
            <h1>Oops!</h1>
            <p>It seems like you stepped on the wrong foot.</p>
            <Link to="/">Back to Home</Link>
        </div>
        </>
    )
}