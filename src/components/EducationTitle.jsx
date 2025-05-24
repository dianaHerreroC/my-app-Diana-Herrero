export default function EducationTitle(props){
    return(
        <article className="education-title-item" onClick={() => window.open(`${props.pdfRoute}`, '_blank')}>
            <h2 className="highlighted-text">{`${props.name}, ${props.year}`}</h2>
            <p className="secondary-text">{props.school}</p>
            <span className="small-button">Click me</span>
        </article>
    )
}