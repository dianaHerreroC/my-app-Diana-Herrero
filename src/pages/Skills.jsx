import ScrollWrapper from "../components/ScrollWrapper"
import skillsData from "../data/skills.json"

export default function Skills(){
    return(
        <div className="skills-section">
            <ScrollWrapper>
                <div className="left-container" id="top-page">
                    {skillsData.leftContainer.map((section, index) => (
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
                {skillsData.rightContainer.map((section, index) => (
                    <>
                        <section key={index}>
                            <h1 className="titles">{section.title}</h1>
                            <ul className="regular-text">
                                {section.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </section>
                        {index !== skillsData.rightContainer.length - 1 && <hr />}
                    </>
                ))}
            </div>
        </div>
    )
}