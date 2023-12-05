import "../../style/componets_style/festivalBudaya/reog.css"
import Image from "../../assets/Festival/reog.png"
import Ornam1 from "../../assets/ornament/Bulat1.svg"
import Ornam2 from "../../assets/ornament/arrow.svg"
import Ornam3 from "../../assets/ornament/doted-circle.svg"
import Ornam4 from "../../assets/ornament/line-hair.svg"

export default function ReogPonorogo(){
    return(<>
            <div className="reog">
                <img src={Ornam1} alt="" id="reog-ornam1"/>
                <img src={Ornam2} alt="" id="reog-ornam2"/>
                <img src={Ornam3} alt="" id="reog-ornam3"/>
                <img src={Ornam4} alt="" id="reog-ornam4"/>
                <div className="flex-container">
                    <div className="images">
                        <img src={Image} alt="" />
                    </div>
                </div>
                <div className="flex-container">
                    <div className="line"><span>4</span></div>
                </div>
                <div className="flex-contaner">
                    <p className="reog-paragraf"><span>Festival Nasional Reog Ponorogo</span> adalah salah satu festival tahunan yang merupakan salah satu rangkaian acara pesta rakyat Ponorogo yaitu Grebeg Suro yang dilaksanakan pada bulan Muharram. Festival Nasional Reog Ponorogo telah dilaksanakan sejak tahun 1995 1. Perayaan Grebeg Suro bersamaan dengan hari jadi Kota Ponorogo, yang telah menjadi salah satu acara yang masuk dalam kalender wisata Jawa Timur.</p>
                </div>
            </div>
    </>)

}