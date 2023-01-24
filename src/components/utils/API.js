
export default function MonsterDataComponent() {
    
    let monsterData;
    let index = "aboleth";
    let url = `https://www.dnd5eapi.co/api/monsters/${index}`;
    
    fetch(url)
	.then((response) => response.json())
	.then((json) => {
        monsterData = json;
        return json
	})
	.finally(() => {
        console.log(monsterData);
	});
    

    // If we have added the console.log(monsterData) after the fetch, it would be executed first.
}