import "./AboutMain.css"
import aboutImage from "./programming1.png"
import myCV from "./myCV.pdf"
import {FaUserGraduate, FaReact, FaLaptopCode,} from "react-icons/fa"
import {FiBarChart2} from "react-icons/fi"

export default function AboutMain(){
    return(
        <>
            <div className="about-sub-container">
                <div className="about-img"><img src={aboutImage} alt="man infront of pc" /></div>
                <div className="about-detail">
                    <p className="about-detail-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis commodi deserunt. Repellat eius praesentium accusamus assumenda mollitia esse incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, esse.</p>
                    <div className="about-detail-job">
                        <div>
                            <FaReact className="about-job-icon" />
                            <p>Frontend Developer</p>
                        </div>
                        <div>
                            <FaUserGraduate className="about-job-icon" />
                            <p>College Student</p>
                        </div>
                        <div>
                            <FaLaptopCode className="about-job-icon" />
                            <p>Tech Enthusiast</p>
                        </div>
                    </div>
                    <div className="cv"><a download href={myCV}>Download CV <FiBarChart2 /></a></div>
                </div>
            </div>
        </>
    )
}