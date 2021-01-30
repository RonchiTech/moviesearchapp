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
      <h2>{movie.Title}</h2>
      <h4>({movie.Year})</h4>
        <p>Rating: {movie.imdbRating}/10</p>
      <h3>Casts: {movie.Actors}</h3>
      <p>{movie.Plot}</p>
    <button onClick={BackToSearchHandler}>Back to search</button>

      {console.log(movie)}
    </div>
  );
};
export default MovieDetails;
