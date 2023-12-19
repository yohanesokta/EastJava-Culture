import { useParams } from "react-router-dom";
import "../style/nextPage/isi.css";
import DataUtama from "../Data/DataUtama";
import IsiField from "../Components/bundle/IsiField";
import Footer from "../Components/bundle/Footer";
import Navbar from "../Components/Navbar"
import Title from "../Components/title";

export default function Isi() {
    const param = useParams();
    const data = DataUtama.Budaya[0].DestinasiBudaya;
    let result = [];
    data.forEach((element,key) => {
        if (element.kota == param.slug) {
            result.push(
                <IsiField data={element}  key={key}/>
            )
        }});
    return (
        <>
        <Title string={`Destinasi ${param.slug} | EastJavaCulture`}/>
            <Navbar />
            <div className="nav-gap"></div>
            <div className="container-isi">
                {result}
            </div>
            <Footer />
        </>
    );
}
