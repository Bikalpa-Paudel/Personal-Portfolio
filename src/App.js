import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';

function App() {
  return (
    <div className="App"  id='main'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
