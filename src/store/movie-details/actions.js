import {
    FETCH_MOVIE_ERROR,
    FETCH_MOVIE_LOADING,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_CAST_ERROR,
    FETCH_MOVIE_CAST_LOADING,
    FETCH_MOVIE_CAST_SUCCESS,
    FETCH_MOVIE_DIRECTORS_ERROR,
    FETCH_MOVIE_DIRECTORS_LOADING,
    FETCH_MOVIE_DIRECTORS_SUCCESS
} from "./constants";
import axios from 'axios'
import {API_KEY,API_URL} from "../config";

const fetchMovieLoading = () => {
    return {
        type: FETCH_MOVIE_LOADING
    }
}
const fetchMovieSuccess = movie => {
    return {
        type: FETCH_MOVIE_SUCCESS,
        payload: movie
    }
}
const fetchMovieError = err => {
    return {
        type: FETCH_MOVIE_ERROR,
        payload: err
    }
}

export const getSingleMovie = id => {
    return dispatch => {
        const endpoint = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
        dispatch(fetchMovieLoading())
        axios.get(endpoint)
            .then(res => {
                console.log(res)
                dispatch(fetchMovieSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchMovieError(err))
            })
    }
}

