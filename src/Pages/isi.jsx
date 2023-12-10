import { useParams } from "react-router-dom";
import "../style/nextPage/isi.css";
import ImageDummy1 from "../assets/NextPage/Destinasi/tuguPahlawan.jpg";
import DataUtama from "../Data/DataUtama";

export default function Isi({ slug }) {
    const param = useParams();
    const data = DataUtama.Budaya[0].DestinasiBudaya;
    data.forEach(element => {
        console.log(element.Kota)
        if (element.Kota == param.slug){
            
        }
    });
    console.log(data.MapId);

    return (
        <>
            <h1>{param.slug}</h1>
            {/* <div className="container-next">
                <div className="image">
                    <img src={ImageDummy1} alt="images" />
                    <p>
                        berikut ini adalah beberapa destinasi budaya yang ada di{" "}
                        {data.nama}
                    </p>
                </div>
                <div className="desc">
                    <h1>Deskripsi {data.nama}</h1>
                    <p>{data.desc}</p>
                </div>
                <div className="maps">
                    <div className="container-map">
                        <iframe
                            src={data.MapId}
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <p>{data.loc}</p>
                </div>
            </div> */}
        </>
    );
}
