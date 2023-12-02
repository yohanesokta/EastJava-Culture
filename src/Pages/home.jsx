import HeroSection from "../Components/HeroSection"
import HomeAbout from "../Components/HomeAbout"
import Navbar from "../Components/Navbar"
import Title from "../Components/title"

const Home = () =>{
    return (
        <>
            <Title string="Indonesian Culture | HomePage"/>
            <Navbar />
            <HeroSection />
            <HomeAbout />
        </>
     )
}

export default Home
