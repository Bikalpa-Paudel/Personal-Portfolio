import "./Social.css"
import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi"

export default function Social(){
    return(
        <>
            <div className="social-container">
                <div className="line"></div>
                <a href="https://github.com/Bikalpa-Paudel" target="_blank" rel="noreferrer"><FiGithub className="social-icon"/></a>
                <a href="https://www.linkedin.com/in/bikalpa-paudel-19b34323a/" target="_blank" rel="noreferrer"><FiLinkedin className="social-icon"/></a>
                <a href="https://twitter.com/bikalp18" target="_blank" rel="noreferrer"><FiTwitter className="social-icon"/></a>
                <div className="line"></div>
            </div>
        </>
    )
}