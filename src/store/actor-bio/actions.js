import {
    FETCH_ACTOR_ERROR,
    FETCH_ACTOR_LOADING,
    FETCH_ACTOR_SUCCESS
} from "./constants";
import {API_KEY, API_URL} from "../config";
import axios from "axios";


const fetchActorLoading = () => {
    return {
        type: FETCH_ACTOR_LOADING
    }
}
const fetchActorSuccess = actor => {
    return {
        type: FETCH_ACTOR_SUCCESS,
        payload : actor
    }
}
const fetchActorError = (err) => {
    return {
        type: FETCH_ACTOR_ERROR,
        payload: err
    }
}

export const getActor = id => {
    return dispatch => {
        const endpoint = `${API_URL}person/${id}?api_key=${API_KEY}`;
        dispatch(fetchActorLoading())
        axios.get(endpoint)
            .then(res => {
                console.log(res)
                dispatch(fetchActorSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchActorError(err))
            })
    }
}