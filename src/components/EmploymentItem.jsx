import SmallButton from "./SmallButton"

export default function EmploymentItem(props){
    return(
        <article className="employment-item">
            <h1 className="highlighted-text">{props.company}</h1>
            <h2 className="highlighted-text">{`${props.position} | ${props.dates}`}</h2>
            <ul className="regular-text">
                {props.experiences.map(e=>(<li>{e}</li>))}
            </ul>
            <SmallButton>Read more</SmallButton>
        </article>
    )
}
