import "../../style/componets_style/festivalBudaya/gandrung-sewu.css";
import Ornamen from "../../assets/ornament/Ornament79.svg";
import Image from "../../assets/Festival/GandrungSewu.png";
import Union from "../../assets/ornament/Union.svg";

const GandrungSewu = () => {
    return (
        <>
            <div className="gandrung">
                <div className="col-top">
                    <div className="ornament">
                        <img src={Ornamen} alt="ornamen" />
                    </div>
                    <img src={Union} alt="" id="onion-svg" />
                    <div className="text-top">
                        <h2>2</h2>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="col-buttom">
                    <div className="bottom-text-right">
                        <div className="block-container">
                            <h1>Festival Gandrung Sewu</h1>
                            <p>Banyuwangi</p>
                        </div>
                    </div>
                    <div className="bottom-image-center">
                        <img src={Image} alt="Images" />
                    </div>
                    <div className="bottom-text-left">
                        <p>
                            Festival Tari Gandrung Sewu di Banyuwangi adalah
                            persembahan tarian tradisional yang megah dan
                            memukau.
                        </p>
                    </div>
                </div>
                <div className="col-very-bottom">
                    <p>
                        Dikenal sebagai "Sewu" yang berarti seribu, festival ini
                        menampilkan ribuan penari Gandrung dalam harmoni gerakan
                        yang memesona.
                    </p>
                </div>
                <div className="text-mobile">
                    <p>
                            Festival Tari Gandrung Sewu di Banyuwangi adalah
                            persembahan tarian tradisional yang megah dan
                            memukau. Dikenal sebagai "Sewu" yang berarti seribu, festival ini
                        menampilkan ribuan penari Gandrung dalam harmoni gerakan
                        yang memesona.
                    </p>
                </div>
            </div>
        </>
    );
};
export default GandrungSewu;
