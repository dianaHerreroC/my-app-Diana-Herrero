import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import photo from "../assets/logo-photo.png"
import CircledImage from "./CircledImage"
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";


export default function HeaderDesktop(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const navigate = useNavigate()
    const handleDropdownClick = (anchor) => {
        navigate("/skills")
        setTimeout(() => {
            const el = document.getElementById(anchor)
            if (el) el.scrollIntoView({ behavior: "smooth" })
        }, 50)
    }
    return(
        <header>
            <Link  to="/" className="my-logo">
                <CircledImage src={photo}/>
                <span className="logo-text">Diana Herrero</span>
            </Link>
            <nav className="menu-bar-items">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                >
                    About me
                </NavLink>
                <div
                    className="skills-dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="nav-link skills-navlink">
                        <NavLink
                            onClick={(e) => {
                                e.preventDefault()
                                handleDropdownClick("top-page")
                            }}
                            to="/skills"
                            className={({ isActive }) => isActive ? "active-nav-link" : null}
                        >
                            Skills
                        </NavLink>
                        {isDropdownOpen ? <RiArrowDropDownLine className="arrow-drop-down"/> : <RiArrowDropUpLine className="arrow-drop-down"/>}
                    </div>
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                className="dropdown-content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <NavLink to="/skills" onClick={() => handleDropdownClick("top-page")} className="nav-link">Web Development</NavLink>
                                <NavLink to="/skills" onClick={() => handleDropdownClick("technical-knowledge")} className="nav-link">Other Technical Knowledge</NavLink>
                                <NavLink to="/skills" onClick={() => handleDropdownClick("core-strengths")} className="nav-link">Core Strengths</NavLink>
                            </motion.div>
                        )}
                    </AnimatePresence>
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
            </nav>
        </header>
    )
}