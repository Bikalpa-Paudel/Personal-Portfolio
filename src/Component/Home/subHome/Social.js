import "./Social.css"
import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi"

export default function Social(){
    return(
        <>
            <div className="social-container">
                <div className="line"></div>
                <FiGithub className="social-icon"/>
                <FiLinkedin className="social-icon"/>
                <FiTwitter className="social-icon"/>
                <div className="line"></div>
            </div>
        </>
    )
}