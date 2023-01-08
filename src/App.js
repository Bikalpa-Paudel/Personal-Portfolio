import {useState, useEffect} from "react"
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function darkModeToggle(){
    setDarkMode(prevMode => !prevMode);
  }

  useEffect(()=>{

    if(darkMode){
      document.body.style.backgroundColor = "#131313"
      document.body.style.color = "white"
    }
    else{
      document.body.style.backgroundColor = "hsl(142, 60%, 99%)"
      document.body.style.color = "black"
    }
  }, [darkMode])

  return (
    <div className="App"  id='main'>
      <Navbar darkMode={darkMode} colorToggle={darkModeToggle} />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
