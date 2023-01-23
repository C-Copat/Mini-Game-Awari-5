import React from 'react'
import Card from './Card'

export default function Hero({ children }) {

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
                {children}
            </Card>
                           
        </div>
    )
}