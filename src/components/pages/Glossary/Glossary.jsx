import { useState } from "react"
import { Link } from "react-router-dom"

export default function Glossary() {
    
    const[number,setNumber] = useState(3)

    return(
        <>  
            <h2>Glossary Search</h2>        
            <label>
                {`  Monster index `}
                <input 
                    type="number" 
                    value={number} 
                    onChange={e => setNumber(e.target.value)}/>
            </label>
            <br />
            <br />
            <Link to={`/glossary/${number}`} > Go to Monster {number}</Link>    
        </>
    )
    
}