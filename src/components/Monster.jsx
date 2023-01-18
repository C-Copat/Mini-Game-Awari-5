import React, { useContext, useEffect } from "react"



export default function Monster(props) {

    let level = props.level;

    const [maxHp,setMaxHp] = React.useState(10)
    const [currentHp,setCurrentHp] = React.useState(maxHp)

    

/*     useEffect(()=> {
        (level == 1) ? setMaxHp(10) && setCurrentHp(10)
        : (level == 2) ? setMaxHp(15) && setCurrentHp(15)
        : (level === 3) ? setMaxHp(50) && setCurrentHp(50)
        : setMaxHp(100)
    },[level]) */

    useEffect(()=> {
        if  (level === 1) {
            setMaxHp(10);
            setCurrentHp(10);
        } else if (level === 2) {
            setMaxHp(15);
            setCurrentHp(15);
        } else if (level === 3) {
            setMaxHp(20);
            setCurrentHp(20);
        } else {
            setMaxHp(50);
            setCurrentHp(50);
        }
    },[level])
    
    return(
        <>
        <div className="monster--container">
            <h1>{`Monster level ${level}`} </h1>
            <div className="monster--hp--container">
                <h2>Health Points (HP)</h2>
                <p>{`${currentHp} / ${maxHp}`}</p>

            </div>
        </div>
        </>
    )
}