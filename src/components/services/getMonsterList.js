import axios from 'axios'

export const getMonsterList = async (challenge_rating) => {

    let url = 'https://www.dnd5eapi.co/api/monsters'
    let fullRoute = challenge_rating ? `${url}/?challenge_rating=${challenge_rating}` : url

    let response2 = {}

    try{
        const response = await axios.get(fullRoute)
        response2 = await response.data.results

    } catch (error) {
        console.error(error);
    }

    return response2
}



