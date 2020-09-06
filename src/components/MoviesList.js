import React, { useContext } from "react"

// Import Components
import {MovieContext} from "../states/MovieContext"
import Movie from "./Movie"

const MoviesList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            <h1>Ghibli Movies</h1>
            {
                movies.map( ( movie ) => (
                    <Movie key={movie.id} movie={movie}/>
                ) )
            }
        </div>
    )
}

export default MoviesList
