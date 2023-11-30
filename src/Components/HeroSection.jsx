import "../style/heroSection.css";
import caroselFirst from "../assets/image-x1.png";
import caroselDwo from "../assets/image-x2.png";

export default function HeroSection() {
    return (
        <>
            <div className="carosel">
                <div className="f-carosel">
                    <img src={caroselFirst} alt="" />
                    <div className="f-carosel-center-text">
                        <h1>Explorasi Budaya Jawa Timur</h1>
                        <p>Di Setiap Detik</p>
                    </div>
                </div>
                <div className="f-carosel">
                    <img src={caroselDwo} alt="" />
                    <div className="f-carosel-left-text">
                        <h1>Mempersembahkan Keindahan dan Warisan Seni yang Abadi</h1>
                        <p>Di Jawa Timur</p>
                    </div>
                </div>
            </div>
        </>
    );
}
