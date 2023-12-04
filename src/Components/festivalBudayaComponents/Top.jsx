import "../../style/componets_style/festivalBudaya/top.css";
import ImagesUtama from "../../assets/Festival/utama.png";
const Top = () => {
  return (
    <>
      <div className="top-fest">
        <img src={ImagesUtama} alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            d="M1920 731.637C1269.5 1059.63 460.312 1057.94 0 731.637V0H1920V731.637Z"
            fill="black"
            fill-opacity="0.51"
          />
        </svg>
        <div className="gradient-nisor"></div>
        <div className="bunder"></div>
        <div className="container-text">
          <div className="field-text">
            <h1>Eksplorasi Festival Budaya</h1>
            <div className="flex-container">
              <p>
                Tertarik dengan keunikan budaya Jawa Timur? Temukan pesona tak
                terbatasnya di sini! Mari bersama-sama menjelajahi keeksotisan
                festival, mengeksplorasi seni yang memikat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
