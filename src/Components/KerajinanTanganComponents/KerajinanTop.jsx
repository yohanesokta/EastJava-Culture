import Images from "../../assets/Kerajinan/home.png"
import "../../style/componets_style/Kerajinan/Home.css"
import Kertas from "../../assets/ornament/kertas.svg"

const KerajinanTop = () => {
    return(<>
            <div className="con-home-kerajinan">
                <img src={Images} alt="" className="Images-ornamen"/>
                <div className="text-container">
                    <div className="text">
                        <h1>kerajinan tangan beberapa daerah di jawa timur</h1>
                        <h2>mari eksplorasi kerajinan tangan penduduk Jawa Timur disini!!</h2>
                    </div>
                </div>
                <img src={Kertas} alt="Kertas" className="kertas-ornamen"/>
            </div>
            <div className="gap-pad"></div>
    </>)
}
export default KerajinanTop