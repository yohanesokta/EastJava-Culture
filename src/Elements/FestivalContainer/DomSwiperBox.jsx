import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Convert from "../Bundle/EmbedConversion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "../../css/Swipper/styles.css";


const DomSwiperBox = () => {

    return (
        <>
            <Swiper
                loop={"true"}
                slidesPerView={"auto"}
                initialSlide={Math.floor(Math.random() * 4) + 1}
                centeredSlides={true}
                spaceBetween={20}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="con-slider">
                        <iframe
                            src={Convert(
                                "https://www.youtube.com/watch?v=B9P6KddHAmY"
                            )}
                            frameborder="0"
                        ></iframe>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="con-slider"><iframe
                        src={Convert(
                            "https://www.youtube.com/watch?v=ZSQU5GFxIgo"
                        )}
                        frameborder="0"
                    ></iframe></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="con-slider"><iframe
                        src={Convert(
                            "https://www.youtube.com/watch?v=0q8G27lwIvc"
                        )}
                        frameborder="0"
                    ></iframe></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="con-slider"><iframe
                        src={Convert(
                            "https://youtu.be/C7moJigOJ0k?si=Y60XrycZG_WEHV8W"
                        )}
                        frameborder="0"
                    ></iframe></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default DomSwiperBox;
