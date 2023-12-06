import HeroSection from "../Components/HeroSection";
import AboutKesenian from "../Components/Home/AboutKesenian";
import DestinasiBudaya from "../Components/Home/DestinasiBudaya";
import ExplorasiBudaya from "../Components/Home/ExplorasiBudaya";
import ExplorasiKuliner from "../Components/Home/ExplorasiKuliner";
import HomeAbout from "../Components/Home/HomeAbout";
import FestivalBudaya from "../Components/Home/FestivalBudaya";
import Navbar from "../Components/Navbar";
import Title from "../Components/title";
import KerajinanTangan from "../Components/Home/KerajinanTangan";

const Home = () => {

    return (
        <>
            <Title string="Indonesian Culture | HomePage" />
            <Navbar />
            <HeroSection />
            <HomeAbout />
            <ExplorasiBudaya />
            <DestinasiBudaya />
            <AboutKesenian />
            <DestinasiBudaya />
            <ExplorasiKuliner />
            <FestivalBudaya />
            <KerajinanTangan />
        </>
    );
};

export default Home;
