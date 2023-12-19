import Gmaterial from "../../Components/bundle/GoogleMaterial"
import "../../css/Home/CardDateTime.css"

const CardDateTime = (props) => {
    return (<>
        <div className="col-date-time">
            <div className="container-date">
                <div className="container-field2">
                    <div className="card">
                        <div className="head">
                            <div className="head-isi">
                                <Gmaterial name="event" />
                                <span>Date</span>
                            </div>
                        </div>
                        <div className="field">
                            <p>{props.date}</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="head">
                            <div className="head-isi">
                                <Gmaterial name="timer" />
                                <span>Time</span>
                            </div>
                        </div>
                        <div className="field">
                            <p>{props.time}</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="head">
                            <div className="head-isi">
                                <Gmaterial name="location_on" />
                                <span>Location</span>
                            </div>
                        </div>
                        <div className="field">
                            <p>{props.loc}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default CardDateTime