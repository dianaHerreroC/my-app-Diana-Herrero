import SmallButton from "./SmallButton"
import {useState} from "react"
import { useTranslation } from "react-i18next";

export default function EmploymentItem(props){

    const { t } = useTranslation("pageText")

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
            <SmallButton handleClick={toggleExpanded}>{ expanded ? t("readLess") : t("readMore") }</SmallButton>
        </article>
    )
}
