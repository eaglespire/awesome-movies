import {
    FETCH_RECOMMENDED_ERROR,
    FETCH_RECOMMENDED_LOADING,
    FETCH_RECOMMENDED_SUCCESS,
} from "./constants";

const initState = {
    loading: false,
    error: false,
    movies: []
}

export const reducer = (state = initState,action) => {
    switch(action.type){
        case FETCH_RECOMMENDED_LOADING:
            return {
                ...state,
                loading :true
            }
        case FETCH_RECOMMENDED_SUCCESS:
            return {
                ...state,
                loading:false,
                movies : action.payload,
            }
        case FETCH_RECOMMENDED_ERROR:
            return {
                ...state,
                error : true
            }
        default:
            return state
    }
}
