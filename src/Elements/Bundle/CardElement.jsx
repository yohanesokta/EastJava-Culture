import "../../css/Home/card-element.css";

export default function CardElement({ image, tanggal, tittle, red, link }) {
    let Eff = 'text-black'
    if (red) {
        Eff = 'red-text'
    }
    return (
        <>
            <div className="card-element" onClick={() => { window.location.href = link }}>
                <div className="card-image">
                    <img src={image} alt="image" />
                    <div className="text-detail">
                        <p className={Eff}>{tanggal}</p>
                        <h1>{tittle}</h1>
                    </div>
                    <div className="card-shadow"></div>
                </div>
            </div >
        </>
    );
}
