import Images from "../../assets/Kerajinan/home.png"
import "../../style/componets_style/Kerajinan/Home.css"
import Kertas from "../../assets/ornament/kertas.svg"

const KerajinanTop = () => {
    return (<>
        <div className="con-home-kerajinan">
            <img src={Images} alt="" className="Images-ornamen" />
            <div className="text-container">
                <div className="text">
                    <h1>Kerajinan Tangan Beberapa Daerah Di Jawa Timur</h1>
                    <h2>Mari eksplorasi kerajinan tangan penduduk Jawa Timur disini!!</h2>
                </div>
            </div>
            <img src={Kertas} alt="Kertas" className="kertas-ornamen" />
        </div>
        <div className="gap-pad"></div>
    </>)
}
export default KerajinanTop