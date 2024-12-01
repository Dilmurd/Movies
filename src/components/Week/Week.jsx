import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Week.scss";
import { useGetMovieQuery } from "../../redux/api/movie-api";

function Week() {
  const { data } = useGetMovieQuery();

  return (
    <main>
    <section className="week">
      <div className="container">
        <div className="week__top">
          <p className="week__title">На неделе</p>
          <div className="week__icon">
            <p>Показать все</p>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="week__wrapper">
            {data?.results?.map((item) => (
                <div className="week__card">
                  <div className="week__img">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="week__text">
                    <p className="week__titles">{item.title}</p>
                    <p className="week__inf">{item.vote_average}</p>
                    </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  </main>
  );
}

export default Week;
