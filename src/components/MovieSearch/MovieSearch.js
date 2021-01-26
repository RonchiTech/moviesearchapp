import React, { useState } from 'react';
import classes from './MovieSearch.module.css';
import * as action from '../../store/actions/index';
import { connect } from 'react-redux';

const MovieSearch = ({ onSearchMovie }) => {
  const [value, setValue] = useState('');

  const SearchMovieHandler = (e) => {
    e.preventDefault();
    onSearchMovie(value);
  };
  return (
    <div>
      <form onSubmit={SearchMovieHandler}>
        <h1>Ronchi React Movie Search</h1>
        <h2>Enter Movie Name</h2>
        <input
          required
          className={classes.Input}
          value={value}
          placeholder="i.e. Game of Thrones"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={classes.Button}>Search</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchMovie: (value) => dispatch(action.movieSearchStart(value)),
  };
};
export default connect(null, mapDispatchToProps)(MovieSearch);
