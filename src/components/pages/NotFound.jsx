import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDog } from "../services/getDog";
import './NotFound.css'

export default function NotFound() {

    const [image, setImage] = useState();

    const navigate = useNavigate()

    // Takes you back to the last page after 5 secs

    useEffect(() =>{
        let timer = setTimeout( () => {
            navigate(-1)
        },4000)
        return ()=>{
            clearTimeout(timer)
        }
    }, [])

	useEffect(() => {
		getDog().then(setImage);  
			// pega o primeiro parâmetro e joga pro 'callback' se não chamar
	}, []);

    return(
        <>
        <div className="monster--notfound--container">
            <h1>Ooops!</h1>
            <p>We couldn't find this page. Here is a dog for you :)</p>
            <img src={image} alt='a random dog'></img>
        </div>
        </>
    )
}