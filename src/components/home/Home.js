import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getPopularMovies,loadMoreMovies} from "../../store/popular-movies/actions";
import Banner from "../banner/Banner";
import Search from "../search/Search";
import {MDBContainer,MDBRow,MDBCol} from "mdbreact";
import ThumbNail from "../movies/thumbnail/ThumbNail";
import Spinner from "../spinner/Spinner";
import LoadMore from "../loadmore/LoadMore";
import {withRouter} from "react-router-dom";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../store/config";

function Home(props) {
    //let history = useHistory()
    useEffect(() => {
        props.getMovies()
    },[])

    const showDetail = (id) => {
        props.history.push(`/movies/${id}`)
    }

    console.log(props.location, props.history)
    return (
        <>
            <Banner
               // bannerImage = {props.bannerImage ? props.bannerImage.backdrop_path : '/slider-bg.jpg'}
                bannerImage = {props.bannerImage ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.bannerImage.backdrop_path}` : `/images/uploads/slider-bg.jpg`}
                bannerTitle = {props.bannerImage ? props.bannerImage.title : 'loading...'}
                bannerContent = {props.bannerImage ? props.bannerImage.overview : 'loading content, please wait...'}
            />

            {/*SEARCH COMPONENT*/}
            <Search
               // search = {props.searchMovie}
            />

            <MDBContainer>
                <MDBRow>
                    <MDBCol md={'12'}>
                        <h2 className="text-white font-weight-bold">
                            {props.searchTerm !== "" && !props.error ? ('Search Results') : null}
                            {props.searchTerm === "" && !props.error  ?  ('Popular Movies') : null}
                        </h2>
                    </MDBCol>
                </MDBRow>

                {props.movies.length !== 0  && (
                    <MDBRow>
                        {props.movies.map(movie => {
                            return (
                                <MDBCol md={'3'} className={'my-2'} key={movie.id} onClick = {() => showDetail(movie.id)}>
                                        <ThumbNail
                                            image = {movie.poster_path ? movie.poster_path : null}
                                        />
                                </MDBCol>
                            )
                        })}
                    </MDBRow>
                )}
            </MDBContainer>

            {/* Display a spinner */}
            {props.loading ? <Spinner/> : null }



            {/*display the show more button*/}
            {
                props.currentPage < props.totalPages && !props.loading
                    ?
                    <LoadMore
                        text = "Load More"
                        loadMovies = {props.loadMovies}
                    />
                    :
                    null
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        loading:state.popular.loading,
        error:state.popular.error,
        movies : state.popular.movies,
        currentPage : state.popular.currentPage,
        totalPages : state.popular.totalPages,
        bannerImage: state.popular.bannerImage,
        searchTerm : state.popular.searchTerm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getPopularMovies()),
        loadMovies : () => dispatch(loadMoreMovies()),
       // searchMovie : (term) => dispatch(searchMovies(term))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Home))
//export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home))
