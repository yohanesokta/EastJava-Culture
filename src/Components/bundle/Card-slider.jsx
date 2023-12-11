import "../../style/componets_style/cardSlider.css"


export default function CardSlider(props){
    return(
        <>
        <a href={props.link}>
            <div className="card-slider" id={props.focus}>
                <img src={props.image} alt="images" />
                <div className="card-text">
                    <p>{props.text}</p>
                </div>
            </div>
        </a>
        </>
    )
}