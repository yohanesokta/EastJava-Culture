import Navbar from "../Components/Navbar"
import Footer from "../Components/bundle/Footer"
import IventHero from "../Elements/Bundle/IventHero"
import Datas from "../Data/DataComming"
import { useParams } from "react-router-dom"
import "../css/Festival/comming.css"

const EventComming = () => {
    let data = ''
    Datas.forEach((e) => {
        if (e.namaId == useParams().slug) {
            data = e
            console.log(e)
        }

    })
    return (<>
        <Navbar />
        <div className="nav-gap"></div>
        <IventHero image={`/comming/${data.namaId}.jpg`} />
        <div className="desc">
            <h1>{data.nama}</h1>
            <p>{data.desc}</p>
            <h3>Daftarkan Festival Daerahmu Sekarang</h3>
            <button onClick={() => {
                window.location.href = "https://forms.gle/AKXubuaF3vSMMY65A"
            }}>Di Sini</button>
        </div>
        <Footer />
    </>)
}
export default EventComming