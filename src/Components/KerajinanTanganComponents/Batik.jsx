import CardKerajinan from "./CardKerajinan";
import "../../style/componets_style/Kerajinan/Batik.css";

import ImageGajahMada from "../../assets/Kerajinan/batikGajahMada.png";
import ImageMaduraModern from "../../assets/Kerajinan/MaduraModern.png";
import ImageGedokKerek from "../../assets/Kerajinan/GedokKerek.png";
import ImageTenunTorso from "../../assets/Kerajinan/tenun_ikat_troso.png";
import ImageBlambangan from "../../assets/Kerajinan/tenun_ikat_blambangan.png";
import Gmaterial from "../bundle/GoogleMaterial";

function KerajinanBatik() {
    let load = 1;
    let tab = 1
    let Dom = []
        while (load <= 7) {
            Dom[load]= document.getElementById("card-" + String(load));
            load++;
        }

    function Slider(mLeft,on,mRight,rmLeft,rmRight,value){
        document.getElementById("batikScroll").style.marginLeft = "-" + value + "%"
    } 
    function makeSlider(action){
        if (action == 'next'){
            if(tab == 1){
                Slider(2,3,4,1,3,180);
                tab = 2
            }
        }
        if (action == 'prev'){
            if (tab == 2 ) { Slider(1,2,3,2,4,100);  tab = 1}
        }
    }
    
    return (
        <>
            <div className="batik-container">
                <div className="button left" onClick={()=>{makeSlider('next')}}>
                    <button>
                        <Gmaterial name="navigate_next" />
                    </button>
                </div>
                <div className="button right">
                    <button onClick={()=>{makeSlider('prev')}}>
                        <Gmaterial name="navigate_next" />
                    </button>
                </div>
                <div className="batik-scroll" id="batikScroll">
                    <div className="batik-field" id="card-1">
                        <CardKerajinan
                            image={ImageBlambangan}
                            name="Baju Tenun Blambangan"
                            desc="Kain tenun Blambangan merupakan hasil dari tradisi tenun ikat     khas dari Bondowoso, Jawa Timur. Kain ini memperlihatkan motif-motif yang terinspirasi dari alam, budaya, dan sejarah lokal. Tenunan ini mencerminkan kekayaan warisan budaya daerah tersebut dengan corak yang unik dan kaya makna, sering kali dihasilkan melalui teknik ikat yang rumit dan teliti."
                        />
                    </div>
                    <div className="batik-field " id="card-2">
                        <CardKerajinan
                            image={ImageGajahMada}
                            name="Baju Batik Gajah Mada"
                            desc="Batik Gajah Mada berasal dari daerah Tulungagung, Jawa Timur. Batik ini merupakan varian batik yang terinspirasi dari tokoh sejarah, Gajah Mada, serta kejayaan masa lalu Indonesia. Motifnya sering menggambarkan tokoh-tokoh sejarah atau elemen-elemen budaya Nusantara yang kuat. Batik ini menggabungkan corak tradisional dengan elemen-elemen yang menggambarkan kejayaan masa lampau, menciptakan karya yang sarat akan nilai sejarah dan kebanggaan nasional."
                        />
                    </div>
                    <div className="batik-field" id="card-3">
                        <CardKerajinan
                            image={ImageMaduraModern}
                            name="Batik Madura Modern"
                            desc="Batik Madura modern sering menggabungkan motif-motif tradisional Batik Madura dengan sentuhan modern dalam desainnya. Madura modern menggunakan warna-warna yang lebih cerah dan kontras serta memadukan dengan elemen-elemen desain yang lebih kontemporer. Desainnya beragam, bisa jadi lebih minimalis, dengan permainan warna yang lebih modern, atau bisa juga menggabungkan motif tradisional dengan elemen-elemen modern dengan pola yang lebih dinamis."
                        />
                    </div>
                    <div className="batik-field" id="card-4">
                        <CardKerajinan
                            image={ImageGedokKerek}
                            name="Baju Batik Gedog Kerek"
                            desc="Batik Gedog Kerek merupakan batik khas yang berasal dari daerah Ponorogo, Jawa Timur, memiliki pola geometris teratur seperti lingkaran dan segi empat dengan kombinasi warna kontras. Motif-motif pada batik ini dianggap memiliki makna simbolis yang dalam dalam budaya lokal, mewakili gagasan tentang kekuatan, kesuburan, dan keselarasan. Batik Gedog Kerek merupakan bagian yang penting dari warisan kultural Ponorogo dan menampilkan keahlian dan keindahan dari kerajinan tradisional Jawa Timur."
                        />
                    </div>
                    <div className="batik-field" id="card-5">
                        <CardKerajinan
                            image={ImageTenunTorso}
                            name="Baju Tenun Ikat Troso"
                            desc="Tenun Troso adalah tenun ikat khas dari daerah Troso, Lamongan, Jawa Timur. Kain tenun Troso terkenal dengan motif yang kaya dan warna-warna yang cerah.Teknik ikatnya yang rumit menciptakan pola yang jelas dan tajam pada kain. Motifnya terinspirasi dari alam dan geometri, menambah keunikan visual pada kain ini. Keindahan motifnya dan teknik pembuatannya yang rumit menjadi daya tarik utama dari kain tenun Troso dari Lamongan."
                        />
                    </div>
                    <div className="batik-field" id="card-6">
                        <CardKerajinan
                            image={ImageBlambangan}
                            name="Baju Tenun Blambangan"
                            desc="Kain tenun Blambangan merupakan hasil dari tradisi tenun ikat     khas dari Bondowoso, Jawa Timur. Kain ini memperlihatkan motif-motif yang terinspirasi dari alam, budaya, dan sejarah lokal. Tenunan ini mencerminkan kekayaan warisan budaya daerah tersebut dengan corak yang unik dan kaya makna, sering kali dihasilkan melalui teknik ikat yang rumit dan teliti."
                        />
                    </div>
                    <div className="batik-field" id="card-7">
                        <CardKerajinan
                            image={ImageGajahMada}
                            name="Baju Batik Gajah Mada"
                            desc="Batik Gajah Mada berasal dari daerah Tulungagung, Jawa Timur. Batik ini merupakan varian batik yang terinspirasi dari tokoh sejarah, Gajah Mada, serta kejayaan masa lalu Indonesia. Motifnya sering menggambarkan tokoh-tokoh sejarah atau elemen-elemen budaya Nusantara yang kuat. Batik ini menggabungkan corak tradisional dengan elemen-elemen yang menggambarkan kejayaan masa lampau, menciptakan karya yang sarat akan nilai sejarah dan kebanggaan nasional."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default KerajinanBatik;
