import React from "react";
import "./Hero.scss";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from "react";
import kung from "../../assets/kung.png"



function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (

    <main>
      <section className="hero">
        <div className="container__sm">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
         
        <SwiperSlide>
        <div className="hero__img">
            <div className="hero__text">
              <h2 className="hero__title">Kung Fu Panda 4</h2>
              <div className="infos">
                <p className="hero__inf">2024</p>
                <p className="hero__inf">Комедия</p>
                <p className="hero__inf">1ч 34м</p>
                <p className="hero__inf">EN</p>
                <p className="hero__inf">6+</p>
              </div>
              <button className="hero__btn">
                <FaPlay /> Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        >
      <SwiperSlide>
          <img src={kung} />
        </SwiperSlide> 
      </Swiper>
        </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
