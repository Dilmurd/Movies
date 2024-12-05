import React from 'react'
import "./Movies.scss"
import { useNavigate } from 'react-router-dom'

function Movies({data}) {
    const navigate = useNavigate()
  return (
    <div className="movie__wrapper">
    {data?.map((genre) => (
      <div className="movie__card" key={genre.id}>
        <img
          onClick={() => navigate(`/movie/${genre.id}`)}
          src={`https://image.tmdb.org/t/p/original/${genre.poster_path}`}
          alt=""
        />
        <p className="movie__title">{genre.title}</p>
        <p className="movie__sub">{genre.popularity}</p>
      </div>
    ))}
  </div>
  )
}

export default Movies