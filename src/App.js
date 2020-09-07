import React from 'react'
import './styles/App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import states
import { MovieProvider } from "./states/MovieContext"
import RouteContext from "./states/RouteContext"


// Import components
import MoviesList from "./components/MoviesList"
import Nav from "./components/Nav"
import Home from "./components/Home"

const App = () => {
    return (
        <div className="App">
            <Router>
                <MovieProvider>
                    <Nav/>
                </MovieProvider>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <RouteContext path="/movies" contextComponent={MovieProvider} component={MoviesList}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
