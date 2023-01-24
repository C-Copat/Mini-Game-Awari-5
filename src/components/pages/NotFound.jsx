import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {

    const navigate = useNavigate()

    // Takes you back to the last page after 5 secs

    useEffect(() =>{
        setTimeout( () => {
            navigate(-1)
        },5000)
    }, [])


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