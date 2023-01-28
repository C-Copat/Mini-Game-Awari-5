import { useParams } from "react-router"

export default function ShowMonster() {

    const { index } = useParams()

    return(
        <h2>Monster {index}</h2>
    )
}