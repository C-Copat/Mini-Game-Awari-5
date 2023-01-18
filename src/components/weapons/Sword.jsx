import { useContext } from "react"
import { MonsterCurrentHpContext } from "../../MonsterHpContext"

export default function Sword() {

    const [currentHp,setCurrentHp] = useContext(MonsterCurrentHpContext)

    console.log('render Sword')

    return(
        <button onClick={()=>{
            setCurrentHp((prev)=>{
                return prev-10
            }
            )
        }}
            >Sword</button>
    )
}