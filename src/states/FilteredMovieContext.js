import React, { useState, createContext } from "react"

export const FilteredMovieContext = createContext()

export const FilteredMovieProvider = ( props ) => {
    const [ filteredMovies, setFilteredMovies ] = useState( [] )
    return (
        <FilteredMovieContext.Provider value={[ filteredMovies, setFilteredMovies ]}>
            {props.children}
        </FilteredMovieContext.Provider>
    )
}
