import "../../../style/GayaHidup/Card2.css"

export default function CardGayaHidup({image , text}){
    return(
        <>
            <div className="card2">
                <img src={image} alt="" />
                <p>{text}</p>
            </div>
        </>
    )
}