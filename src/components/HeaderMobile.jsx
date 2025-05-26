import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import photo from "../assets/logo-photo.png"
import CircledImage from "./CircledImage"
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";

export default function HeaderMobile(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()
    const handleDropdownClick = (anchor) => {
        navigate("/skills")
        setTimeout(() => {
            const el = document.getElementById(anchor)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 50)
    }
    const toggleDropDown = () =>{
        setIsDropdownOpen(prev => !prev);
    }
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }
    const location = useLocation()
    const isSkillsActive = location.pathname === "/skills"
    const isWebDevActive = location.pathname === "/skills" && location.hash === "#top-page"
    const isTechKnowActive = location.pathname === "/skills" && location.hash === "#technical-knowledge"
    const isCoreStrActive = location.pathname === "/skills" && location.hash === "#core-strengths"
    return(
        <header>
            <div className="horizontal-header">
                <Link  to="/" className="my-logo">
                    <CircledImage src={photo}/>
                    <span className="logo-text">Diana Herrero</span>
                </Link>
                <CiMenuBurger className="hamburger-icon" onClick={toggleMenu}/>
            </div>
            {isMenuOpen && <nav className="menu-bar-items">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                >
                    About me
                </NavLink>
                <div className="skills-dropdown">
                    <div
                        className={isSkillsActive ? "nav-link skills-navlink active-nav-link" : "nav-link skills-navlink"}
                        onClick={toggleDropDown}
                    >
                        <NavLink
                            onClick={(e) => {
                                e.preventDefault()
                                handleDropdownClick("top-page")
                                setIsDropdownOpen(true)
                                e.stopPropagation()
                            }}
                            to="/skills"
                        >
                            Skills
                        </NavLink>
                        {isDropdownOpen ? <RiArrowDropDownLine className="arrow-drop-down"/> : <RiArrowDropUpLine className="arrow-drop-down"/>}
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <NavLink
                                to="/skills#top-page"
                                onClick={() => handleDropdownClick("top-page")}
                                className={isWebDevActive ? "nav-link active-nav-link" : "nav-link"}
                            >
                                Web Development
                            </NavLink>
                            <NavLink
                                to="/skills#technical-knowledge"
                                onClick={() => handleDropdownClick("technical-knowledge")}
                                className={isTechKnowActive ? "nav-link active-nav-link" : "nav-link"}
                            >
                                Other Technical Knowledge
                            </NavLink>
                            <NavLink
                                to="/skills#core-strengths"
                                onClick={() => handleDropdownClick("core-strengths")}
                                className={isCoreStrActive ? "nav-link active-nav-link" : "nav-link"}
                            >
                                Core Strengths
                            </NavLink>
                        </div>
                    )}
                </div>
                <NavLink
                    to="/education"
                    className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                >
                    Education
                </NavLink>
                <NavLink
                    to="/workhistory"
                    className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                >
                    Work history
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                >
                    Contact
                </NavLink>
            </nav>}
        </header>
    )
}