import "./Navbar.css"
import {BiMoon, BiSun} from "react-icons/bi"

export default function Navbar(props){
    const navBackground = {
        backgroundColor : (props.darkMode ? "#131313"  : "#FFFFFF")
    }
    const linkColor={
        color : (props.darkMode ? "white" : "black") 
    }
    return(
        <header className="header" style={navBackground}>
            <nav className="nav">
                <div className="logo">Bikalpa-Paudel</div>
                <ul>
                    <li><a style={linkColor} href="#main">Home</a></li>
                    <li><a style={linkColor} href="#about">About</a></li>
                    <li><a style={linkColor} href="#experience">Experience</a></li>
                    <li><a style={linkColor} href="#project">Project</a></li>
                    <li><a style={linkColor} href="#contact">Contact</a></li>
                    <li onClick={props.colorToggle} title={props.darkMode ? "Enable Light Mode" : "Enable Dark Mode"} id="darkmode">{!props.darkMode ? <BiMoon /> : <BiSun />}</li>
                </ul>
            </nav>
        </header>
    )
}