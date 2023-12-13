import "../../css/Home/card-element.css";

export default function CardElement({image, tanggal , tittle}) {
    return (
        <>
            <div className="card-element">
                <div className="card-image">
                    <img src={image} alt="image"/>
                    <div className="text-detail">
                        <p>{tanggal}</p>
                        <h1>{tittle}</h1>
                    </div>
                    <div className="card-shadow"></div>
                </div>
            </div>
        </>
    );
}
