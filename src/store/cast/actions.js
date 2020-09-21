import {
    FETCH_MOVIE_CAST_ERROR,
    FETCH_MOVIE_CAST_LOADING,
    FETCH_MOVIE_CAST_SUCCESS
} from "./constants";
import {API_KEY, API_URL} from "../config";
import axios from "axios";


const fetchMovieCastLoading = () => {
    return {
        type: FETCH_MOVIE_CAST_LOADING
    }
}
const fetchMovieCastSuccess = data => {
    return {
        type: FETCH_MOVIE_CAST_SUCCESS,
        payload : {
            cast : data.cast,
            directors : data.crew.filter(member => member.job === "Director")
        }
    }
}
const fetchMovieCastError = (err) => {
    return {
        type: FETCH_MOVIE_CAST_ERROR,
        payload: err
    }
}

export const getMovieCast = id => {
    return dispatch => {
        const endpoint = `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;
        dispatch(fetchMovieCastLoading())
        axios.get(endpoint)
            .then(res => {
                const directors = res.data.crew.filter(member => member.job === 'Director')
                console.log(directors)
                console.log(res)
                dispatch(fetchMovieCastSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchMovieCastError(err))
            })
    }
}