import "../../style/componets_style/destinasiBudaya.css";
import CardSlider from "../bundle/Card-slider";

import imageSurabaya from "../../assets/destinasi/surabaya.png";
import imageJombang from "../../assets/destinasi/jombang.png"
import imageBlitar from "../../assets/destinasi/blitar.png"
import imageMadiun from "../../assets/destinasi/madiun.png"
import imageMalang from "../../assets/destinasi/malang.png"
import imageNganjuk from "../../assets/destinasi/nganjuk.png"
import imagePasuruan from "../../assets/destinasi/pasuruan.png"

export default function DestinasiBudaya() {
  return (
    <>
      <div className="desBudaya">
        <div className="flex-container">
          <h1>Destinasi Budaya Jawa Timur</h1>
        </div>
        <div className="slider-scrolling">
          <div className="slider-container">
            <CardSlider image={imageSurabaya} text="Kota Surabaya"/>
            <CardSlider image={imageJombang} text="Kota Jombang" />
            <CardSlider image={imageBlitar} text="Kota Blitar" />
            <CardSlider image={imageMadiun} text="Kota Madiun" />
            <CardSlider image={imageMalang} text="Kota Malang" />
            <CardSlider image={imageNganjuk} text="Kota Nganjuk" />
            <CardSlider image={imagePasuruan} text="Kota Pasuruan" />
          </div>
        </div>
      </div>
    </>
  );
}
