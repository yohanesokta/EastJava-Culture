import Navbar from "../Components/Navbar";
import Footer from "../Components/bundle/Footer";
import "../css/Home/feedback.css";
import chel from "../assets/HomeElements/icon/chel.jpg";
import FeedbackField from "../Elements/Bundle/feedback/FeedbackField";
import Logout from "../Components/bundle/Logout";
import { useEffect, useState } from "react";
import Title from "../Components/title";

let fed = true

function FeedBack() {
    const [Data, SetData] = useState("default");
    useEffect(() => {
        if (fed) {
            fed = false;
            fetch(import.meta.env.VITE_DATA_API).then((result) => {
                result.json().then((Response) => {
                    SetData(Response)
                    fed = false
                })
            })

            Array(document.getElementsByClassName('skleton')).forEach((e) => {
            })
        }
    });

    return (
        <>
            <Title string="East Java Culture | FeedBack" />
            <Navbar />
            <div className="nav-gap"></div>
            <p className="feedback-title">Berikan Pendapatmu tentang budaya di Jawa Timur</p>
            <div className="feedback">
                <input type="hidden" id="username" />
                <input type="hidden" id="userimage" />
                <div className="feedback-container">
                    <FeedbackField
                        id="quest_1"
                        soal="Dari semua daerah di jawa timur yang kamu kunjungi, Kebudayaan apa yang paling berkesan saat kamu mengunjunginya ?"
                        Data={Data}
                        active={'active'}
                    />
                    <FeedbackField
                        id="quest_2"
                        Data={Data}
                        soal="Makanan daerah mana yang menurutmu paling enak ?"
                    />
                    <FeedbackField
                        id="quest_3"
                        Data={Data}
                        soal="Apakah kamu pernah mengunjungi kegiatan festival yang ada di jawa timur?"
                    />
                    <FeedbackField
                        id="quest_4"
                        Data={Data}
                        soal="Festival budaya mana yang paling kamu minati menurutmu?"
                    />
                    <FeedbackField
                        id="quest_5"
                        Data={Data}
                        soal="Apakah kamu pernah membeli kerajinan di daerah jawa timur untuk di jadikan Cinderamata ? , Kerajinan apa yang menurutmu paling menarik?"
                    />
                </div>
            </div>

            <div className="userprofile">
                <div className="flex-container">
                    <img
                        id="userprofile-image"
                        src=""
                        referrerpolicy="no-referrer"
                    />
                    <p id="userprofile-name">Yohanes</p>
                </div>
                <Logout />
            </div>
            <Footer />
        </>
    );
}

export default FeedBack;
