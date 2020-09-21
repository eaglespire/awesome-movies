import {
    FETCH_POPULAR_MOVIES_SUCCESS,
    FETCH_POPULAR_MOVIES_ERROR,
    FETCH_POPULAR_MOVIES_LOADING,
    SEARCH_MOVIES_ERROR,
    SEARCH_MOVIES_LOADING,
    SEARCH_MOVIES_SUCCESS,
    LOAD_MORE_ERROR,
    LOAD_MORE_LOADING,
    LOAD_MORE_SUCCESS,
    SET_SEARCH_INPUT
} from "./constants";
import axios from 'axios'
import {API_URL, API_KEY} from "../config";

const fetchPopularMoviesLoading = () => {
    return {
        type: FETCH_POPULAR_MOVIES_LOADING
    }
}

const fetchPopularMoviesSuccess = data => {
    return {
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        payload: {
            movies: data.results,
            currentPage: data.page,
            totalPages : data.total_pages,
            bannerImage : data.results[0]
        }
    }
}
const fetchPopularMoviesError = err => {
    return {
        type: FETCH_POPULAR_MOVIES_ERROR,
        payload: err
    }
}
const searchMoviesLoading = (term) => {
    return {
        type : SEARCH_MOVIES_LOADING,
        payload:term
    }
}
const searchMoviesSuccess = data => {
    return {
        type : SEARCH_MOVIES_SUCCESS,
        payload: {
            movies: data.results,
            currentPage: data.page,
            totalPages : data.total_pages,
            bannerImage : data.results[0]
        }
    }
}
const searchMoviesError = err => {
    return {
        type : SEARCH_MOVIES_ERROR,
        payload : err
    }
}

const loadMoreLoading = () => {
    return {
        type : LOAD_MORE_LOADING,
    }
}
const loadMoreSuccess = data => {
    return {
        type : LOAD_MORE_SUCCESS,
        payload: {
            movies: data.results,
            currentPage: data.page,
            totalPages : data.total_pages,
            bannerImage : data.results[0],
        }
    }
}
const loadMoreError = err => {
    return {
        type : LOAD_MORE_ERROR,
        payload : err
    }
}


export const getPopularMovies = () => {
    return dispatch => {
        //dispatch loading action before making axios call
        dispatch(fetchPopularMoviesLoading())
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        axios.get(endpoint)
            .then(res => {
                console.log(res)
                dispatch(fetchPopularMoviesSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchPopularMoviesError(err))
            })
    }
}

export const searchInput = input => {
    return {
        type : SET_SEARCH_INPUT,
        payload : input
    }
}

export const searchMovies = searchTerm => {
    return (dispatch,getState) => {
        //const state = getState();
        //const currentPage = state.popular.currentPage;
       //const searchTerm = state.popular.searchTerm;
        let endpoint = "";

        if (searchTerm === ""){
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        }else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }

        //dispatch a loading action before making the axios call
        dispatch(searchMoviesLoading())
        axios.get(endpoint)
            .then(res => {
                console.log(res)
                dispatch(searchMoviesSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(searchMoviesError(err))
            })
    }
}

export const loadMoreMovies = () => {
    return (dispatch,getState) => {
        const state = getState();
        const currentPage = state.popular.currentPage;
        const searchTerm = state.popular.searchTerm;
        let endpoint = "";

        if (searchTerm === ""){
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage +1}`
        }else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage +1}`;
        }

        //dispatch a loading action before making the axios call
        dispatch(loadMoreLoading())
        axios.get(endpoint)
            .then(res => {
                console.log(res)
                dispatch(loadMoreSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(loadMoreError(err))
            })
    }
}