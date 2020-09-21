import {
    FETCH_REVIEW_ERROR,
    FETCH_REVIEW_SUCCESS,
    FETCH_REVIEW_LOADING,
} from "./constants";

const initState = {
    loading: false,
    error: false,
    reviews : [],
}

export const reducer = (state = initState,action) => {
    switch(action.type){
        case FETCH_REVIEW_LOADING:
            return {
                ...state,
                loading :true
            }
        case FETCH_REVIEW_SUCCESS:
            return {
                ...state,
                loading:false,
                reviews : action.payload,
            }
        case FETCH_REVIEW_ERROR:
            return {
                ...state,
                error : true
            }
        default:
            return state
    }
}
