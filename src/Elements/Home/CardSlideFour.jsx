import "../../css/Home/card-slide-four.css";
import CardButton from "../../assets/HomeElements/arrow_back.svg";
import CardElement from "./CardElement";
import GandrungSewu from "../../assets/HomeElements/FestivalImage/fest1.png";
import KebayaBanyuwangi from "../../assets/HomeElements/FestivalImage/fest2.png";
import BatikProbolingo from "../../assets/HomeElements/FestivalImage/fest3.png";
import ReogPonorogo from "../../assets/HomeElements/FestivalImage/fest4.png";

export default function CardSlideFour() {
    return (
        <>
            <div className="card-title">
                <h1>Gelaran Budaya Jawa Timur</h1>
            </div>
            <div className="card-slide-four">
                <div className="card-slide">
                    <div className="card-button">
                        <img src={CardButton} alt="" />
                        <img src={CardButton} alt="" />
                    </div>
                    <div className="field-content">
                        <CardElement
                            image={GandrungSewu}
                            tanggal="22 DESEMBER 2023"
                            tittle="FESTIVAL GANDRUNG SEWU"
                        />
                        <CardElement
                            image={KebayaBanyuwangi}
                            tanggal="22 DESEMBER 2023"
                            tittle="FESTIVAL KEBAYA BANYUWANGI"
                        />
                        <CardElement
                            image={BatikProbolingo}
                            tanggal="22 DESEMBER 2023"
                            tittle="FESTIVAL BATIK PROBOLINGGO"
                        />
                        <CardElement
                            image={ReogPonorogo}
                            tanggal="22 DESEMBER 2023"
                            tittle="FESTIVAL  REOG PONOROGO"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
