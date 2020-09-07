import React from 'react'
import './styles/App.scss'

// Import states
import { MovieProvider } from "./states/MovieContext"

// Import components
import MoviesList from "./components/MoviesList"
import Nav from "./components/Nav"

const App = () => {

    return (
        <MovieProvider>
                <div className="App">
                    <Nav/>
                    <MoviesList/>
                </div>
        </MovieProvider>
    );
}

export default App;
