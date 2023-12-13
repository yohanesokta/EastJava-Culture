import "../../style/componets_style/footer.css";
import Logo from "../../assets/logo.png";
import Ornamen from "../../assets/ornament/triple-dot.svg";
import Gmaterial from "./GoogleMaterial";

import iFacebook from "../../assets/SosialMedia/facebook.svg";
import iGoogle from "../../assets/SosialMedia/google_plus.svg";
import iInstagram from "../../assets/SosialMedia/instagram.svg";
import iYoutube from "../../assets/SosialMedia/youtube.svg";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="logo">
                    <div className="col-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <p>Hak Cipta &copy; 2023 Indonesian Culture</p>
                </div>
                <div className="left-container">
                    <div className="l-top">
                        <div className="left">
                            <a href="">
                                Info Lebih Lanjut{" "}
                                <Gmaterial name="navigate_next" />
                            </a>
                        </div>
                        <div className="right">
                            <div className="con">
                                <p>Ikuti sosial media kami</p>
                                <div className="linked">
                                    <a href="">
                                        <img src={iGoogle} alt="image" />
                                    </a>
                                    <a href="">
                                        <img src={iYoutube} alt="image" />
                                    </a>
                                    <a href="">
                                        <img src={iFacebook} alt="image" />
                                    </a>
                                    <a href="">
                                        <img src={iInstagram} alt="image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <img src={Ornamen} alt="" />
                    </div>
                    <div className="l-bottom">
                        <div className="container-lbottom">
                            <span>Yohanes Oktanio</span>
                            <span>Krismalia Chelin Cesyanti</span>
                            <span>Mohammad Ainur Rofiq</span>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer">
                <div className="flex-container">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="name">
                    <p>Yohanes Oktanio</p>
                    <p>Krismalia Chelin Cesyanti</p>
                    <p>Mohammad Ainur Rofiq</p>
                </div>
                <div className="con">
                    <p>Ikuti sosial media kami</p>
                    <div className="linked">
                        <a href="">
                            <img src={iGoogle} alt="image" />
                        </a>
                        <a href="">
                            <img src={iYoutube} alt="image" />
                        </a>
                        <a href="">
                            <img src={iFacebook} alt="image" />
                        </a>
                        <a href="">
                            <img src={iInstagram} alt="image" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
