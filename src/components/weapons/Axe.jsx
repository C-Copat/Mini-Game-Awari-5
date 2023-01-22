import { useContext } from "react"
import { MonsterCurrentHpContext } from "../context/MonsterHpContext"

export default function Axe() {

    const [currentHp,setCurrentHp] = useContext(MonsterCurrentHpContext)

    console.log('render Axe')

    return(
        <button onClick={()=>{
            setCurrentHp((prev)=>{
                return prev-5
            }
            )
        }}
            >Axe</button>
    )
}