import ExplorasiKuliner from "../../Components/Home/ExplorasiKuliner";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/bundle/Footer";
import "../../css/Home/Kuliner.css";
import IMG from "../../assets/HomeElements/kuliner.jpg";
export default function Kuliner() {
    return (
        <>
            <Navbar />
            <div className="nav-gap"></div>
            <div className="image-kuliner">
                <img src={IMG} alt="" />
                <div className="image-kuliner-text">
                    <p>
                        "Rasakan Kelezatan Sejati: Petualangan Kuliner yang
                        Mencerahkan dari Jawa Timur."
                    </p>
                </div>
            </div>
            <ExplorasiKuliner />
            <Footer />
        </>
    );
}
