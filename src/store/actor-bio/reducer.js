import {
    FETCH_ACTOR_ERROR,
    FETCH_ACTOR_SUCCESS,
    FETCH_ACTOR_LOADING,
} from "./constants";

const initState = {
    loading: false,
    error: false,
    actor : {}
}

export const reducer = (state = initState,action) => {
    switch(action.type){
        case FETCH_ACTOR_LOADING:
            return {
                ...state,
                loading :true
            }
        case FETCH_ACTOR_SUCCESS:
            return {
                ...state,
                loading:false,
                actor : action.payload
            }
        case FETCH_ACTOR_ERROR:
            return {
                ...state,
                error : true
            }
        default:
            return state
    }
}
