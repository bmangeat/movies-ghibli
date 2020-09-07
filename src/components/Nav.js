import React, { useContext } from "react"
import '../styles/Nav.scss'

// Import Components
import { MovieContext } from "../states/MovieContext"

const Nav = () => {
    // eslint-disable-next-line no-unused-vars
    const [ movies, setMovies ] = useContext( MovieContext )
    return (
        <nav>
            <h2>Logo</h2>
            <ul className="nav-links">
                <li>Home</li>
                <li>Movies List : {movies.length}</li>
            </ul>
        </nav>

    )
}


export default Nav
