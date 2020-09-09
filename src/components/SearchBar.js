import React, { useContext } from "react"
import { MovieContext } from "../states/MovieContext"
import { FilteredMovieContext } from "../states/FilteredMovieContext"

const SearchBar = () => {
    // eslint-disable-next-line no-unused-vars
    const [ filteredMovies, setFilteredMovies ] = useContext( FilteredMovieContext )
    // eslint-disable-next-line no-unused-vars
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
