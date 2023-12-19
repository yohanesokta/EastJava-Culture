import "../../style/explorasiBudaya.css";
import Element2 from "../../assets/element-2.png";
import image_1 from "../../assets/image-x5.png";
import image_2 from "../../assets/image-x6.png";
import image_3 from "../../assets/image-x7.png";

export default function ExplorasiBudaya() {
  return (
    <>
      <div className="explorasi-budaya">
        <div className="images-container">
          <div className="images">
            <img src={image_1} alt="image_utama" />
            <img src={image_2} alt="image_atas" />
            <img src={image_3} alt="image_bawah" />
          </div>
        </div>
        <div className="content-container">
          <div className="content">
            <h1>EXPLORASI BUDAYA</h1>
            <p>
              Jawa Timur adalah tempat yang tepat untuk mengeksplorasi budaya.
              Dari tarian tradisional hingga kuliner khas, kita akan menemukan
              banyak hal menarik yang membuat kita terpesona
            </p>
            <div className="flex-container">
              <button>Explore Lebih Lanjut</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
