import { NavLink } from "react-router-dom";
import './NavbarItem.css'

export default function NavbarItem({text, path}) {

    let activeClassName = 'navbaritem navbaritem-state--active'
    let defaultClassName = 'navbaritem navbaritem--state-default'

    return(
        <>
            <NavLink
            className={({isActive})=>
            isActive ? activeClassName : defaultClassName
            }
            to={path}
            
            >
                <h1>
                    Hello
                </h1>
                {text}
            </NavLink>
        </>
    )
}