import CustomButton from "../atom/CustomButton"
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
        <>
            <CustomButton
                clickFunction={handleDamage}
                label={name ? name : 'Not Defined'}
                style={'button--primary'}
            />
            </>
    )
}
