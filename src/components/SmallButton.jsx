export default function SmallButton(props){
    return(
        <button onClick={props.handleClick} className="small-button">
            {props.children}
        </button>
    )
}