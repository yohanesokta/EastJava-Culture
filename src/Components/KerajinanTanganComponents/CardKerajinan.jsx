import "../../style/componets_style/Kerajinan/Card.css";
import Ornamen from "../../assets/ornament/sarangLebah.png"
import Image from "../../assets/Kerajinan/batikGajahMada.png"

const CardKerajinan = () => {
    return (
        <>
            <div className="example-container">
                <div className="card-container">
                    <div className="card-kerajinan">
                        <img src={Ornamen} alt="ornamen" />
                        <div className="text-right">
                            <div className="container">
                                <span>Model</span>
                                <h1>Baju Batik Gajah Mada</h1>
                                <p>Batik Gajah Mada berasal dari daerah Tulungagung, Jawa Timur. Batik ini merupakan varian batik yang terinspirasi dari tokoh sejarah, Gajah Mada, serta kejayaan masa lalu Indonesia. Motifnya sering menggambarkan tokoh-tokoh sejarah atau elemen-elemen budaya Nusantara yang kuat. Batik ini menggabungkan corak tradisional dengan elemen-elemen yang menggambarkan kejayaan masa lampau, menciptakan karya yang sarat akan nilai sejarah dan kebanggaan nasional.</p>
                            </div>
                        </div>
                        <div className="image-left">
                            <img src={Image} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardKerajinan;
