import { useState, useRef, useEffect } from "react"
import i18n from "../i18n.js";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from "framer-motion"
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import spanishFlag from "../assets/spain.png"
import englishFlag from "../assets/england.png"

export default function LanguageButon(){

    const [language, setLanguage] = useState(i18n.language || "en")
    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng)
    };
    const { t } = useTranslation("pageText");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropDown = () => {
        setIsDropdownOpen(prev => !prev)
    }

    let flagImage;
    switch (language) {
        case "es":
        flagImage = <img src={spanishFlag} alt="spanishFlag" />;
        break;
        default:
        flagImage = <img src={englishFlag} alt="englishFlag" />;
    }

    const isMobile = useMediaQuery({ orientation: 'portrait' });

    /* This is for detecting touch outside the menu and close it */
    const buttonRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("touchstart", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("touchstart", handleClickOutside)
        }
    }, [])

    return(
        <div
            className="language-dropdown-button"
            onMouseEnter={isMobile ? null: () => setIsDropdownOpen(true)}
            onMouseLeave={isMobile ? null: () => setIsDropdownOpen(false)}
            onClick={isMobile ? ()=>toggleDropDown() : null}
            ref={buttonRef}
        >
            <div className={isDropdownOpen?"language-button open-menu-icon":"language-button"}>
                {flagImage}
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
                        <div
                            className={(language=="en") ? "active-language language-option":"language-option"}
                            onClick={()=>handleLanguageChange("en")}
                        >
                            <img src={englishFlag} alt="englishFlag" />
                            {t("english")}
                        </div>
                        <div
                            className={(language=="es") ? "active-language language-option":"language-option"}
                            onClick={()=>handleLanguageChange("es")}
                        >
                            <img src={spanishFlag} alt="spanishFlag" />
                            {t("spanish")}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}