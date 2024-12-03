import React from "react";
import "./Hero.scss";
import { FaPlay } from "react-icons/fa";
import {useGetMovieQuery} from "../../redux/api/movie-api"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Hero() {
   const {data} = useGetMovieQuery({type: "upcoming",params: {page: 2}})
  return (
    <main>
      <section className="hero">
        <div className="container__sm">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
          {
            data?.results?.map(movie => (
              <SwiperSlide>
          <div className="hero__img">
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
            <div className="hero__text">
              <h2 className="hero__title">{movie.title}</h2>
              <div className="infos">
                <p className="hero__inf">2024</p>
                <p className="hero__inf">Комедия</p>
                <p className="hero__inf">1ч 34м</p>
                <p className="hero__inf">{movie.popularity}</p>
                <p className="hero__inf">{movie.vote_average}</p>
              </div>
              <button className="hero__btn">
                <FaPlay /> Смотреть
              </button>
            </div>
          </div>
        </SwiperSlide>
            ))
          }
          </Swiper>
      <div>
        </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
