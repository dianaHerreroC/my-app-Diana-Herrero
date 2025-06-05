import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import photo from "../assets/logo-photo.png"
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import CircledImage from "./CircledImage"
import LanguageButon from "./LanguageButton"

export default function HeaderDesktop(){

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
    }

    const location = useLocation()
    const [activeSkillSection, setActiveSkillSection] = useState("top-page");
    useEffect(() => {
        if (isDropdownOpen && location.pathname === "/skills") {
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
    }, [isDropdownOpen, location]);
    const isSkillsItemActive = (id) => { return ( location.pathname === "/skills" && activeSkillSection === id ) }

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
                    {t("aboutMe")}
                </NavLink>
                <div
                    className="skills-dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="nav-link">
                        <NavLink
                            onClick={(e) => {
                                e.preventDefault()
                                handleDropdownClick("top-page")
                            }}
                            to="/skills"
                            className={({ isActive }) => isActive ? "active-nav-link" : null}
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
                >
                    {t("education")}
                </NavLink>
                <NavLink
                    to="/workhistory"
                    className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                >
                    {t("workHistory")}
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "nav-link active-nav-link" : "nav-link"}
                >
                    {t("contact")}
                </NavLink>
                <LanguageButon/>
            </nav>
        </header>
    )
}