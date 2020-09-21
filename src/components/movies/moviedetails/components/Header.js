import React from 'react'
import {MDBCol, MDBContainer, MDBJumbotron, MDBRow, MDBSimpleChart} from "mdbreact";
import MovieInfoBar from "./movie-info-bar/MovieInfoBar";
import {convertMoney} from "../../../../store/utility";
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from "../../../../store/config";
//import './header.css'
import '../../../banner/banner.css'

const Header = (props) => {
    console.log(props)
    const {
        backdrop_path,
        poster_path,
        runtime,
        original_title,
        overview,
        vote_average
    } = props.movie;
    return (
        <MDBRow className={'no-gutters mt-n3 justify-content-center'}>
            <MDBCol md={'12'}>
                <MDBJumbotron style={{ padding: 0 }} fluid>
                    <MDBCol
                        className="text-white text-center  px-4  img-gradient movie_detail_header"
                        style={{
                           backgroundImage: `url(${props.image})`,
                            //background:`linear-gradient(rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path})`,
                            backgroundRepeat:'no-repeat',
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                           // color:'#FFF'
                        }}
                    >
                        <MDBCol className="py-5 ">
                            <MDBContainer>
                                <div className="row no-gutters">
                                    <div
                                        className="col-md-3 d-flex align-items-end justify-content-center"
                                        style = {{
                                            border:'1px solid #4B515D',
                                            overflow: 'hidden',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundImage: `url(${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path})`
                                        }}
                                    >
                                        <p>Runtime : {runtime} mins</p>
                                    </div>
                                    <div
                                        className="col-md-9 "
                                        style = {{
                                            border:'1px solid #ccc',
                                            backgroundColor:`rgba(62, 69, 81, 0.3)`
                                        }}
                                    >
                                        <h1 className="card-title white-text">{original_title}</h1>
                                        <h3 className="card-title white-text">
                                            OVERVIEW
                                        </h3>
                                        <h5 className="card-text">
                                            {overview}
                                        </h5>
                                        <h6 className="card-title white-text">IMDB RATING</h6>
                                        <MDBSimpleChart
                                            width={100}
                                            height={100}
                                            strokeWidth={3}
                                            percent={vote_average * 10}
                                            strokeColor={vote_average <= 4.99 ? "#FF0000" : '#4FB64E'}
                                            labelFontWeight="300"
                                            labelColor="#FFF"
                                        />

                                       {props.directors.length > 1 ?
                                            (<h3 className="card-title white-text mt-2">DIRECTORS</h3>)
                                            :
                                            (<h3 className="card-title white-text mt-2">DIRECTOR</h3>)
                                        }
                                        {props.directors.map(director => (<p className={'card-text'} key={director.id}>{director.name}</p>))}
                                    </div>
                                </div>
                            </MDBContainer>
                        </MDBCol>
                    </MDBCol>
                </MDBJumbotron>
            </MDBCol>
            <MDBCol md={'12'} className={'mt-n5'}>
                <MovieInfoBar
                    status = {props.movie.status}
                    revenue = {convertMoney(props.movie.revenue)}
                    budget = {convertMoney(props.movie.budget)}
                    release_date = {props.movie.release_date}
                />
            </MDBCol>
        </MDBRow>
    )
}
export default Header