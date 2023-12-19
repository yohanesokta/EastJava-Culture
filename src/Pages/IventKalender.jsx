import Navbar from "../Components/Navbar"
import "../css/Festival/ivent-kalender.css"
import Footer from "../Components/bundle/Footer"
import ThumnailImgae from "../assets/Festival/ponorogo-thumb.png"
import CalenderImage from "../assets/Festival/reog-calender.png"
import Gmaterial from "../Components/bundle/GoogleMaterial"
import IventHero from "../Elements/Bundle/IventHero"
import Title from "../Components/title"
import { useParams } from "react-router-dom"
import Datas from "../Data/event/Main"
import CardDateTime from "../Elements/Bundle/CardDateTime"

function IventKalender() {
    let data = {}

    Datas.Data.forEach((e) => {
        if (e.nameId == useParams().slug) {
            data = e
        }
    })

    return (<>


        <Title string={`East Java Culture | Ivent | ${data.nameId}`} />
        <Navbar />
        <div className="nav-gap"></div>
        <IventHero title={data.nama} desc={data.desc} image={`/thumb/F${data.id}.jpg`} />
        <h2 className="title-ivent">Berikut ini adalah agenda pelaksanaan kegiatan {data.nama}</h2>
        <CardDateTime date={data.tgl} time={data.time} loc={data.loc} />

        <div className="calender-container iframe-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showNav=1&showDate=1&showCalendars=0&showTz=0&showTabs=0&src=MmM2ZDZmNzU3OGRiMGM0NDA0YmY0YmYyOTA2YTBhZDEwMTgxMTllZTA2YWRhOWZiNzM5NzViM2EyN2E5ZTFhMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33" height="600" frameborder="0" scrolling="no"></iframe>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7897.814195324025!2d114.37942534080317!3d-8.212097567280535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd144d77ac222cb%3A0x843a72e0f108fbc0!2sPantai%20Boom!5e0!3m2!1sid!2sid!4v1702963568105!5m2!1sid!2sid" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div >
        <Footer />
    </>)
}

export default IventKalender