import {
    FETCH_REVIEW_ERROR,
    FETCH_REVIEW_LOADING,
    FETCH_REVIEW_SUCCESS
} from "./constants";
import {API_KEY, API_URL} from "../config";
import axios from "axios";


const fetchReviewLoading = () => {
    return {
        type: FETCH_REVIEW_LOADING
    }
}
const fetchReviewSuccess = review => {
    return {
        type: FETCH_REVIEW_SUCCESS,
        payload : review
    }
}
const fetchReviewError = (err) => {
    return {
        type: FETCH_REVIEW_ERROR,
        payload: err
    }
}

export const getMovieReview = id => {
    return dispatch => {
        const endpoint = `${API_URL}movie/${id}/reviews?api_key=${API_KEY}`;
        dispatch(fetchReviewLoading())
        axios.get(endpoint)
            .then(res => {
                console.log(res)
                dispatch(fetchReviewSuccess(res.data.results))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchReviewError(err))
            })
    }
}