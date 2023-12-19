import "../../css/Home/card-slide-four.css";

import CardButton from "../../assets/HomeElements/arrow_back.svg";
import CardElement from "../Bundle/CardElementDestinasi";
import GandrungSewu from "../../assets/HomeElements/FestivalImage/fest1.png";
import Image1 from "../../assets/Destinasi/T1.png"
import Image2 from "../../assets/Destinasi/T14.png"
import Image3 from "../../assets/Destinasi/T25.png"
import Image4 from "../../assets/Destinasi/T24.png"
import Image5 from "../../assets/Destinasi/T26.png"
import Image6 from "../../assets/Destinasi/T12.png"
import Image7 from "../../assets/Destinasi/T15.png"
import Image8 from "../../assets/Destinasi/T18.png"

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
                        <img src={CardButton} alt="" onClick={() => { BtnControl('kanan', 8) }} />
                        <img src={CardButton} alt="" onClick={() => { BtnControl('kiri', 8) }} />
                    </div>
                    <div className="container-field" id="container-content">
                        <div className="field-content" id='longkonten'>
                            <CardElement
                                image={Image1}
                                link="/destinasi/Surabaya"
                                tittle="Kota Surabaya"
                            />
                            <CardElement
                                image={Image2}
                                link={"/destinasi/Jombang"}
                                tittle="Kota Jombang"
                            />
                            <CardElement
                                image={Image3}
                                link={"/destinasi/Blitar"}
                                tittle="Kabupaten Blitar"
                            />
                            <CardElement
                                image={Image4}
                                link={"/destinasi/Mojokerto"}
                                tittle="Kota Madiun"
                            />
                            <CardElement
                                image={Image5}
                                link={"/destinasi/Malang"}
                                tittle="Kota Malang"
                            />
                            <CardElement
                                image={Image6}
                                link={"/destinasi/Probolinggo"}
                                tittle="Probolinggo"
                            />
                            <CardElement
                                image={Image7}
                                link={"/destinasi/Jember"}
                                tittle="Jember"
                            />
                            <CardElement
                                image={Image8}
                                link={"/destinasi/Pamekasan"}
                                tittle="Pamekasan"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
