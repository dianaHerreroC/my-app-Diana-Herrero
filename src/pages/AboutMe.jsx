import photo from "../assets/main-photo.png"
import CircledImage from "../components/CircledImage"

export default function AboutMe(){
    return(
        <div className="about-me-section">
            <div className="text-section">
                <h1 className="titles">Diana Herrero, Electronic Engineer and Web Developer</h1>
                <h2 className="highlighted-text">After acquiring experience in both web development and engineering, I’m now focusing on building my career in the web development field.</h2>
            </div>
            <CircledImage src={photo}/>
        </div>
    )
}