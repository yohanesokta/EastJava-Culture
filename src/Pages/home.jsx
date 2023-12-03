import HeroSection from "../Components/HeroSection"
import AboutKesenian from "../Components/Home/AboutKesenian"
import DestinasiBudaya from "../Components/Home/DestinasiBudaya"
import ExplorasiBudaya from "../Components/Home/ExplorasiBudaya"
import ExplorasiKuliner from "../Components/Home/ExplorasiKuliner"
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
            <DestinasiBudaya />
            <AboutKesenian />
            <DestinasiBudaya />

            <ExplorasiKuliner />
        </>
     )
}

export default Home
