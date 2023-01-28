import { getMonsterList } from "./getMonsterList"

export const getRandomMonster = async (challenge_rating) => {

    let list = await getMonsterList(challenge_rating)

    let randomMonster = list[Math.floor(Math.random() * list.length)]

    console.log(randomMonster)

    return randomMonster
}