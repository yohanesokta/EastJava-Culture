import { useGoogleLogin } from "react-google-login";
import Gmaterial from "../../../Components/bundle/GoogleMaterial";
import Login from "../../../Components/bundle/Login";
import QuestControl from "./QuestControl";
import { useEffect } from "react";
import KirimControl from "./KirimControl";

export default function FeedbackField({ id, soal, comment }) {
    useEffect(() => {
        Array.from(document.getElementsByClassName("formLogin")).forEach(
            (e) => {
                e.addEventListener("submit", (f) => {
                    f.preventDefault();
                    
                });
            }
        );
    });

    return (
        <>
            <div className="feedback-quest" id={id}>
                <div
                    className="label"
                    onClick={() => {
                        QuestControl(id);
                    }}
                >
                    <p>{soal}</p>
                    <Gmaterial name="navigate_next" />
                </div>
                <div className="comment-container">{comment}</div>
                <div className="input-container">
                    <form action={id} className="formLogin" id={`form_${id}`} onSubmit={()=>{KirimControl(id)}}>
                        <input type="text" id={`userinput${id}`} />
                        <button className="btnKirim">
                            <div className="loginBtn">
                                <Login />
                            </div>
                            Masuk
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
