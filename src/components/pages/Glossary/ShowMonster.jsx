import { useParams } from "react-router"

export default function ShowMonster() {

    const { id } = useParams()

    return(
        <h2>Monster {id}</h2>
    )
}