import Navbar from "../Components/Navbar"
import "../css/Festival/ivent-kalender.css"
import Footer from "../Components/bundle/Footer"
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

            <iframe src={data.Geolocation} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div >
        <Footer />
    </>)
}

export default IventKalender