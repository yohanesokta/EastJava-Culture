import "../../style/componets_style/Kerajinan/Card.css";
import Ornamen from "../../assets/ornament/sarangLebah.png"

const CardKerajinan = (props) => {
    return (
        <>
            <div className="example-container">
                <div className="card-container">
                    <div className="card-kerajinan">
                        <img src={Ornamen} alt="ornamen" />
                        <div className="text-right">
                            <div className="container">
                                <span>Model</span>
                                <h1>{props.name}</h1>
                                <p>{props.desc}</p>
                            </div>
                        </div>
                        <div className="image-left">
                            <img src={props.image} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CardKerajinan;
