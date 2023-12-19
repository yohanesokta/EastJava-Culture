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

function IventKalender() {
    let data = {}
    
    Datas.Data.forEach((e)=>{
       if(e.nameId == useParams().slug){
            data = e
       }
    })
    
    return (<>
            <Title string={`East Java Culture | Ivent | ${data.nameId}`} />
        <Navbar />
        <div className="nav-gap"></div>
        <IventHero title={data.nama} desc={data.desc} image={`/thumb/F${data.id}.jpg`} />


        <h2 className="title-ivent">berikut ini adalah tanggal akan terlaksananya kegiatan {data.nama}</h2>
        <div className="calender-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Asia%2FJakarta&showTitle=1&showNav=1&showTz=0&showCalendars=1&showTabs=0&showPrint=1&mode=MONTH" height="600" frameBorder="0" scrolling="no"></iframe>
        </div>
        <div className="calender-container">
            <div className="calender-field">
                <div className="card-calender">
                    <div className="card-icon">
                        <Gmaterial name="calendar_month" />
                        <p>DATE</p>
                    </div>
                    <p>{data.tgl}</p>
                    {/* <p>Expired</p> */}
                </div>

                <div className="card-calender">
                    <div className="card-icon">
                        <Gmaterial name="calendar_month" />
                        <p>TIME</p>
                    </div>
                    <p>{data.time}</p>
                </div>
                <div className="card-calender">
                    <div className="card-icon">
                        <Gmaterial name="location_on" />
                        <p>LOCATION</p>
                    </div>
                    <p>{data.loc}</p>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default IventKalender