import React, { useContext } from "react"
import '../styles/Nav.scss'
import { Link } from "react-router-dom"

// Import Components
import { MovieContext } from "../states/MovieContext"

const Nav = () => {
    // eslint-disable-next-line no-unused-vars
    const [ movies, setMovies ] = useContext( MovieContext )
    return (
        <nav>
            <h2>Logo</h2>
            <ul className="nav-links">
                <Link to="/" style={{color: "inherit", textDecoration: "inherit"}}>
                    <li>Home</li>
                </Link>
                <Link to="/movies" style={{color: "inherit", textDecoration: "inherit"}}>
                    <li>Movies List : {movies.length}</li>
                </Link>
            </ul>
        </nav>

    )
}


export default Nav
