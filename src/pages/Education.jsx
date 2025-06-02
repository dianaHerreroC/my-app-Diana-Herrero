import EducationTitle from "../components/EducationTitle"
import educationData from "../data/education.json"

export default function Education(){
    return(
        <div className="education-section">
            {[educationData.grade, educationData.certifications].map((section, index) => (
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