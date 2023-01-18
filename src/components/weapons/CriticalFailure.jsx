export default function CriticalFailure({setCurrentHp}) {

    console.log('render Failure')

    return(
        <button onClick={()=>{
            setCurrentHp(
                (prev) => {
                    return prev == 0 ? 0 : prev-5
                }
            )
        }}
            >Critical Failure</button>
    )
}