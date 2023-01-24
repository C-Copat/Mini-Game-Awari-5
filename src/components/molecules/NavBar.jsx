
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return(
        <>
        <nav className="navbar--container">
            <h3>Awari Game</h3>
            <div className='links--container'>
                <p><Link to="/">Home</Link></p>
                <p><Link to ="/glossary">Glossary</Link></p>
                <p><Link to="/config">Config</Link></p>
            </div>
            
        </nav>
        </>
    )
}