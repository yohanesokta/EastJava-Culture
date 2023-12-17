import Navbar from "../Components/Navbar";
import Footer from "../Components/bundle/Footer";
import "../css/Home/feedback.css";
import chel from "../assets/HomeElements/icon/chel.jpg";
import FeedbackField from "../Elements/Bundle/feedback/FeedbackField";
import Logout from "../Components/bundle/Logout";
import { useEffect, useState } from "react";

let fed = true

function FeedBack() {
    const [Data, SetData] = useState("default");
    useEffect(() => {
        if (fed) {
            console.log("true");
            fed = false;
            fetch(import.meta.env.VITE_DATA_API).then((result)=>{
                result.json().then((Response)=>{
                    SetData(Response)
                    fed = false
                })
            })

            Array(document.getElementsByClassName('skleton')).forEach((e)=>{
                console.log(e)
            })
        }
    });

    return (
        <>
            <Navbar />
            <div className="nav-gap"></div>
            <div className="feedback">
                <input type="hidden" id="username" />
                <input type="hidden" id="userimage" />
                <div className="feedback-container">
                    <FeedbackField
                        id="quest_1"
                        soal="Apa Yang Kamu Sukai Dari Jawa Timur"
                        Data={Data}
                        active={'active'}
                    />
                    <FeedbackField
                        id="quest_2"
                        Data={Data}
                        soal="Apa Yang Kamu Sukai Dari Jawa Timur"
                    />
                    <FeedbackField
                        id="quest_3"
                        Data={Data}
                        soal="Apa Yang Kamu Sukai Dari Jawa Timur"
                    />
                    <FeedbackField
                        id="quest_4"
                        Data={Data}
                        soal="Apa Yang Kamu Sukai Dari Jawa Timur"
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
                    <p>Yohanes</p>
                </div>
                <Logout />
            </div>
            <Footer />
        </>
    );
}

export default FeedBack;
