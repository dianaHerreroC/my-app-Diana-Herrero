import EducationTitle from "../components/EducationTitle"

export default function Education(){
    return(
        <div className="education-section">
            <section className="education-sub-section">
                <h1 className="titles">Grade</h1>
                <EducationTitle
                    name="Industrial and Automatic Electronic Engineering"
                    year="2021"
                    school="Universidad Politécnica de Madrid. ETSIDI."
                    pdfRoute="/grade-title.pdf"
                />
            </section>
            <section className="education-sub-section">
                <h1 className="titles">Certifications</h1>
                <EducationTitle
                    name="Advanced Creatio Developer Certification"
                    year="2020"
                    school="Creatio."
                    pdfRoute="/creatio-certification.pdf"
                />
                <EducationTitle
                    name="Meta Front-End Developer"
                    year="2024"
                    school="Coursera, Meta."
                    pdfRoute="/front-end-certification.pdf"
                />
                <EducationTitle
                    name="Become a Professional React Developer"
                    year="2024"
                    school="Coursera, Scrimba."
                    pdfRoute="/react-certification.pdf"
                />
            </section>
        </div>
    )
}