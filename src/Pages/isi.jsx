import { useParams } from "react-router-dom";
import "../style/nextPage/isi.css";
import DataUtama from "../Data/DataUtama";
import IsiField from "../Components/bundle/IsiField";
import Footer from "../Components/bundle/Footer";

export default function Isi({ slug }) {
    const param = useParams();
    const data = DataUtama.Budaya[0].DestinasiBudaya;
    let result = [];
    console.log(param.slug)
    data.forEach((element,key) => {
        if (element.Kota == param.slug) {
            result.push(
                <IsiField data={element}  key={key}/>
            )
        }
    });

    return (
        <>
            <div className="container-isi">
                {result}
            </div>
            <Footer />
        </>
    );
}
