import React, { useContext } from "react"

// Import Components
import { MovieContext } from "../states/MovieContext"
import Movie from "./Movie"
import SearchBar from "./SearchBar"
import { FilteredMovieContext } from "../states/FilteredMovieContext"

const MoviesList = () => {
    // eslint-disable-next-line no-unused-vars
    const [ movies, setMovies ] = useContext( MovieContext )
    // eslint-disable-next-line no-unused-vars
    const [ filteredMovies, setFilteredMovies ] = useContext( FilteredMovieContext )

    return (
        <div>
            <h1>Ghibli Movies</h1>
            <SearchBar/>
            {
                Array.isArray( filteredMovies ) && filteredMovies.length ?
                    filteredMovies.map( ( movie ) => (
                        <Movie key={movie.id} movie={movie}/>
                    ) ) :
                    movies.map( ( movie ) => (
                        <Movie key={movie.id} movie={movie}/>
                    ) )

            }
        </div>
    )
}

export default MoviesList
