import React from 'react'
import Card from './Card'
import CriticalFailure from './weapons/CriticalFailure'
import Sword from './weapons/Sword'
import Axe from './weapons/Axe'
import Spell from './weapons/Spell'


export default function Hero() {

    const [maxHp,setMaxHp] = React.useState(100)
    const [currentHp,setCurrentHp] = React.useState(100)
    
    return(
        <div className="hero--container">
            <h1>Hero</h1>
            <div className="hero--hp--container">
                <h2>Health Points (HP)</h2>
                <p>{`${currentHp} / ${maxHp}`}</p>

            </div>
            <Card>
                <CriticalFailure
                    setCurrentHp = {setCurrentHp}
                />
                <Axe 
                    set/>
                <Sword />
                <Spell />
            </Card>
        </div>
    )
}