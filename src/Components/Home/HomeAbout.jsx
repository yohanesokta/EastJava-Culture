import "../../style/homeAbout.css";
import lineEffect from "../../assets/line-effect_1.svg";
import firstSVG from "../../assets/up-circle-effect_1.svg";
import circleSVG from "../../assets/up-circle-effect_2.svg";
const TripleLineSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 76 76"
      fill="none"
    >
      <path d="M76 76L0 76L-6.64413e-06 6.64413e-06L76 0L76 76Z" fill="white" />
      <path
        d="M76 45.125L0 45.125L-1.24577e-06 30.875L76 30.875L76 45.125Z"
        fill={props.fill}
      />
      <path
        d="M76 14.25L0 14.25L-1.24577e-06 6.64413e-06L76 0L76 14.25Z"
        fill={props.fill}
      />
      <path d="M76 76L0 76L-1.24577e-06 61.75L76 61.75L76 76Z" fill={props.fill} />
    </svg>
  );    
};

export default function HomeAbout() {
  return (
    <>
      <div className="home-about">
        <div className="flex-container">
          <img src={lineEffect} alt="line-effect" />
        </div>
        <div className="flex-container">
          <p>
            Website ini bertujuan untuk melestarikan dan memasyarakatkan
            kekayaan budaya Jawa Timur. Dengan menyajikan informasi edukatif dan
            jadwal kegiatan budaya, kami berusaha menarik perhatian wisatawan,
            mendorong partisipasi masyarakat, dan menjadi sumber informasi yang
            mudah diakses. kami juga berupaya mengembangkan serta mempromosikan
            kegiatan budaya yang beragam. Website ini juga berfungsi sebagai
            arsip digital untuk melestarikan warisan budaya bagi generasi
            mendatang.
          </p>
        </div>
        <div className="about-line-2">
          <img src={firstSVG} alt="" className="first-svg" />
          <img src={lineEffect} alt="line-effect" className="line-effect" />
          <div className="box-effect">
            <div className="box-effect-f">
            <TripleLineSvg fill="#A36361" />
            <TripleLineSvg fill="#9EABA2" />
            </div>
            <div className="box-effect-f">
            <TripleLineSvg fill="#A36361" />
            <TripleLineSvg fill="#9EABA2" />
            </div>
          </div>
        </div>
      </div>


      <div className="next-about">
        <img src={circleSVG} alt="" className="circle-element" />

        <div className="flex-container">
        </div>
      </div>
    </>
  );
}
