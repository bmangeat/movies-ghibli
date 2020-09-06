import React from 'react';
import './App.css';

// Import components
import { MovieProvider } from "./states/MovieContext"
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
