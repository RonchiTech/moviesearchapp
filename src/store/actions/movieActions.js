import axios from 'axios'
import * as actionTypes from './actionTypes'
export const movieSearchStart = (value) => {
    return dispatch => {
        axios.get(`http://www.omdbapi.com/?apikey=b77cc267&s=${value}`)
        .then(response => {
            dispatch(movieSearchSuccess(response.data))
        })
        .catch(error => {
           dispatch(movieSearchFailed(error));
        })
    }
}

const movieSearchSuccess = (movie) => {
    return {
        type: actionTypes.SEARCH_MOVIE_SUCCESS,
        payload: movie
    }
}

const movieSearchFailed = (error) => {
    return {
        type: actionTypes.SEARCH_MOVIE_FAILED,
        error
    }
}