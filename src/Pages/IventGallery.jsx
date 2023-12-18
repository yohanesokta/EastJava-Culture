import Navbar from "../Components/Navbar"
import Footer from "../Components/bundle/Footer";
import IventHero from "../Elements/Bundle/IventHero"
import thumb from '../assets/Festival/gallery-thum.png';
import "../css/Festival/ivent-kalender.css"
import "../css/Festival/ivent-gallery.css"
import { useParams } from "react-router-dom";
import GalleryData from "../Data/event/GalleryData"

const IventGallery = () => {
    const param = useParams().slug
    let data = []
    GalleryData.forEach((e) => {
        if (e.namaId == param) {
            data = e
        }
    })

    return (<>
        <Navbar />
        <div className="nav-gap"></div>
        <IventHero title={data.nama} desc={data.desc} image={`/thumb/${param}/5.jpg`} />
        <h2 className="title-ivent">berikut ini adalah galeri foto kegiatan {data.nama}</h2>
        <div className="image-container">
            <div className="image-top">
                <img src={`/thumb/${param}/1.jpg`} alt="" />
                <div className="image-top-right">
                    <img src={`/thumb/${param}/2.jpg`} alt="" />
                    <img src={`/thumb/${param}/3.jpg`} alt="" />
                </div>
            </div>
            <img src={`/thumb/${param}/4.jpg`} alt="" />
        </div>
        <Footer />
    </>)
}

export default IventGallery