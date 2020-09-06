import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

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
        setMovies(data)
    }

    return (
        <div className="App">

        </div>
    );
}

export default App;
