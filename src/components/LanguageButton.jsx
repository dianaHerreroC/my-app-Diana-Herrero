import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import spanishFlag from "../assets/spain.png"
import englishFlag from "../assets/england.png"

export default function LanguageButon(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const language="english"

    let flagImage;
    switch (language) {
        case "spanish":
        flagImage = <img src={spanishFlag} alt="spanishFlag" />;
        break;
        default:
        flagImage = <img src={englishFlag} alt="englishFlag" />;
    }

    return(
        <div
            className="language-dropdown-button"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
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
                        <div className={(language=="english") ? "active-language language-option":"language-option"}>
                            <img src={englishFlag} alt="englishFlag" />
                            English
                        </div>
                        <div className={(language=="spanish") ? "active-language language-option":"language-option"}>
                            <img src={spanishFlag} alt="spanishFlag" />
                            Spanish
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}