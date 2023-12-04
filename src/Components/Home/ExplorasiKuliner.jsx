import LargeCardKuliner from "../bundle/LargeCardKuliner";
import "../../style/componets_style/explorasiKuliner.css";
import Gmaterial from "../bundle/GoogleMaterial";

import RujakCingur from "../../assets/kuliner/HomeRujakCingur.png";
import SegoTempong from "../../assets/kuliner/SegoTempong.png";
import LontongKupang from "../../assets/kuliner/LontongKupang.png";
import KueManco from "../../assets/kuliner/KueManco.png";

const ExplorasiKuliner = () => {
  return (
    <>
      <div className="explore-kuliner">
        <h1>Explorasi Kuliner Lokal</h1>
        <div className="con-explore">
          <div className="container-buuton">
            <div className="btn-next kiwo">
              <Gmaterial name="navigate_next" />
            </div>
          </div>
          <div className="container-buuton tengen">
            <a className="btn-next">
              <Gmaterial name="navigate_next" />
            </a>
          </div>
          <div className="con-content-explore">
            <div className="content-explore">
              <div className="content">
                <LargeCardKuliner
                  image={RujakCingur}
                  name="Rujak Cingur"
                  location="Surabaya"
                  desc="Rujak cingur adalah hidangan khas Jawa Timur yang terdiri dari irisan sayuran, seperti timun, kangkung, dan tauge, yang disajikan dengan bumbu kacang dan potongan cingur (hidung sapi yang direbus). Semua bahan ini dicampur dengan saus kacang yang khas, menciptakan perpaduan cita rasa gurih, pedas, dan segar."
                />
              </div>
            </div>
            <div className="content-explore">
              <div className="content">
                <LargeCardKuliner
                  image={SegoTempong}
                  name="Sego Tempong"
                  location="Banyuwangi"
                  desc="Sego Tempong adalah hidangan khas Banuwangi yang terdiri dari nasi putih yang disajikan dengan sambal pedas sebagai bumbu utamanya. Sambalnya terbuat dari campuran cabai rawit, terasi, garam, dan bawang merah yang diulek hingga halus. Hidangan ini dikenal karena tingkat kepedasannya yang cukup tinggi dan menjadi favorit bagi pecinta makanan pedas."
                />
              </div>
            </div>
            <div className="content-explore">
              <div className="content">
                <LargeCardKuliner
                  image={LontongKupang}
                  name="Lontong Kupang"
                  location="Sidoarjo"
                  desc="Lontong kupang adalah hidangan tradisional dari Indonesia, terutama Jawa Timur. Terdiri dari lontong (nasi padat) dan kupang (kerang kecil), direbus atau dikukus. Disajikan dengan kuah santan dan rempah, serta tambahan seperti tauge, seledri, bawang goreng, dan sambal. Hidangan ini memiliki cita rasa khas Indonesia."
                />
              </div>
            </div>
            <div className="content-explore">
              <div className="content">
                <LargeCardKuliner
                  image={KueManco}
                  name="Lontong Kupang"
                  location="Sidoarjo"
                  desc="Lontong kupang adalah hidangan tradisional dari Indonesia, terutama Jawa Timur. Terdiri dari lontong (nasi padat) dan kupang (kerang kecil), direbus atau dikukus. Disajikan dengan kuah santan dan rempah, serta tambahan seperti tauge, seledri, bawang goreng, dan sambal. Hidangan ini memiliki cita rasa khas Indonesia."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorasiKuliner;
