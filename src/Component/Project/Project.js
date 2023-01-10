import "./Project.css"
import Project1 from "./subProject/Project1"
import projectData from "./ProjectData"


export default function Project(){
    const projectArray = projectData.map(item => <Project1 id={projectData.id} />)
    return(
        <section id="project">
            <h1 className="project-intro">Project</h1>
            <h1 className="project-work">My Best Works</h1>
            <div className="project1">
                {projectArray}
            </div>
                
        </section>
    )
}