import React from 'react'
import Movies from './components/Movies'
import './App.css';
import {Switch,Route} from 'react-router-dom'
const App = () => {
  return (
    
    <Switch>
      <Route path='/movie_details/:id'  render={()=><p>Movie Detail</p>}/>
      <Route path='/' exact component={Movies}/>
    </Switch>
  );
}

export default App;
