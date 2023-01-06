import "./Navbar.css"
import {BiMoon} from "react-icons/bi"

export default function Navbar(){
    return(
        <header className="header">
            <nav className="nav">
                <div className="logo">Bikalpa-Paudel</div>
                <ul>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li title="Enable Dark-Mode" id="darkmode"><BiMoon /></li>
                </ul>
            </nav>
        </header>
    )
}