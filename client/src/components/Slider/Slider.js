import React, { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ApiSlides } from "../../componentApi/SliderApi";
const slideStyle = "flex items-center justify-center h-[100%]";

function Slider() {
  const [slides] = useState(ApiSlides);
  return (
    <div className="mx-5 my-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        className="h-[540px] bg-white flex items-center justify-between mobile:hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {
              <div
                className={
                  `flex w-[100%] h-[500px] items-center justify-center shadow-xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
                  slide.background
                }
              >
                <div className={slideStyle}>
                  <div className="flex-1 flex justify-center items-center h-[100%] p-2">
                    <img
                      className="h-[100%] object-center"
                      src={slide.src}
                      alt={slide.content.h2}
                    />
                  </div>
                  <div className="flex flex-col flex-1 place-items-start justify-center ml-10 p-3">
                    <h2 className="text-[55px]">{slide.content.h2}</h2>
                    <p className=" text-[30px]">{slide.content.p}</p>
                    <button className="btn">Shop Now</button>
                  </div>
                </div>
              </div>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
