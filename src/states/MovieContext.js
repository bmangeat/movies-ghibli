import React, { useEffect, useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = (props) => {

    useEffect(
        () => {
            fetchData()
        },
        []
    )


    const [ movies, setMovies ] = useState( [] )

    const fetchData = async () => {
        const fetchData = await fetch( 'https://ghibliapi.herokuapp.com/films' )
        const data = await fetchData.json()
        setMovies( data )
    }

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>


    )
}

