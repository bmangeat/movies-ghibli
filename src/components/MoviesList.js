import React, { useContext } from "react"

// Import Components
import {MovieContext} from "../states/MovieContext"
import Movie from "./Movie"
import SearchBar from "./SearchBar"

const MoviesList = () => {
    // eslint-disable-next-line no-unused-vars
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            <h1>Ghibli Movies</h1>
            <SearchBar/>

            {
                movies.map( ( movie ) => (
                    <Movie key={movie.id} movie={movie}/>
                ) )
            }
        </div>
    )
}

export default MoviesList
