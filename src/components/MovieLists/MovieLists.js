import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './MovieList.module.css';
const MovieList = ({ movie, hasSearch, hasErrors }) => {
  // const [movieLink, setMovieLink] = useState();
  let result = null;
  if (hasSearch) {
    if (hasErrors) {
      result = hasErrors;
    } else {
      result = movie.Search.map((movie, index) => {
        return (
          <Link style={{ textDecoration: 'none'}}
            to={`/movie_details/${movie.imdbID}`}
            key={movie.imdbID + index}
          >
            <div className={classes.Movie}>
              <img
                className={classes.Image}
                src={movie.Poster}
                alt={movie.Title}
              />
              <h2>{movie.Title}</h2>
            </div>
          </Link>
        );
      });
    }
  }
  // const numberToArrayHandler = (id) => {
  //   const arrID = id.toString().split("")
  //   arrID.splice(-1,1);
  //   const numToString = arrID.toString().replace(/,/g, '')
  //   // const newID = numToString.replace(/,/g, '')
  //   setMovieLink(numToString);
  //   <Link to={`/movie-details/${numToString}`}/>

  // }
  return (
    <>
      
        <h3>Result</h3>
        <div className={classes.Result}>
        {result}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.payload,
    hasErrors: state.payload.Error,
    hasSearch: state.payload.Search !== null,
  };
};
export default connect(mapStateToProps)(MovieList);
