import {
    FETCH_MOVIE_ERROR,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_LOADING,
} from "./constants";

const initState = {
    loading: false,
    error: null,
    movie : {},
    cast : [],
    castLoading: false,
    castError : false,
    directors : []
}

export const reducer = (state = initState,action) => {
    switch(action.type){
        case FETCH_MOVIE_LOADING:
            return {
                ...state,
                loading :true
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                loading:false,
                movie : action.payload
            }
        case FETCH_MOVIE_ERROR:
            return {
                ...state,
                error : true
            }
        default:
            return state
    }
}
