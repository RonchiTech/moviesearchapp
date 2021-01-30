import React from 'react'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails/MovieDetails'
import './App.css';
import {Switch,Route} from 'react-router-dom'
const App = () => {
  return (
    
    <Switch>
      <Route path='/movie_details/:id'  component={MovieDetails}/>
      <Route path='/' exact component={Movies}/>
    </Switch>
  );
}

export default App;
