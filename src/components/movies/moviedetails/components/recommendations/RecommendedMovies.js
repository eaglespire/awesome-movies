import React from 'react'
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {Link} from "react-router-dom";
import ThumbNail from "../../../thumbnail/ThumbNail";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

 function RecommendedMovies(props){
    const {movies} = props;
     const showDetail = (id) => {
         props.history.push(`/movies/${id}`)
     }
    return (
        <>
            <MDBContainer className={'my-5'}>
                        <MDBRow className={'justify-content-center my-3'}>
                            <MDBCol className={'mt-5'}>
                                <h3 className="text-center text-white">
                                    The Movies Below Come Highly Recommended By People Who Watched
                                    <br/>
                                        {props.title}
                                </h3>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className={'justify-content-center'}>
                            {movies.map(movie => {
                                return (
                                    <MDBCol md={'3'} className={'my-2'} key={movie.id} onClick = {() => showDetail(movie.id)}>
                                        <ThumbNail
                                            image = {movie.poster_path}
                                        />
                                    </MDBCol>
                                )
                            })}
                        </MDBRow>
                    </MDBContainer>)

        </>
    )
}
export default withRouter(RecommendedMovies)