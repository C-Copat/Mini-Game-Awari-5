import { useEffect } from "react";
import { useState } from "react";
import { getMonster } from "../../services/getMonster";
import { getMonsterList } from "../../services/getMonsterList";
import { getRandomMonster } from "../../services/getRandomMonster";
import { getRandomMonsterData } from "../../services/getRandomMonsterData";

export default function RandomMonster() {

    const [data,setData] = useState({})

    useEffect( ()=>{
        getRandomMonsterData(3)
            .then(setData)
    },[])

    function handleNewMonster() {
        const myFunc = async () =>{
            const response = await getRandomMonsterData(3)
            setData(response)
        }
        myFunc()
    }


    return(
        <>
            <h2>Random Monster</h2>
            <button onClick={handleNewMonster}>Get a new Monster</button>
            <p>INDEX: {data.index}</p>
            <p>{data.name}</p>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </>
        )
}