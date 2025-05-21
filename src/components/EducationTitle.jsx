export default function EducationTitle(props){
    return(
        <article className="education-title-item">
            <h2 className="highlighted-text">{`${props.name}, ${props.year}`}</h2>
            <p className="secondary-text">{props.school}</p>
        </article>
    )
}