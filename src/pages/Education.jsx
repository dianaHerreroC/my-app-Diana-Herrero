import { useTranslation } from "react-i18next"
import EducationTitle from "../components/EducationTitle"

export default function Education(){
    const { t } = useTranslation("education")
    return(
        <div className="education-section">
            {[t("grade", { returnObjects: true }), t("certifications", { returnObjects: true })].map((section, index) => (
                <section className="education-sub-section" key={index}>
                <h1 className="titles">{section.title}</h1>
                {section.items.map((item, idx) => (
                    <EducationTitle
                    key={idx}
                    name={item.name}
                    year={item.year}
                    school={item.school}
                    pdfName={item.pdfName}
                    />
                ))}
                </section>
            ))}
        </div>
    )
}