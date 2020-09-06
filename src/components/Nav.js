import React, {useContext} from "react"

// Import Components
import {MovieContext} from "../states/MovieContext"

const Nav = () => {
    // eslint-disable-next-line no-unused-vars
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h2>Logo</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Movies List : {movies.length}</li>
                </ul>
            </nav>

        </div>
    )
}


export default Nav
