import { useParams } from "react-router-dom";
import "../style/nextPage/isi.css"
import ImageDummy1 from "../assets/NextPage/Destinasi/tuguPahlawan.jpg"
import DataUtama from "../Data/DataUtama";

export default function Isi({slug}){
    const param = useParams();
    console.log(DataUtama)
    return(<>
        {/* <h1>{param.slug}</h1> */}
        <div className="container-next">
            <div className="image">
                <img src={ImageDummy1} alt="images" />
                <p>berikut ini adalah beberapa destinasi budaya yang ada di {param.slug}</p>
            </div>
        </div>
    </>);
}