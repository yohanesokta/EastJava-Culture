import Gmaterial from "../../../Components/bundle/GoogleMaterial";
import Login from "../../../Components/bundle/Login";
import QuestControl from "./QuestControl";
import { useEffect, useState } from "react";
import KirimControl from "./KirimControl";
import { json } from "react-router-dom";
import CommentElement from "../CommentElement";
import CommentSkleton from "../CommentSkleton";

// let fetchComment = true;


export default function FeedbackField({ id, soal, Data , active}) {
    const [Ft,SetFt] = useState(true)
    let comment = [
        <CommentSkleton/>
    ];
    const [CommentValue, SetComment] = useState(comment);
    if (Data !== "default") {
        if (Ft) {
        comment = [];
            Data.response.data.forEach((e) => {
                if (e.name == id) {
                    e.data.forEach((e) => {
                        comment.push(
                            <CommentElement
                                day={e.date}
                                image={e.image}
                                name={e.nama}
                                isi={e.field}
                                key={Math.random()}
                                time={e.time}
                            />
                        );
                    });
                }
            });
            SetComment(comment)
            console.log("repreview")
            SetFt(false)
        }
    }

    useEffect(() => {
        Array.from(document.getElementsByClassName("formLogin")).forEach(
            (e) => {
                e.addEventListener("submit", (f) => {
                    f.preventDefault();
                });
            }
        );
    });
    const [, forceRender] = useState(undefined);

    function SubmitExec() {
        let val = KirimControl(id, CommentValue);
        SetComment(val);
        forceRender((prev) => !prev);
    }

    return (
        <>
            <div className={`feedback-quest ${active ?? ''}`} id={id}>
                <div
                    className="label"
                    onClick={() => {
                        QuestControl(id);
                    }}
                >
                    <p>{soal}</p>
                    <Gmaterial name="navigate_next" />
                </div>
                <div
                    className="comment-container"
                    id={`comment-container-${id}`}
                >
                    {CommentValue}
                </div>
                <div className="input-container">
                    <form
                        action={id}
                        className="formLogin"
                        id={`form_${id}`}
                        onSubmit={SubmitExec}
                    >
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
