import "../../css/Home/card-slide-four.css";
import CardButton from "../../assets/HomeElements/arrow_back.svg";
import CardElement from "../Bundle/CardElement";


import GandrungSewu from "../../assets/HomeElements/FestivalImage/fest1.png";
import KebayaBanyuwangi from "../../assets/HomeElements/FestivalImage/fest2.png";
import BatikProbolingo from "../../assets/HomeElements/FestivalImage/fest3.png";
import ReogPonorogo from "../../assets/HomeElements/FestivalImage/fest4.png";
import KarapanSonok from "../../assets/HomeElements/FestivalImage/KarapanSonok.png"
import Wayang from "../../assets/HomeElements/FestivalImage/Wayang.png"
import Pandalungan from "../../assets/HomeElements/FestivalImage/pandalungan.png"
import Rontek from "../../assets/HomeElements/FestivalImage/rontek_pacitan.png"
import PetikLaut from "../../assets/HomeElements/FestivalImage/PetikLaut.png"
import KarapanSapi from "../../assets/HomeElements/FestivalImage/KarapanSapi.png"
import Kenduren from "../../assets/HomeElements/FestivalImage/Kenduren.png"
import JemberFasion from "../../assets/HomeElements/FestivalImage/JemberFasion.png"
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
                        <img src={CardButton} alt="" onClick={() => { BtnControl('kanan', 12) }} />
                        <img src={CardButton} alt="" onClick={() => { BtnControl('kiri', 12) }} />
                    </div>
                    <div className="container-field" id="container-content">
                        <div className="field-content" id='longkonten'>
                            <CardElement
                                image={GandrungSewu}
                                tanggal="22 DESEMBER 2023"
                                red={true}
                                link={'/ivent/Kalender'}
                                tittle="FESTIVAL GANDRUNG SEWU"
                            />
                             <CardElement
                                image={Wayang}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL WAYANG KULIT"
                            />
                             <CardElement
                                image={Rontek}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL RONTEK PACITAN"
                            />
                             <CardElement
                                image={Pandalungan}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL PANDALUNGAN"
                            />
                            <CardElement
                                image={KebayaBanyuwangi}
                                tanggal="22 DESEMBER 2023"
                                red={true}
                                link={'/ivent/Gallery'}
                                tittle="FESTIVAL KEBAYA BANYUWANGI"
                            />
                            <CardElement
                                image={BatikProbolingo}
                                tanggal="22 DESEMBER 2023"
                                red={true}
                                tittle="FESTIVAL BATIK PROBOLINGGO"
                            />
                            <CardElement
                                image={ReogPonorogo}
                                red={true}
                                tanggal="Comming Soon"
                                tittle="FESTIVAL  REOG PONOROGO"
                            />

                            <CardElement
                                image={KarapanSonok}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL SAPI SONOK MADURA"
                            />
                           
                           
                           
                            {/* END 8 */}
                            <CardElement
                                image={PetikLaut}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL PETIK 
                                LAUT"
                            />
                            <CardElement
                                image={KarapanSapi}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL KARAPAN SAPI"
                            />
                            <CardElement
                                image={Kenduren}
                                tanggal="22 DESEMBER 2023"
                                tittle="FESTIVAL KENDUREN JOMBANG"
                            />
                            <CardElement
                                image={JemberFasion}
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
