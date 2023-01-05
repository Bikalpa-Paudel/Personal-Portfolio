import "./Hero.css"
import {FiPhone} from "react-icons/fi"

export default function Hero(){
    return(
    <>
        <div className="hero-container">
            <h1 className="intro">Hi, I'm Bikalpa</h1>
            <h3 className="hero-work">Frontend Developer</h3>
            <p className="hero-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur architecto saepe quasi sit, illum adipisci, omnis cupiditate accusamus qui a nostrum non eius vitae ipsam aut ex provident ab! Iste ad quam numquam explicabo sunt culpa eius non, est quasi!</p>
            <div className="hero-contact"><a href="#contact">Contact Me <FiPhone /></a></div>
        </div>
    </>
    )
}