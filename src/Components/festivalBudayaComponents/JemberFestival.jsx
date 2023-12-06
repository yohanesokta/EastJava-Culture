import "../../style/componets_style/festivalBudaya/jember-fest.css"
import img from "../../assets/Festival/jember.png"
export default function JemberFestival(){
return(<>
    <div className="jember-fest">
            <div className="flex-container">
                <div className="text-right">
                    <div className="line"><span>3</span></div>
                    <h1>Jember Fashion Carnaval</h1>
                    <h2>Jember</h2>
                    <p>Jember Fashion Carnival di Jawa Timur adalah panggung megah di mana mode bertemu seni pertunjukan. Merupakan peristiwa tahunan yang menghipnotis, carnival ini menampilkan busana spektakuler dengan ornamen kreatif dan konsep visual yang luar biasa.</p>
                </div> 
                </div>
            <div className="kiri">
                <img src={img} alt="" />
            </div>
            
    </div>
</>)
}