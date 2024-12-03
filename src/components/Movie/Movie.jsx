import React, { useState } from 'react'
import { useGetMovieDiscoverQuery, useGetMovieQuery} from "../../redux/api/movie-api"
import "./Movie.scss"
import { useNavigate, useSearchParams } from 'react-router-dom'
import Pagination from "@mui/material/Pagination";
import { useGetGenreQuery } from '../../redux/api/genre-api'

function Movie() {
    const [selectedGenre, setSelectedGenre] = useState([])
    const [params,setParams] = useSearchParams()
    const [page ,setPage] = useState(+params.get("count") || 1)
    const [type, setType] = useState(params.get("path") || "upcoming");
    const {data: discover} = useGetMovieDiscoverQuery({with_genres: selectedGenre.join(",")})
    const {data} = useGetMovieQuery({type,params: {page}})
    const navigate = useNavigate()
    const {data: genre} = useGetGenreQuery()


    const handleChangeGenre = id => {
        if(selectedGenre.includes(id)){
            setSelectedGenre(p => p.filter(i => i !== id))
        }else{
            setSelectedGenre(p => [...p,id])        
        }
    }


    const handleChange = (event,value) => {
        setPage(value)
        const p = new URLSearchParams(params)
        p.set("count",value)
        setParams(p)
      }
  return (
    <main>
        <section className='movie'>
            <div className="container">
            <div className="main__category">
            {genre?.genres?.map((genre) => (
              <button
                onClick={()=> handleChangeGenre(genre.id)}
                className="category__btn"
                key={genre.id}
              >
                {genre.name}
              </button>
            ))}
            </div>
                <div className="movie__wrapper">
                    {
                        discover?.results?.map((genre) => (
                            <div className='movie__card' key={genre.id}>
                                <img 
                                onClick={()=> navigate(`/movie/${genre.id}`)}
                                src={`https://image.tmdb.org/t/p/original/${genre.poster_path}`} alt="" />
                                <p className='movie__title'>{genre.title}</p>
                                <p className='movie__sub'>{genre.popularity}</p>
                            </div>
                        ))
                    }
                </div>
                {
                    !discover?.total_results && <div className='not__found'>
                        <h1>Movie not found</h1>
                    </div>
                }
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
  )
}

export default Movie