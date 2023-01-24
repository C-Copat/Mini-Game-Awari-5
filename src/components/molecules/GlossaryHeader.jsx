import { NavLink, Outlet } from "react-router-dom";
import './GlossaryHeader.css'

export default function GlossaryHeader() {
    return(
        <> 
        <div className="glossary--header--container">
            <NavLink end to="/glossary">Search</NavLink>
            <NavLink to="/glossary/new">New Monster</NavLink>
            <p><strong>Examples:</strong></p>
            <NavLink to="/glossary/1">Monster 1</NavLink>
            <NavLink to="/glossary/2">Monster 2</NavLink>
        </div>
        <Outlet />
        </>
    )
}