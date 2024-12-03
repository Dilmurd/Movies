import React from "react";
import {
  useGetDetailimagesQuery,
  useGetDetailQuery,
} from "../../redux/api/movie-api";
import { useParams } from "react-router-dom";
import "./Page.scss";
import { FaStar } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';






function Page() {
  const { id } = useParams();
  const { data } = useGetDetailQuery(id);
  const { data: img } = useGetDetailimagesQuery(id);
  console.log(img);

  console.log(data);

  return (
    <main>
      <section className="detail">
        <div className="container__sm">
          <div className="img">
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
                {img?.backdrops?.map((items) => (
              <SwiperSlide>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${items.file_path}`}
                    key={items.file_path}
                    alt=""
                  />
              </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div className="container">
          <div className="detail__wrapper">
            <div className="detail__img">
              <img
                src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                alt=""
              />
            </div>
            <div className="detail__texts">
              <h2>{data?.title}</h2>
              <p>{data?.overview}</p>
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p>{data?.popularity}</p>
              </div>
              <div>
                <p>Budget:</p>
                <p>{data?.budget}</p>
              </div>
              <div>
                <LiaFlagUsaSolid className="icon" />
                <p>Original Language EN</p>
              </div>
              <button className="detail__btn">Смотреть</button>
            </div>
          </div>
          <h2>Images</h2>
          <div className="detail__imgss">
            {img?.backdrops?.map((item) => (
              <img
                src={`https://image.tmdb.org/t/p/original/${item.file_path}`}
                key={item.file_path}
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
