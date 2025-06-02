import { FiPhone } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { SlLocationPin } from "react-icons/sl"
import { MdContentCopy } from "react-icons/md"
import { useState } from "react"
import contactData from "../data/contact.json"

const formatPhoneNumber = (number) => {
  const clean = number.replace(/[^\d+]/g, "");

  const match = clean.match(/^\+(\d{1,2})(\d+)/);
  if (!match) return number;
  const countryCode = match[1];
  const rest = match[2];

  const groups = [];
  let i = 0;
  while (i < rest.length) {
    const chunkSize = rest.length - i > 4 ? 3 : rest.length - i;
    groups.push(rest.slice(i, i + chunkSize));
    i += chunkSize;
  }

  return `(+${countryCode}) ${groups.join(" ")}`;
};

export default function Contact() {
    const [emailCopied, setEmailCopied] = useState(false)
    const [phoneCopied, setPhoneCopied] = useState(false)
    const handleCopy = (type, text)=>{
        navigator.clipboard.writeText(text)
        if(type=="phone"){
            setPhoneCopied(true)
            setTimeout(() => setPhoneCopied(false), 1000) // Hide tooltip after 2s
        } else if (type=="email"){
            setEmailCopied(true)
            setTimeout(() => setEmailCopied(false), 1000) // Hide tooltip after 2s
        }
    }

  return(
        <div className="contact-section">
            <h1 className="titles">Contact details</h1>
            <div className="contact-details">
                <span className="contact-detail">
                    <FiPhone className="icon" />
                    <a className="highlighted-text" href={`tel:${contactData.phone}`} target="_blank">{formatPhoneNumber(contactData.phone)}</a>
                    <span className="copy">
                        <MdContentCopy className="copy-icon" onClick={() => handleCopy("phone", contactData.phone)}/>
                        {phoneCopied && <span className="copied-tooltip small-messages">Copied!</span>}
                    </span>
                </span>
                <span className="contact-detail">
                    <FiMail className="icon" />
                    <a className="highlighted-text" href={`mailto:${contactData.email}`} target="_blank"> {contactData.email} </a>
                    <span className="copy">
                        <MdContentCopy className="copy-icon" onClick={() => handleCopy("email", contactData.email)}/>
                        {emailCopied && <span className="copied-tooltip small-messages">Copied!</span>}
                    </span>
                </span>
                <span className="contact-detail">
                    <SlLocationPin className="icon" />
                    <p className="highlighted-text">{contactData.location}</p>
                </span>
            </div>
        </div>
    )
}