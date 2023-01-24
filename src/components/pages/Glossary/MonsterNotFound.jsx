import { useEffect, useState } from "react";
import './MonsterNotFound.css'

export default function MonsterNotFound() {

    const [image, setImage] = useState();

	const getDog = () => {
		const url = "https://dog.ceo/api/breeds/image/random";
		return fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((response2) => {
				return response2.message;
			});
	};

	useEffect(() => {
		getDog().then(setImage);  // pega o primeiro parâmetro e joga pro 'callback' se não chamar
	}, []);


    return(
        <>
        <div className="monster--notfound--container">
            <h1>Ooops!</h1>
            <p>We couldn't find this monster. Here is a dog for you :)</p>
            <img src={image} alt='a random dog'></img>
        </div>
        </>
    )
}