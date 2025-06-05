import { useTranslation } from "react-i18next";

export default function EducationTitle(props){
    const { t } = useTranslation("pageText")
    return(
        <article className="education-title-item" onClick={() => window.open(`/${props.pdfName}`, '_blank')}>
            <h2 className="highlighted-text">{`${props.name}, ${props.year}`}</h2>
            <p className="secondary-text">{props.school}</p>
            <span className="small-button">{t("clickMe")}</span>
        </article>
    )
}