import { useContext } from "react"
import { MonsterCurrentHpContext } from "../../MonsterHpContext"

export default function Spell() {

    const [currentHp,setCurrentHp] = useContext(MonsterCurrentHpContext)

    console.log('render Spell')

    return(
        <button onClick={()=>{
            setCurrentHp((prev)=>{
                return prev-15
            }
            )
        }}
            >Spell</button>
    )
}