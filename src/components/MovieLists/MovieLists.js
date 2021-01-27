import React from 'react';
import { connect } from 'react-redux';
import classes from './MovieList.module.css';
const MovieList = ({ movie,  hasSearch, hasErrors }) => {
  let result = null
  if(hasSearch){
    if(hasErrors) {
      result = hasErrors
    } else {
      result = movie.Search.map((movie) => {
        return (
          <div className={classes.Movie} key={movie.imdbID}>
            <img className={classes.Image}src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
          </div>
        );
      })
    }
  
  } 

  return (
    <>
      <h3>Result</h3>
      {result}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.payload,
    hasErrors: state.payload.Error,
    hasSearch: state.payload.Search !== null
  };
};
export default connect(mapStateToProps)(MovieList);
