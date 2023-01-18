import React, { useContext, useEffect } from "react"
import { MonsterCurrentHpContext, MonsterMaxHpContext } from "../MonsterHpContext";


export default function Monster(props) {
    

    let level = props.level;

    const [maxHp,setMaxHp] = useContext(MonsterMaxHpContext)
    const [currentHp,setCurrentHp] = useContext(MonsterCurrentHpContext)

    console.log('render Monster')

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