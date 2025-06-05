import { useTranslation } from "react-i18next"
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

    const { t } = useTranslation("pageText")
    const { t:tSkills } = useTranslation("skills")

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
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
        setIsDropdownOpen(prev => !prev)
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }
    const closeMenu = ()=>{
        setIsDropdownOpen(false)
        setIsMenuOpen(false)
    }

    const location = useLocation()
    const isSkillsActive = location.pathname === "/skills"
    const [activeSkillSection, setActiveSkillSection] = useState("top-page");
    useEffect(() => {
        if (isMenuOpen && location.pathname === "/skills") {
            const sections = tSkills("leftContainer", { returnObjects: true })
            let visibleSection = null
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        visibleSection = section.id;
                        break;
                    }
                }
            }
            setActiveSkillSection(visibleSection);
        }
    }, [isMenuOpen, location]);
    const isSkillsItemActive = (id) => { return ( location.pathname === "/skills" && activeSkillSection === id ) }

    /* This is for detecting touch outside the menu and close it */
    const menuRef = useRef(null)
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

    /* The dropdown opens automatically if you are in skills section */
    useEffect(() => {
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
                        {t("aboutMe")}
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
                                {t("skills")}
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
                                    {tSkills("leftContainer", { returnObjects: true }).map((section, index) => (
                                        <NavLink
                                            key={index}
                                            to={`/skills#${section.id}`}
                                            onClick={() => handleDropdownClick(section.id)}
                                            className={isSkillsItemActive(section.id) ? "nav-link active-nav-link" : "nav-link"}
                                        >
                                            {section.title}
                                        </NavLink>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <NavLink
                        to="/education"
                        className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                        onClick={closeMenu}
                    >
                        {t("education")}
                    </NavLink>
                    <NavLink
                        to="/workhistory"
                        className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                        onClick={closeMenu}
                    >
                        {t("workHistory")}
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                        onClick={closeMenu}
                    >
                        {t("contact")}
                    </NavLink>
                </motion.nav>}
            </AnimatePresence>
        </header>
    )
}