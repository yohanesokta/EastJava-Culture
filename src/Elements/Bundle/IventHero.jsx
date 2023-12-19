
const IventHero = (props) => {
    return (<>
        <div className="image-thumb">
            <div className="text-container">
                <div className="text-field">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                </div>
            </div>
            <img src={props.image} alt="" />
        </div>
    </>)
}

export default IventHero