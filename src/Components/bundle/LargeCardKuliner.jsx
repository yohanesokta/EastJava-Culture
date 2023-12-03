import "../../style/componets_style/largeCard.css";
import RujakCingur from "../../assets/kuliner/HomeRujakCingur.png";

const LargeCardKuliner = (props) => {
  return (
    <>
      <div className="large-card">
        <div className="left-field">
          <img src={props.image} alt="images" />
        </div>
        <div className="right-field">
            <div className="right-content">
            <h2>Kuliner Local</h2>
            <div className="flex-container">
              <span>{props.name}</span>
            </div>
            
            <h4>{props.location}</h4>
            <p>{props.desc}</p>
            </div>
        </div>
      </div>
    </>
  );
};
export default LargeCardKuliner;
