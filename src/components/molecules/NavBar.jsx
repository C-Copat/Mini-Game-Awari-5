
import { NavLink } from 'react-router-dom'
import NavbarItem from '../atom/NavbarItem'
import './NavBar.css'

export default function NavBar() {
    return(
        <>
        <nav className="navbar--container">
            <h3>RPG-like Game</h3>
            <div className='links--container'>
                <NavLink to="/">Home</NavLink>
                <NavLink to ="/glossary">Glossary</NavLink>
                <NavLink to="/config">Config</NavLink>
                <NavbarItem 
                    path="/glossary"
                    text="Glossary New"
                    />
            </div>
            
        </nav>
        </>
    )
}