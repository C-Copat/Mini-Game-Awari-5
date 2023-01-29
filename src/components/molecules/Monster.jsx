import React, { useEffect, useState } from "react"
import { useDifficulty } from "../context/ConfigContext";
import { useCurrentHp, useMaxHp } from "../context/MonsterHpContext";
import { getRandomMonsterData } from "../services/getRandomMonsterData";
import './Monster.css'

export default function Monster({children, levelNumber, setLevelNumber}) {   
    const [maxHp,setMaxHp] = useMaxHp()
    const [currentHp,setCurrentHp] = useCurrentHp()
    const difficulty = useDifficulty()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const [data,setData] = useState()


    // Using context Custom Hooks

    console.log('render Monster')

    useEffect(() =>
    (currentHp <= 0 ? handleLevelUp(): undefined),
    [currentHp]
    )

    useEffect( ()=>{
        getRandomMonsterData(3)
            .then(setData)
            .catch((error)=>{console.error(error)})
            .finally(setLoading(false))
    },[levelNumber])

    useEffect(()=> {
        if  (levelNumber === 1) {
            setMaxHp(10*difficulty);
            setCurrentHp(10*difficulty);
        } else if (levelNumber === 2) {
            setMaxHp(15*difficulty);
            setCurrentHp(15*difficulty);
        } else if (levelNumber === 3) {
            setMaxHp(20*difficulty);
            setCurrentHp(20*difficulty);
        } else {
            setMaxHp(50*difficulty);
            setCurrentHp(50*difficulty);
        }
    },[levelNumber])

    function handleLevelUp() {
        setLevelNumber((prev)=> prev+1)
    }
    
    return(
        <>
        <div className="monster--container">
            {loading && <h2>Loading</h2>}
            {data && <h1>{data.name}</h1>}
            <p> {`Level ${levelNumber} Monster`}</p>
            <div className="monster--hp--container">
                <h2>Health Points (HP)</h2>
                <p>{`${currentHp} / ${maxHp}`}</p>
                {children}
            </div>
        </div>
        </>
    )
}