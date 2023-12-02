import HeroSection from "../Components/HeroSection"
import ExplorasiBudaya from "../Components/Home/ExplorasiBudaya"
import HomeAbout from "../Components/Home/HomeAbout"
import Navbar from "../Components/Navbar"
import Title from "../Components/title"

const Home = () =>{
    return (
        <>
            <Title string="Indonesian Culture | HomePage"/>
            <Navbar />
            <HeroSection />
            <HomeAbout />
            <ExplorasiBudaya />
        </>
     )
}

export default Home
