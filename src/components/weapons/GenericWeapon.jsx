import { useCurrentHp } from "../context/MonsterHpContext"

export default function GenericWeapon({name,damage}) {

    const [currentHp,setCurrentHp] = useCurrentHp()

    console.log(`render Weapon ${name}`)

    function handleDamage() {
        setCurrentHp((prev)=> {
            return prev-damage
        })
    }

    return(
        <button onClick={handleDamage}>{name ? name : 'Not Defined'}</button>
    )
}
