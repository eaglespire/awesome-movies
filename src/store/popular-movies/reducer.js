import {
    FETCH_POPULAR_MOVIES_LOADING,
    FETCH_POPULAR_MOVIES_ERROR,
    FETCH_POPULAR_MOVIES_SUCCESS,
    SEARCH_MOVIES_LOADING,
    SEARCH_MOVIES_ERROR,
    SEARCH_MOVIES_SUCCESS,
    LOAD_MORE_ERROR,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_LOADING,
    SET_SEARCH_INPUT
} from "./constants";

const initState = {
    movies: [],
    bannerImage : null,
    currentPage:0,
    totalPages : 0,
    searchTerm:'',
    loading: false,
    error: false
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POPULAR_MOVIES_LOADING:
            return {
                ...state,
                loading:true
            }
        case FETCH_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                loading:false,
                movies: action.payload.movies,
                bannerImage: state.bannerImage || action.payload.bannerImage,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages
            }
        case FETCH_POPULAR_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case SEARCH_MOVIES_LOADING:
            return {
                ...state,
                loading: true,
                movies: [],
            }
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                currentPage: action.payload.currentPage,
                movies:action.payload.movies,
                totalPages: action.payload.totalPages
            }
        case SEARCH_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error:true
            }
        case LOAD_MORE_LOADING:
            return {
                ...state,
                movies: state.movies,
                loading : true
            }
        case LOAD_MORE_SUCCESS:
            return {
                ...state,
                loading: false,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages,
                movies: state.movies.concat(action.payload.movies),
            }
        case LOAD_MORE_ERROR:
            return {
                ...state,
                loading: false,
                error:true
            }
        case SET_SEARCH_INPUT:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    }
}


