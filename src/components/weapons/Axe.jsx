export default function Axe({setCurrentHp}) {

    return(
        <button onClick={()=>{
            setCurrentHp(
                (prev) => {
                    return prev == 0 ? 0 : prev-5
                }
            )
        }}
            >Axe</button>
    )
}