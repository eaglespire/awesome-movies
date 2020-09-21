import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import {Route, Switch} from 'react-router-dom'
import MovieDetails from "./components/movies/moviedetails/MovieDetails";

import Footer from "./components/footer/Footer";

import ActorBio from "./components/actor-bio/ActorBio";

const App = () => {
  return (
      <>
          <NavBar/>
          <Switch>
              <Route exact path={'/'} component={Home} />
              {/*<Route exact path={'/about'} component={ActorBio} />*/}
              {/*<Route exact path={'/movies/:id'} component={MovieDetails} />*/}
              <Route
                  exact
                  path='/movies/:id'
                  render={({ match }) => <MovieDetails key={match.params.id || ''} />} // Add render
              />
              <Route exact={true} path={'/person/:id'} component={ActorBio} />
          </Switch>
          <Footer/>
      </>
  );
};

export default App;
