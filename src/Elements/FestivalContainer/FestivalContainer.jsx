import Navbar from "../../Components/Navbar";
import Footer from "../../Components/bundle/Footer";
import imgThum from "../../assets/Festival/thumnail.png";
import "../../css/Festival/festival-container.css";
import DomSwiperBox from "./DomSwiperBox";
import Title from "../../Components/title";
const FestivalContainer = () => {
    return (
        <>
            <Title string="East Java Culture | Festival" />
            <Navbar />
            <div className="nav-gap"></div>
            <div className="festival-thumb">
                <img src={imgThum} alt="" />
                <div className="fest-thum-text">
                    <div className="text">
                        <h1>Eksplorasi Festival Budaya</h1>
                        <p>
                            Tertarik dengan keunikan budaya Jawa Timur? Temukan
                            pesona tak terbatasnya di sini! Mari bersama-sama
                            menjelajahi keeksotisan festival, mengeksplorasi
                            seni yang memikat
                        </p>
                    </div>
                </div>
            </div>
            <div className="video-title">
                <h1>Berikut Ini Adalah Festival Yang Ada Di Jawa Timur</h1>
            </div>
            <div className="swiper-video">
                <DomSwiperBox/>
            </div>
            <Footer />
        </>
    );
};
export default FestivalContainer;
