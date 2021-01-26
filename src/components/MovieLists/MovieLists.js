import React from 'react';
import { connect } from 'react-redux';
import classes from './MovieList.module.css'
const MovieList = ({ movie, hasResults,hasError }) => {
  const { payload } = movie;
  console.log(payload);
  let movies = <p>No Movies</p>;
  if (hasResults) {
    movies = (
      <div className={classes.Movie}>
        <img src={payload.Poster} alt={payload.Title} />
        <h2>{payload.Title}</h2>
      </div>
    );
    if(payload.Error){
        movies = (
            <p>Movie not found...</p>
          );
      }
  }
  
  return (
    <>
      <h3>Result</h3>
      {movies}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state,
    hasResults: state.hasResults,
   
  };
};
export default connect(mapStateToProps)(MovieList);
