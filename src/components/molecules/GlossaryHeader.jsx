import { NavLink, Outlet } from "react-router-dom";
import './GlossaryHeader.css'

export default function GlossaryHeader() {
    return(
        <> 
        <div className="glossary--header--container">
            <NavLink end to="/glossary">Search</NavLink>
            <NavLink to="/glossary/new">Random Monster</NavLink>

        </div>
        <Outlet />
        </>
    )
}