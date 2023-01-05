import "./Home.css"
import MyImg from "./subHome/MyImg"
import Social from "./subHome/Social"
import Hero from "./subHome/Hero"

export default function Home(){
    return(
        <section id="home">
            <Social />
            <Hero />
            <MyImg />
        </section>
    )
}