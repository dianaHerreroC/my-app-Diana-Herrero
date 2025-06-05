import { useTranslation } from "react-i18next";
import ScrollWrapper from "../components/ScrollWrapper"

export default function Skills(){
    const { t } = useTranslation("skills");
    return(
        <div className="skills-section">
            <ScrollWrapper>
                <div className="left-container" id="top-page">
                    {t("leftContainer", { returnObjects: true }).map((section, index) => (
                        <section key={index} id={section.id}>
                            {index !== 0 && <hr />}
                            <h1 className="titles">{section.title}</h1>
                            <ul className="regular-text">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </ScrollWrapper>
            <div className="right-container">
                {t("rightContainer", { returnObjects: true }).map((section, index) => (
                    <>
                        <section key={index}>
                            <h1 className="titles">{section.title}</h1>
                            <ul className="regular-text">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>
                        {index !== t("rightContainer", { returnObjects: true }).length - 1 && <hr />}
                    </>
                ))}
            </div>
        </div>
    )
}