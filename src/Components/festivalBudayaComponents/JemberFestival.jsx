import "../../style/componets_style/festivalBudaya/jember-fest.css"
import Ornamen from "../../assets/ornament/line-hair2.svg"
import Ornamen2 from "../../assets/ornament/line-hair3.svg"
import OrnamenDoted from "../../assets/ornament/doted.svg"
import Ornamen3 from "../../assets/ornament/x-frame.svg"
import Image from "../../assets/Festival/Jember.png"

export default function JemberFestival(){

return(<>
    <div className="jember-fest">
        <img src={Ornamen} alt="" className="ornament1" />
        <img src={OrnamenDoted} alt="" className="ornament2" />
        <img src={Ornamen2} alt="" className="ornamen3" />
        <img src={Ornamen3} alt="" className="ornamen4" />
        <img src={Ornamen3} alt="" className="ornamen5" />

            <div className="flex-container">
                <div className="text-right">
                    <div className="line"><span>3</span></div>
                    <h1>Jember Fashion Carnaval</h1>
                    <h2>Jember</h2>
                    <p>Jember Fashion Carnival di Jawa Timur adalah panggung megah di mana mode bertemu seni pertunjukan. Merupakan peristiwa tahunan yang menghipnotis, carnival ini menampilkan busana spektakuler dengan ornamen kreatif dan konsep visual yang luar biasa.</p>
                </div>
                <div className="image-left">
                    <img src={Image} alt="images" />
                </div>
            </div>
    </div>
</>)
}