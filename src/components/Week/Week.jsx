import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Week.scss";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { MOVIE_LISTS } from "../../static";
import Pagination from "@mui/material/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

function Week() {
  const [params,setParams] = useSearchParams()
  const [page ,setPage] = useState(+params.get("count") || 1)
  const [type, setType] = useState(params.get("path") || "now_playing");
  const { data } = useGetMovieQuery({ type, params:{page} });
  const navigate = useNavigate()

  const handleChange = (event,value) => {
    setPage(value);
    const p = new URLSearchParams(params)
    p.set("count",value)
    setParams(p)
  }

  const handleChangeType = (path)=>{
    setType(path)
    setPage(1)
    setParams({path})
  }

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
          <div className="main__category">
            {MOVIE_LISTS?.map((movie) => (
              <button
                onClick={()=>handleChangeType(movie.path)}
                className="category__btn"
                key={movie.id}
              >
                {movie.title}
              </button>
            ))}
          </div>
          <div className="week__wrapper">
            {data?.results?.map((week) => (
              <div className="week__card" key={week.id}>
                <div className="week__img">
                  <img
                  onClick={()=> navigate(`/movie/${week.id}`)}
                    src={`https://image.tmdb.org/t/p/original/${week.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="week__text">
                  <p className="week__titles">{week.title}</p>
                  <p className="week__inf">{week.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
          <Pagination 
          count={data?.total_pages > 500 ? 500: data?.total_pages} 
          page={page} 
          onChange={handleChange} 
          className="pagination"/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Week;
