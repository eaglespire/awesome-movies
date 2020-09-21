import {
    FETCH_RECOMMENDED_ERROR,
    FETCH_RECOMMENDED_LOADING,
    FETCH_RECOMMENDED_SUCCESS
} from "./constants";
import {API_KEY, API_URL} from "../config";
import axios from "axios";


const fetchRecommendedLoading = () => {
    return {
        type: FETCH_RECOMMENDED_LOADING
    }
}
const fetchRecommendedSuccess = movies => {
    return {
        type: FETCH_RECOMMENDED_SUCCESS,
        payload : movies
    }
}
const fetchRecommendedError = (err) => {
    return {
        type: FETCH_RECOMMENDED_ERROR,
        payload: err
    }
}

export const getRecommendedMovies = id => {
    return dispatch => {
        const endpoint = `${API_URL}movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
        dispatch(fetchRecommendedLoading())
        axios.get(endpoint)
            .then(res => {
                console.log(res)
                dispatch(fetchRecommendedSuccess(res.data.results))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchRecommendedError(err))
            })
    }
}