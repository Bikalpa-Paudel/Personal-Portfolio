import "./About.css"
import AboutMain from "./subAbout/AboutMain"


export default function About(){
    return(
        <section id="about">
            <h1 className="about-intro">About Me</h1>
            <h3 className="about-job">Who I am?</h3>
            <AboutMain />
        </section>
        
    )
}