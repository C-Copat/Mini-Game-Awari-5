import { Link, redirect, useNavigate } from "react-router-dom";
import CustomButton from "../atom/CustomButton";
import './HomePage.css'

export default function HomePage() {

    const navigate = useNavigate()

    function handleStartGame(){
        navigate('/game')
    }

    return (
    <>
    <div className="homepage--container">
        <h1>New Game Page</h1>
        <p>Click on the button below to start the game from level 1</p>
        <br />
        <CustomButton 
            style="button--primary"
            label="Start Game"
            clickFunction={handleStartGame}
        >
        </CustomButton>
    </div>
    </>
    
    )
}