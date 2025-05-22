import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

export default function Contact(){
    return(
        <div className="contact-section">
            <h1 className="titles">Contact details</h1>
            <div className="contact-details">
                <span>
                    <FiPhone className="icon" />
                    <p className="highlighted-text">(+34) 679 202 800</p>
                </span>
                <span>
                    <FiMail className="icon" />
                    <p className="highlighted-text">d.herreroc97@gmail.com</p>
                </span>
                <span>
                    <SlLocationPin className="icon" />
                    <p className="highlighted-text">Madrid</p>
                </span>
            </div>
        </div>
    )
}