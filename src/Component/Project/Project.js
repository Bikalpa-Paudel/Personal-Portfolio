import "./Project.css"
import Project1 from "./subProject/Project1"

export default function Project(){
    return(
        <section id="project">
            <h1 className="project-intro">Project</h1>
            <h1 className="project-work">My Best Works</h1>
            <div className="project1">
                <Project1 />
                <Project1 />
                <Project1 />
                <Project1 />
            </div>
                
        </section>
    )
}