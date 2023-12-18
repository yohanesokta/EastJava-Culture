import Navbar from "../Components/Navbar"
import "../css/Festival/ivent-kalender.css"
import Footer from "../Components/bundle/Footer"
import ThumnailImgae from "../assets/Festival/ponorogo-thumb.png"
import CalenderImage from "../assets/Festival/reog-calender.png"
import Gmaterial from "../Components/bundle/GoogleMaterial"
import IventHero from "../Elements/Bundle/IventHero"
const IventKalender = () => {
    return (<>
        <Navbar />
        <div className="nav-gap"></div>
        <IventHero title="Festival Reog Ponorogo" desc="Festival Reog Ponorogo adalah acara tahunan yang menampilkan kekayaan seni dan budaya daerah Ponorogo, terutama seni pertunjukan Reog yang menjadi ciri khasnya. Reog sendiri adalah bentuk seni pertunjukan yang melibatkan tarian, musik, dan pertunjukan topeng yang spektakuler." image={ThumnailImgae} />


        <h2 className="title-ivent">berikut ini adalah tanggal akan terlaksananya kegiatan festival reog ponorogo</h2>
        <div className="calender-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Asia%2FJakarta&showTitle=1&showNav=1&showTz=0&showCalendars=1&showTabs=0&showPrint=1&mode=MONTH" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
        <div className="calender-container">
            <div className="calender-field">
                <div className="card-calender">
                    <div className="card-icon">
                        <Gmaterial name="calendar_month" />
                        <p>DATE</p>
                    </div>
                    <p>8 September 2023</p>
                    <p>Expired</p>
                </div>

                <div className="card-calender">
                    <div className="card-icon">
                        <Gmaterial name="calendar_month" />
                        <p>TIME</p>
                    </div>
                    <p>19:30 - 23:00</p>
                </div>
                <div className="card-calender">
                    <div className="card-icon">
                        <Gmaterial name="location_on" />
                        <p>LOCATION</p>
                    </div>
                    <p>Desa Majapura, Kecamatan Bobotsari, Purbalingga</p>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default IventKalender