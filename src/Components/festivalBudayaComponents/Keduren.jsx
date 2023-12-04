import "../../style/componets_style/festivalBudaya/kenduren.css";
import Images from "../../assets/Festival/kenduren.png"

const Kenduren = () => {
  return (
    <>
      <div className="kenduren">
        <div className="con-kenduren">
          <h1>1</h1>
          <div className="col">
            <div className="col-atas">
              <div className="col-atas-content">
                <div className="line"></div>
                <h2>Festival Kenduren</h2>
                <h3>Jombang</h3>
              </div>
            </div>
            <div className="col-bawah">
              <div className="image">
                <img src={Images} alt="" />
              </div>
              <div className="col-text">
                <p>
                Festival Kenduren di Jombang, Jawa Timur, memukau dengan nuansa keagamaan dan kebudayaan. Merupakan perayaan yang sarat makna, festival ini menggabungkan tradisi, seni, dan kebersamaan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kenduren;
