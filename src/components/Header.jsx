import { Link, NavLink } from "react-router-dom"
import photo from "../assets/Photo.png"

export default function Header(){
    return(
        <header>
            <Link  to="/" className="my-logo">
                <img src={photo} alt="my picture"/>
                <span className="font-logo-text">Diana Herrero</span>
            </Link>
            <nav className="font-menu-bar-items">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active-nav-link" : null}
                >
                    About me
                </NavLink>
                <NavLink
                    to="/skills"
                    className={({ isActive }) => isActive ? "active-nav-link" : null}
                >
                    Skills
                </NavLink>
                <NavLink
                    to="/education"
                    className={({ isActive }) => isActive ? "active-nav-link" : null}
                >
                    Education
                </NavLink>
                <NavLink
                    to="/workhistory"
                    className={({ isActive }) => isActive ? "active-nav-link" : null}
                >
                    Work history
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "active-nav-link" : null}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}