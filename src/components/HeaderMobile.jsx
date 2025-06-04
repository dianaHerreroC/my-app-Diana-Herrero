import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import photo from "../assets/logo-photo.png"
import CircledImage from "./CircledImage"
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import { CiMenuBurger } from "react-icons/ci"
import LanguageButon from "./LanguageButton"

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
        closeMenu()
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
    const closeMenu = ()=>{
        setIsDropdownOpen(false)
        setIsMenuOpen(false)
    }
    const menuRef = useRef(null) /* This is for detecting touch outside the menu and close it */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("touchstart", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("touchstart", handleClickOutside)
        }
    }, [])
    useEffect(() => { /* The dropdown opens automatically if you are in skills section */
        if (isMenuOpen && isSkillsActive) {
            setIsDropdownOpen(true);
        }
    }, [isMenuOpen]);
    return(
        <header ref={menuRef}>
            <div className="horizontal-header">
                <Link  to="/" className="my-logo" onClick={closeMenu}>
                    <CircledImage src={photo}/>
                    <span className="logo-text">Diana Herrero</span>
                </Link>
                <div className="right-buttons">
                    <LanguageButon/>
                    <div className={isMenuOpen ? "hamburguer-icon open-menu-icon" : "hamburguer-icon"}>
                        <CiMenuBurger onClick={toggleMenu}/>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && <motion.nav
                    className="menu-bar-items"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                        onClick={closeMenu}
                    >
                        About me
                    </NavLink>
                    <div className="skills-dropdown">
                        <div
                            className={isSkillsActive ? "nav-link active-nav-link" : "nav-link"}
                            onClick={toggleDropDown}
                        >
                            <NavLink
                                onClick={(e) => {
                                    e.preventDefault()
                                    if(isDropdownOpen){
                                        handleDropdownClick("top-page")
                                    } else{
                                        setIsDropdownOpen(true)
                                    }
                                    e.stopPropagation()
                                }}
                                to="/skills"
                            >
                                Skills
                            </NavLink>
                            {isDropdownOpen ? <RiArrowDropUpLine className="arrow-drop-down"/> : <RiArrowDropDownLine className="arrow-drop-down"/>}
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
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <NavLink
                        to="/education"
                        className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                        onClick={closeMenu}
                    >
                        Education
                    </NavLink>
                    <NavLink
                        to="/workhistory"
                        className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                        onClick={closeMenu}
                    >
                        Work history
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                </motion.nav>}
            </AnimatePresence>
        </header>
    )
}