import React, { useEffect, useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = ( props ) => {

    const [ movies, setMovies ] = useState( [] )
    useEffect(
        () => {
            fetchData()
        },
        []
    )


    const fetchData = () => {
        let moviesFromApi = []
        fetch( 'https://ghibliapi.herokuapp.com/films' )
            .then( response => response.json() )
            .then( data => {
                data.forEach(el => {
                    moviesFromApi.push(
                        {
                            id: el.id,
                            title: el.title,
                            description: el.description
                        }
                    )
                })
                setMovies(moviesFromApi)

                    /*data.map( movie => (
                            console.log( movie.id ),
                                setMovies( [
                                    ...movies,
                                    {
                                        id: movie.id,
                                        title: movie.title,
                                        description: movie.description
                                    }
                                ] )
                        )
                    )*/
                }
            )
            .catch((err) => {console.error(err.message)})

    }

    return (
        <MovieContext.Provider value={[ movies, setMovies ]}>
            {props.children}
        </MovieContext.Provider>


    )
}

