import "./Navbar.css"
import {BiMoon} from "react-icons/bi"

export default function Navbar(){
    return(
        <header className="header">
            <nav className="nav">
                <div className="logo">Bikalpa-Paudel</div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Project</li>
                    <li>Contact</li>
                    <li title="Enable Dark-Mode" id="darkmode"><BiMoon /></li>
                </ul>
            </nav>
        </header>
    )
}