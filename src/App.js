import React from 'react'
import './styles/App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import states
import { MovieProvider } from "./states/MovieContext"
import {FilteredMovieProvider} from "./states/FilteredMovieContext"


// Import components
import MoviesList from "./components/MoviesList"
import Nav from "./components/Nav"
import Home from "./components/Home"

const App = () => {
    return (
        <div className="App">
            <Router>
                <FilteredMovieProvider>

                    <MovieProvider>
                        <Nav/>
                    </MovieProvider>

                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <MovieProvider>
                            <Route path={'/movies'} component={MoviesList}/>
                        </MovieProvider>
                    </Switch>
                </FilteredMovieProvider>
            </Router>
        </div>
    )
}


export default App;
