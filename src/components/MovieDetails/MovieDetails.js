import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import classes from './MovieDetails.module.css'
const MovieDetails = ({match}) => {
    const {id} = match.params;
    const [movie, setMovie] = useState({});
    let history = useHistory();
    useEffect(()=> {
        axios.get(`http://www.omdbapi.com/?apikey=b77cc267&i=${id}`)
        .then(response => {
            setMovie(response.data);
            console.table(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[id])

    const BackToSearchHandler = () => {
  
        history.push('/');
    }
  return (
    <div className={classes.ResultContainer}>
      <img src={movie.Poster} alt={movie.Title}/>
      <h2 className={classes.MovieTitle}>{movie.Title}<span> ({movie.Year})</span></h2>
      <h4 className={classes.Rating}>{movie.imdbRating}/10</h4>
      <h3>Casts: {movie.Actors}</h3>
      <h2 className={classes.Storyline}>Storyline</h2>
      <p className={classes.Plot}>{movie.Plot}</p>
    <button onClick={BackToSearchHandler}>Back to search</button>

      {console.log(movie)}
    </div>
  );
};
export default MovieDetails;
