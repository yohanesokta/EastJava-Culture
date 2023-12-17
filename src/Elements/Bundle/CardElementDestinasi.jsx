import "../../css/Home/card-element-destinasi.css";

export default function CardElement({ image, tittle, link }) {
    return (
        <>
            <div className="card-element" onClick={() => { window.location.href = link }}>
                <div className="card-image">
                    <img src={image} alt="image" />
                    <div className="text-detail">
                        <h1>{tittle}</h1>
                    </div>
                    <div className="card-shadow"></div>
                </div>
            </div>
        </>
    );
}
