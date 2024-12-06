import React, { useEffect, useState } from 'react'
import "./Searches.scss"
import Movies from "../../components/Movies/Movies"
import {useGetMovieSearchQuery} from "../../redux/api/movie-api"
import { useSearchParams } from 'react-router-dom'

function Searches() {
    const [searchParams,setSearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState("")
    const [search,setSearch] = useState("")
    const {data,isError,isLoading} = useGetMovieSearchQuery({ query: search}, {skip: !search})
    useEffect(() => {
        let query = searchParams.get("q")
        if(query){
            setSearchValue(query)
            setSearch(query)
        }
    }, [])

    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchValue)
        setSearchParams({q: searchValue})
    }

    const handleChange = e => {
        setSearchValue(e.target.value)
        setSearchParams({q: e.target.value})
    }
  return (
    <main>
        <section className='search'>
            <div className="container">
                <h1>Search</h1>
                <form onSubmit={handleSearch} action="" className="search__inputs">
                    <input value={searchValue} onChange={handleChange}  type="search" placeholder='Search' />
                    <button>Search</button>
                </form>
                    <Movies data={data?.results}/>
            </div>
        </section>
        
    </main>
  )
}

export default Searches