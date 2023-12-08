import CardKerajinan from "./CardKerajinan";
import "../../style/componets_style/Kerajinan/Batik.css";

import ImageGajahMada from "../../assets/Kerajinan/batikGajahMada.png";
import ImageMaduraModern from "../../assets/Kerajinan/MaduraModern.png";
import ImageGedokKerek from "../../assets/Kerajinan/GedokKerek.png";
import ImageTenunTorso from "../../assets/Kerajinan/tenun_ikat_troso.png";
import ImageBlambangan from "../../assets/Kerajinan/tenun_ikat_blambangan.png";

import ImageUdeng from "../../assets/Kerajinan/Udeng.png"
import ImageCermin from "../../assets/Kerajinan/cermin.png"
import ImageEncengGondok from "../../assets/Kerajinan/EncengGondok.png"
import ImageTikar from "../../assets/Kerajinan/Tikar.png"
import ImageUkirKayu from "../../assets/Kerajinan/UkirKayu.png"

import Gmaterial from "../bundle/GoogleMaterial";

function KerajinanBenda() {
    let load = 1;
    let tab = 1
    let Dom = []
        while (load <= 7) {
            Dom[load]= document.getElementById("card2-" + String(load));
            load++;
        }
    let BtnL = document.getElementById('batik-btn-l')
    let BtnR = document.getElementById('batik-btn-r')

    function Slider(value){
        document.getElementById("batikScroll2").style.marginLeft = "-" + value + "%"
    } 
    function makeSlider(action){
        if (action == 'next'){
            switch(tab){
                case 1 : Slider(200); tab = 2;  break;
                case 2 : Slider(300); tab = 3; break;
                case 3 : Slider(400); tab = 4; break;
                case 4 : Slider(500); tab = 5; break;
            }
        }
        if (action == 'prev'){
            if (tab == 2 ) { Slider(100);  tab = 1}

            switch(tab){
                case 2 : Slider(100); tab = 1; break;
                case 3 : Slider(200); tab = 2; break;
                case 4 : Slider(300); tab = 3; break;
                case 5 : Slider(400); tab = 4; break;
            }
        }

    }
    return (
        <>
            <div className="batik-container">
                <div className="button left" id="batik-btn-l" onClick={()=>{makeSlider('prev')}}>
                    <button>
                        <Gmaterial name="navigate_next" />
                    </button>
                </div>
                <div className="button right" id="batik-btn-r">
                    <button onClick={()=>{makeSlider('next')}}>
                        <Gmaterial name="navigate_next" />
                    </button>
                </div>
                <div className="batik-scroll" id="batikScroll2">
                    <div className="batik-field" id="card2-1">
                        <CardKerajinan
                            image={ImageBlambangan}
                            name="Baju Tenun Blambangan"
                            desc="Kain tenun Blambangan merupakan hasil dari tradisi tenun ikat     khas dari Bondowoso, Jawa Timur. Kain ini memperlihatkan motif-motif yang terinspirasi dari alam, budaya, dan sejarah lokal. Tenunan ini mencerminkan kekayaan warisan budaya daerah tersebut dengan corak yang unik dan kaya makna, sering kali dihasilkan melalui teknik ikat yang rumit dan teliti."
                        />
                    </div>
                    <div className="batik-field " id="card2-2">
                        <CardKerajinan
                            image={ImageUdeng}
                            name="Udeng Surabaya"
                            desc="Udeng khas Surabaya adalah penutup kepala tradisional terbuat dari kain batik berwarna cerah dengan beragam motif. Bentuknya seperti topi pet tegak, bagian depan timbul ke atas. Dipakai miring ke belakang dan dihiasi renda, berfungsi melindungi kepala dari panas. Udeng Surabaya merupakan identitas budaya lokal yang kerap dikenakan penari remo dan pengantin perempuan Jawa."
                        />
                    </div>
                    <div className="batik-field" id="card2-3">
                        <CardKerajinan
                            image={ImageCermin}
                            name="Cermin Hias Kenjeran"
                            desc="Cermin hias Kenjeran adalah produk kerajinan yang khas dari daerah Kenjeran, Surabaya, Jawa Timur. Cermin ini sering dihias dengan ukiran-ukiran halus, dekoratif, dan motif-motif khas yang mencerminkan keindahan seni lokal. Biasanya, cermin hias Kenjeran memiliki kerangka yang dihiasi dengan ukiran kayu atau anyaman rotan yang menciptakan tampilan yang elegan dan menarik. Kerajinan ini merupakan bagian penting dari warisan budaya seni rupa Surabaya."
                        />
                    </div>
                    <div className="batik-field" id="card2-4">
                        <CardKerajinan
                            image={ImageEncengGondok}
                            name="Anyaman Enceng Gondok"
                            desc="Anyaman enceng gondok khas Pasuruan, Jawa Timur, melibatkan teknik anyaman dari tanaman enceng gondok yang tumbuh subur di daerah tersebut. Produk anyaman ini sering kali berupa keranjang, tas, atau produk kerajinan lainnya. Anyaman enceng gondok Pasuruan memiliki ciri khas pola dan desain yang unik, mencerminkan keindahan seni tradisional serta kearifan lokal masyarakat Pasuruan dalam mengolah bahan alam menjadi produk yang bernilai dan fungsional."
                        />
                    </div>
                    <div className="batik-field" id="card2-5">
                        <CardKerajinan
                            image={ImageTikar}
                            name="Tikar Pandan Khas Jombang"
                            desc="Tikar pandan khas Jombang ini memiliki perbedaan dengan tikar pandan dari daerah lain. Perbedaan tersebut biasanya terletak pada  teknik rajut yang berbeda dan cara pengolahan daun yang berbeda. Selain itu tikar pandan Khas Jombang juga memiliki corak yang berbeda, tikar pandan Khas Jombang biasanya bermotif polosan warna yang muncul alami dari daun pandan tersebut, karakteristik bahan yang digunakan juga berbeda hal tersebut sangat berpengaruh dalam kekuatan dan tekstur pada tikar."
                        />
                    </div>
                    <div className="batik-field" id="card2-6">
                        <CardKerajinan
                            image={ImageUkirKayu}
                            name="Ukiran Kayu Khas Jember"
                            desc="Tikar pandan khas Jombang ini memiliki perbedaan dengan tikar pandan dari daerah lain. Perbedaan tersebut biasanya terletak pada  teknik rajut yang berbeda dan cara pengolahan daun yang berbeda. Selain itu tikar pandan Khas Jombang juga memiliki corak yang berbeda, tikar pandan Khas Jombang biasanya bermotif polosan warna yang muncul alami dari daun pandan tersebut, karakteristik bahan yang digunakan juga berbeda hal tersebut sangat berpengaruh dalam kekuatan dan tekstur pada tikar."
                        />
                    </div>
                    <div className="batik-field" id="card2-7">
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

export default KerajinanBenda;
