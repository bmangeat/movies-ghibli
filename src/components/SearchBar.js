import React, { useContext, useState } from "react"
import { MovieContext } from "../states/MovieContext"
import Movie from "./Movie"

const SearchBar = () => {
    const [ filteredMovies, setFilteredMovies ] = useState( [] )
    const [ movies, setMovies ] = useContext( MovieContext )

    const filterByName = ( obj, e ) => {
        return obj.title.toLowerCase().includes( e.toLowerCase() );
    }

    const filterMovies = ( e ) => {
        e.preventDefault()
        setFilteredMovies( movies.filter( ( movie ) => filterByName( movie, e.target.value ) ) )
    }

    return (
        <div className="searchbar-movieslist">
            <input onChange={filterMovies} type="text"/>
        </div>
    )
}

export default SearchBar
