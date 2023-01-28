import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { useDifficulty } from "../context/ConfigContext";
import Card from "../molecules/Card";
import Hero from "../molecules/Hero";
import Monster from "../molecules/Monster";
import GenericWeapon from "../weapons/GenericWeapon";
import './Game.css'

export default function Game() {

    const difficulty = useDifficulty()
    const [levelNumber, setLevelNumber] = useState(1);

    const navigate = useNavigate(); 

    useEffect(() =>
        levelNumber >= 5 ? navigate('/won') : undefined       // It can be also done by rendering <Navigate to="/won" />
        , [levelNumber])


    return(
        <>
        <div className="game--container">
            <Card>
                <Monster 
                    levelNumber={levelNumber} 
                    setLevelNumber={setLevelNumber} />
            </Card>
            <Card>
                <Hero>
                    <GenericWeapon name="Axe"damage={5} />
                    <GenericWeapon name="Sword" damage={10} />
                    <GenericWeapon name="Spell" damage={15} />
                </Hero>
            </Card>
        </div>
        </>
    )
}