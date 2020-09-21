import React, {useEffect} from 'react'
import Navigation from "./components/Navigation/Navigation";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getSingleMovie} from "../../../store/movie-details/actions";
import { getMovieCast } from "../../../store/cast/actions";
import {getRecommendedMovies} from "../../../store/recommendations/actions";
import {getMovieReview} from "../../../store/reviews/actions";
import Spinner from "../../spinner/Spinner";
import './movie-details.css'
import Header from "./components/Header";
import Casts from "./components/casts/Casts";
import RecommendedMovies from "./components/recommendations/RecommendedMovies";
import Reviews from "../../reviews/Reviews";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../../store/config";

const MovieDetails = (props) => {
    console.log(props)
    useEffect(() => {
        props.getMovie(props.match.params.id)
        props.getCast(props.match.params.id)
        props.getRecommendations(props.match.params.id)
        props.getReviews(props.match.params.id)
    },[])
    return (
        <>
            {props.loading && <Spinner/>}

            {props.movie && (
                <>
                    <Navigation
                        id = {props.movie.id}
                        title = {props.movie.title}
                    />
                    <Header
                        image = {props.movie.backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}` : '/images/uploads/slider-bg.jpg'}
                        movie = {props.movie}
                        directors = {props.directors}
                    />
                    {props.cast.length !== 0  && (
                        <Casts
                            casts = {props.cast}
                        />
                    )}


                    {
                        props.cast.length !== 0 && (
                            <RecommendedMovies
                                movies = {props.recommendations}
                                title = {props.movie.title}
                            />
                        )
                    }


                        {/*DISPLAY MOVIE REVIEWS HERE*/}
                    {
                        props.reviews.length !== 0 && (
                            <Reviews
                                reviews = {props.reviews}
                            />
                        )
                    }

                </>
            )}

        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        getMovie : (id) => dispatch(getSingleMovie(id)),
        getCast : (id) => dispatch(getMovieCast(id)),
        getRecommendations : (id) => dispatch(getRecommendedMovies(id)),
        getReviews : (id) => dispatch(getMovieReview(id))
    }
}
const mapStateToProps = state => {
    return {
        movie : state.movie_detail.movie,
        loading : state.movie_detail.loading,
        error : state.movie_detail.error,
        cast : state.cast.cast,
        directors : state.cast.directors,
        recommendations: state.recommendations.movies,
        reviews : state.reviews.reviews
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails))