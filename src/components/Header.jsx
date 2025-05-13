import { Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <Link  to="/">Diana Herrero</Link>
            <NavLink
                to="/"
            >
                About me
            </NavLink>
            <NavLink
                to="/skills"
            >
                Skills
            </NavLink>
            <NavLink
                to="/education"
            >
                Education
            </NavLink>
            <NavLink
                to="/workhistory"
            >
                Work history
            </NavLink>
            <NavLink
                to="/contact"
            >
                Contact
            </NavLink>
        </header>
    )
}