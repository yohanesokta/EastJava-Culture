import React from "react";
import CommentElement from "../CommentElement";
import ReactDOM from "react-dom/client";

export default function KirimControl(id, comment) {
    let txt = document.getElementById(`userinput${id}`);
    let username = document.getElementById("username");
    let userimage = document.getElementById("userimage");

    if (String(username.value).length <= 0 || String(txt.value).length <= 0) {
        console.log("belum login");
        return comment;
    } else {
        let date = new Date();
        const day = [
            `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            `${date.getHours()} : ${date.getMinutes()}`,
        ];
        let url = `${import.meta.env.VITE_DATA_API}?image=${
            userimage.value
        }&quest=${id}&nama=${username.value}&date${day[0]}&time${
            day[1]
        }&field=${txt.value}`;

        fetch(url, {method: "POST"});

        comment.push(
            <CommentElement
                day={day[0]}
                image={userimage.value}
                name={username.value}
                isi={txt.value}
                key={Math.random()}
                time={day[1]}
            />
        );
        txt.value = "";
        return comment;
    }
}
