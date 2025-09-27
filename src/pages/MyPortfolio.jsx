import { useTranslation } from "react-i18next";

export default function MyPortfolio() {
    const { t } = useTranslation("myPortfolio");
    return(
        <div className="portfolio-section" id="top-page">
            {t("sections", { returnObjects: true }).map((section, index) => (
                        <section key={index} id={section.id}>
                            {index !== 0 && <hr />}
                            <h1 className="titles">{section.title}</h1>
                            <div className="regular-text">
                                {section.paragraphs.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </section>
                    ))}
        </div>
    )
}