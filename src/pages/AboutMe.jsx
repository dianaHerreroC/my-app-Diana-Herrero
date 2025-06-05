import { useTranslation } from "react-i18next";
import photo from "../assets/main-photo.png"
import CircledImage from "../components/CircledImage"

export default function AboutMe(){
    const { t } = useTranslation("aboutMe");
    return(
        <div className="about-me-section">
            <div className="text-section">
                <h1 className="titles">{t("title")}</h1>
                <h2 className="highlighted-text">{t("description")}</h2>
            </div>
            <CircledImage src={photo}/>
        </div>
    )
}