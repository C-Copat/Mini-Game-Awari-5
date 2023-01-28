import { getMonster } from "./getMonster"
import { getRandomMonster } from "./getRandomMonster"

export const getRandomMonsterData = async (challenge_rating) => {

    let response = await getRandomMonster(challenge_rating)

    let data ={} 

    try {
        data = await getMonster(response.index)
        console.log(data)  
    } catch (error) {
        console.error(error)      
    }

    return data
}