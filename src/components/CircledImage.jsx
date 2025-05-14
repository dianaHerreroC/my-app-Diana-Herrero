export default function CircledImage(props){
    return(
        <div className="circled-picture">
            <img src={props.src} alt="my picture"/>
        </div>
    )
}