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
                <div className="footer-container">
                    <div className="image-footer">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="text-left">
                        <div className="text-left-field">
                            <p>
                                Kami senang anda mengunjungi website kami yang
                                menyajikan informasi jadwal festival budaya Jawa
                                Timur. Fokus kami pada seni, destinasi wisata,
                                kerajinan tangan, dan gaya hidup tradisional di
                                Jawa Timur. Semoga informasi yang kami sajikan
                                dapat memberikan wawasan yang berharga untuk
                                anda!
                            </p>
                            <div className="line"><img src={Ornamen} alt="" /></div>
                            <div className="footer-bottom">
                                <span>Hak Cipta &copy; 2023 SMK PGRI PLOSO </span>
                                <div className="social">
                                    <p>Ikuti Social Media Kami</p>
                                    <div className="social-icon">
                                        <a href="mailto:cultureeastjava@gmail.com"><img src={iGoogle} alt="logo" /></a>
                                        <a href="https://www.youtube.com/@smkpgriploso6327" target="_blank"><img src={iYoutube} alt="logo" /></a>
                                        <a href="https://www.facebook.com/profile.php?id=61554720876795" target="_blank"><img src={iFacebook} alt="logo" /></a>
                                        <a href="https://www.instagram.com/eastjavaculture?igsh=YzAwZjE1ZTI0Zg" target="_blank"><img src={iInstagram} alt="logo" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};


export default Footer;
