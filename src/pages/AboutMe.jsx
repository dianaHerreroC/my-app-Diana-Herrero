import photo from "../assets/main-photo.png"
import CircledImage from "../components/CircledImage"
import aboutMeData from "../data/aboutMe.json"

export default function AboutMe(){
    return(
        <div className="about-me-section">
            <div className="text-section">
                <h1 className="titles">{aboutMeData.title}</h1>
                <h2 className="highlighted-text">{aboutMeData.description}</h2>
            </div>
            <CircledImage src={photo}/>
        </div>
    )
}