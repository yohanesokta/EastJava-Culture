import LargeCardKuliner from "../bundle/LargeCardKuliner"
import "../../style/componets_style/explorasiKuliner.css"

import RujakCingur from "../../assets/kuliner/HomeRujakCingur.png";


const ExplorasiKuliner = () => {
    return(
        <>
            <div className="explore-kuliner">
                    <h1>Explorasi Kuliner Lokal</h1>
                    <div className="con-explore">
                        <div className="con-content-explore">
                            <div className="content-explore">
                                <div className="content">
                                    <LargeCardKuliner image={RujakCingur} name="Rujak Cingur" location="Surabaya" desc="Rujak cingur adalah hidangan khas Jawa Timur yang terdiri dari irisan sayuran, seperti timun, kangkung, dan tauge, yang disajikan dengan bumbu kacang dan potongan cingur (hidung sapi yang direbus). Semua bahan ini dicampur dengan saus kacang yang khas, menciptakan perpaduan cita rasa gurih, pedas, dan segar."/>
                                </div>
                            </div>
                            <div className="content-explore">a
                                <div className="content">
                                    <LargeCardKuliner image={RujakCingur} name="Rujank Pedes"/>
                                </div>
                            </div>
                            <div className="content-explore">
                                <div className="content">
                                    <LargeCardKuliner />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}   

export default ExplorasiKuliner