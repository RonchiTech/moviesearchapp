import React from 'react'
import MovieList from './MovieLists/MovieLists'
import MovieSearch from './MovieSearch/MovieSearch'

const Movies = () => {
    return (
        <>
        <MovieSearch/>
        <MovieList/>
        </>
    );
}

export default Movies;