import "./Project1.css"

export default function Project1(props){

    return(
        <>
           <div className="project-demo">
                <div className="allProjects">
                    <img src={props.img} alt="project sample" className="projectImage" />
                    <div className="project-content">
                        <h1 className="name">{props.name}</h1>
                        <p className="project-description">{props.description}</p>
                        <div className="source-btn">
                            <div className="live-demo-btn">Live Demo</div>
                            <div className="source-code-btn">Source Code</div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
} 