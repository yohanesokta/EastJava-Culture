import { useState , useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import "../style/heroSection.css";
import caroselFirst from "../assets/image-x1.png";
import caroselDwo from "../assets/image-x2.png";
import caroselThree from "../assets/image-x3.png"
import Carosel from "./bundle/fungsiCarosel";


export default function HeroSection() {

    useEffect(()=>{
        Carosel()
    })


    return (
        <>
        <div className="col-carosel">
            <div className="carosel carosel-animate">
                <div className="f-carosel">
                    <img src={caroselFirst} alt="" />
                    <div className="f-carosel-center-text">
                        <h1>Explorasi Budaya Jawa Timur</h1>
                        <p>Di Setiap Detik</p>
                    </div>
                </div>
                <div className="f-carosel">
                    <img src={caroselDwo} alt="" />
                    <div className="f-carosel-left-text">
                        <h1>Mempersembahkan Keindahan dan Warisan Seni yang Abadi</h1>
                        <p>Di Jawa Timur</p>
                    </div>
                </div>
                <div className="f-carosel">
                    <img src={caroselThree} alt="" />
                    <div className="f-carosel-left-text">
                        <h1>Wisata Kuliner Jawa Timur</h1>
                        <p>Menyajikan Citra Rasa sejati Yang Memikat Lidah Dan Hati</p>
                    </div>
                </div>
                <div className="f-carosel">
                    <img src={caroselFirst} alt="" />
                    <div className="f-carosel-center-text">
                        <h1>Explorasi Budaya Jawa Timur</h1>
                        <p>Di Setiap Detik</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
