import HeroSection from "../Components/HeroSection";
import HomeAbout from "../Components/Home/HomeAbout";
import LoginContainer from "../Components/LoginContainer";
import Navbar from "../Components/Navbar";
import Title from "../Components/title";
import CardSlideFour from "../Elements/Home/CardSlideFour";
import Footer from "../Components/bundle/Footer.jsx";

const HomePage = () => {
    return (
        <>
            {/* <Title string="East Java Culture | HomePage" />
            <LoginContainer />
            <Navbar noGray={true}/>
            <HeroSection />
            <HomeAbout /> */}
            <CardSlideFour />
            {/* <Footer /> */}
        </>
    );
};
export default HomePage;
