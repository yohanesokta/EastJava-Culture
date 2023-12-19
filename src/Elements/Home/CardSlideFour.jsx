import "../../css/Home/card-slide-four.css";
import CardButton from "../../assets/HomeElements/arrow_back.svg";
import CardElement from "../Bundle/CardElement";

import GandrungSewu from "../../assets/HomeElements/FestivalImage/fest1.png";
import KebayaBanyuwangi from "../../assets/HomeElements/FestivalImage/fest2.png";
import BatikProbolingo from "../../assets/HomeElements/FestivalImage/fest3.png";
import ReogPonorogo from "../../assets/HomeElements/FestivalImage/fest4.png";
import KarapanSonok from "../../assets/HomeElements/FestivalImage/KarapanSonok.png";
import Wayang from "../../assets/HomeElements/FestivalImage/Wayang.png";
import Pandalungan from "../../assets/HomeElements/FestivalImage/pandalungan.png";
import Rontek from "../../assets/HomeElements/FestivalImage/rontek_pacitan.png";
import PetikLaut from "../../assets/HomeElements/FestivalImage/PetikLaut.png";
import KarapanSapi from "../../assets/HomeElements/FestivalImage/KarapanSapi.png";
import Kenduren from "../../assets/HomeElements/FestivalImage/Kenduren.png";
import JemberFasion from "../../assets/HomeElements/FestivalImage/JemberFasion.png";
import BtnControl from "../Bundle/BtnControl";

export default function CardSlideFour() {
    return (
        <>
            <div className="card-title">
                <h1>Gelaran Budaya Jawa Timur</h1>
            </div>
            <div className="card-slide-four">
                <div className="card-slide">
                    <div className="card-button">
                        <img
                            src={CardButton}
                            alt=""
                            onClick={() => {
                                BtnControl("kanan", 12);
                            }}
                        />
                        <img
                            src={CardButton}
                            alt=""
                            onClick={() => {
                                BtnControl("kiri", 12);
                            }}
                        />
                    </div>
                    <div className="container-field" id="container-content">
                        <div className="field-content" id="longkonten">
                            <CardElement
                                image={GandrungSewu}
                                tanggal="14-16 Sep 2023"
                                red={true}
                                link={"/event/kalender/GandrungSewu"}
                                tittle="FESTIVAL GANDRUNG SEWU"
                            />
                            <CardElement
                                image={Wayang}
                                red={true}
                                link={"/event/kalender/Wayang"}
                                tanggal="5 November 2023"
                                tittle="FESTIVAL WAYANG KULIT"
                            />
                            <CardElement
                                red={true}
                                image={Rontek}
                                link={"/event/kalender/RontekPacitan"}
                                tanggal="18-19 Nov 2023"
                                tittle="FESTIVAL RONTEK PACITAN"
                            />
                            <CardElement
                                image={Pandalungan}
                                red={true}
                                link={"/event/kalender/Pandalungan"}
                                tanggal="21 Oktober 2023"
                                tittle="FESTIVAL PANDALUNGAN"
                            />
                            {/* End 4 */}
                            <CardElement
                                image={KebayaBanyuwangi}
                                tanggal="Comming Soon"
                                red={true}
                                link={"/event/comming/Kebaya"}
                                tittle="FESTIVAL KEBAYA BANYUWANGI"
                            />
                            <CardElement
                                image={BatikProbolingo}
                                tanggal="Comming Soon"
                                link={"/event/comming/Batik"}
                                red={true}
                                tittle="FESTIVAL BATIK PROBOLINGGO"
                            />
                            <CardElement
                                image={ReogPonorogo}
                                link={"/event/comming/Reog"}
                                red={true}
                                tanggal="Comming Soon"
                                tittle="FESTIVAL  REOG PONOROGO"
                            />

                            <CardElement
                                image={KarapanSonok}
                                link={"/event/comming/Sapi"}
                                tanggal="Comming Soon"
                                red={true}
                                tittle="FESTIVAL SAPI SONOK MADURA"
                            />

                            {/* END 8 */}
                            <CardElement
                                red={true}
                                image={PetikLaut}
                                tanggal="Comming Soon"
                                tittle="FESTIVAL PETIK 
                                LAUT"
                                link={"/event/comming/PetikLaut"}
                            />
                            <CardElement
                                red={true}
                                image={Kenduren}
                                tanggal="Comming Soon"
                                link={"/event/comming/Kenduren"}
                                tittle="FESTIVAL KENDUREN JOMBANG"
                            />

                            <CardElement
                                image={KarapanSapi}
                                link={"/event/gallery/karapan"}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL KARAPAN SAPI"
                            />
                            <CardElement
                                image={JemberFasion}
                                link={"/event/gallery/jember"}
                                tanggal="22 DESEMBER 2023"
                                tittle="JEMBER FASHION CARNAVAL"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
