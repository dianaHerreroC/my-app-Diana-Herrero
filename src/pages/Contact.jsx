import { FiPhone } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { SlLocationPin } from "react-icons/sl"
import { MdContentCopy } from "react-icons/md"
import { useState } from "react"

export default function Contact(){
    const [emailCopied, setEmailCopied] = useState(false)
    const [phoneCopied, setPhoneCopied] = useState(false)
    const handleEmailCopy = () => {
        navigator.clipboard.writeText("d.herreroc97@gmail.com")
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 1000) // Hide tooltip after 2s
    }
    const handlePhoneCopy = () => {
        navigator.clipboard.writeText("+34679202800")
        setPhoneCopied(true)
        setTimeout(() => setPhoneCopied(false), 1000) // Hide tooltip after 2s
    }
    return(
        <div className="contact-section">
            <h1 className="titles">Contact details</h1>
            <div className="contact-details">
                <span className="contact-detail">
                    <FiPhone className="icon" />
                    <a className="highlighted-text" href="tel:+34679202800" target="_blank">(+34) 679 202 800</a>
                    <span className="copy">
                        <MdContentCopy className="copy-icon" onClick={handlePhoneCopy}/>
                        {phoneCopied && <span className="copied-tooltip small-messages">Copied!</span>}
                    </span>
                </span>
                <span className="contact-detail">
                    <FiMail className="icon" />
                    <a className="highlighted-text" href="mailto:d.herreroc97@gmail.com" target="_blank"> d.herreroc97@gmail.com </a>
                    <span className="copy">
                        <MdContentCopy className="copy-icon" onClick={handleEmailCopy}/>
                        {emailCopied && <span className="copied-tooltip small-messages">Copied!</span>}
                    </span>
                </span>
                <span className="contact-detail">
                    <SlLocationPin className="icon" />
                    <p className="highlighted-text">Madrid</p>
                </span>
            </div>
        </div>
    )
}