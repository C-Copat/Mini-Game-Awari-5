
export async function getMonster(index) {

    let url = `https://www.dnd5eapi.co/api/monsters/${index}`;

    let actualData = {}

    try {
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(
                `HTTP error: ${response.status}`
            )
        }
        actualData = await response.json()
        
    }  catch(err){
        console.log(err)
    }
    return actualData
}


// Legacy code used for learning:

/* export async function getMonster(index) {
    let url = `https://www.dnd5eapi.co/api/monsters/${index}`;
    const response = await fetch(url)
    
    const response2 = await response.json()
    
    return response2
} */

