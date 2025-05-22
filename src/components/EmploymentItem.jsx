import SmallButton from "./SmallButton"
import {useState} from "react"

export default function EmploymentItem(props){
    const[expanded, setExpanded] = useState(false);
    function toggleExpanded(){
        setExpanded(prev => !prev);
    }
    return(
        <article className="employment-item">
            <h1 className="highlighted-text">{props.company}</h1>
            <h2 className="highlighted-text">{`${props.position} | ${props.dates}`}</h2>
            <ul className={expanded?"regular-text":"regular-text text-unexpanded"}>
                {props.experiences.map(e=>(<li>{e}</li>))}
            </ul>
            <SmallButton handleClick={toggleExpanded}>{expanded?"Read less":"Read more"}</SmallButton>
        </article>
    )
}
