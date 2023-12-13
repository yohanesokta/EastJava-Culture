import "../../style/componets_style/destinasiBudaya.css";
import CardSlider from "../bundle/Card-slider";

import imageSurabaya from "../../assets/destinasi/surabaya.png";
import imageJombang from "../../assets/destinasi/jombang.png";
import imageBlitar from "../../assets/destinasi/blitar.png";
import imageMadiun from "../../assets/destinasi/madiun.png";
import imageMalang from "../../assets/destinasi/malang.png";
import imageNganjuk from "../../assets/destinasi/nganjuk.png";
import imagePasuruan from "../../assets/destinasi/pasuruan.png";
import CheckResolution from "../bundle/CheckResolutionSwiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import "../../style/swiper.css";



export default function KesenianTradisional() {
    return (
        <>
            <div className="desBudaya" id="destinasiBudaya">
                <div className="flex-container">
                    <h1>Kesenian Tradisional</h1>
                </div>
                <div className="container-budaya-field">
                    <Swiper
                        slidesPerView={CheckResolution()}
                        spaceBetween={'20px'}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="swiper-top"
                    >
                        <SwiperSlide>
                            <CardSlider
                                image={imageSurabaya}
                                text="Kota Surabaya"
                                link="http://google.com"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardSlider
                                image={imageJombang}
                                text="Kota Jombang"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardSlider
                                image={imageBlitar}
                                text="Kota Blitar"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSlider
                                image={imageMadiun}
                                text="Kota Madiun"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSlider
                                image={imageMalang}
                                text="Kota Malang"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSlider
                                image={imageNganjuk}
                                text="Kota Nganjuk"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardSlider
                                image={imagePasuruan}
                                text="Kota Pasuruan"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
