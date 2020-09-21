import {
    FETCH_MOVIE_CAST_ERROR,
    FETCH_MOVIE_CAST_SUCCESS,
    FETCH_MOVIE_CAST_LOADING,
} from "./constants";

const initState = {
    loading: false,
    error: false,
    cast : [],
    directors : []
}

export const reducer = (state = initState,action) => {
    switch(action.type){
        case FETCH_MOVIE_CAST_LOADING:
            return {
                ...state,
                loading :true
            }
        case FETCH_MOVIE_CAST_SUCCESS:
            return {
                ...state,
                loading:false,
                cast : action.payload.cast,
                directors: action.payload.directors
            }
        case FETCH_MOVIE_CAST_ERROR:
            return {
                ...state,
                error : true
            }
        default:
            return state
    }
}
