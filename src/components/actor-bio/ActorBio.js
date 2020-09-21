import React, {useEffect} from 'react'
import './actor-bio.css'
import {MDBBox, MDBBtn, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBJumbotron, MDBRow} from "mdbreact";
import {getActor} from "../../store/actor-bio/actions";
import {connect} from 'react-redux'
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../store/config";

const ActorBio = (props) => {
    useEffect(() => {
        props.fetchActor(props.match.params.id)
    },[])
    console.log(props)
    const { biography, name, birthday, place_of_birth, deathday, known_for_department, homepage , profile_path, gender} = props.actor;

    const visitActorPage = () => {
        props.history.push(homepage)
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }}>
                        <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(/images/uploads/slider-bg.jpg)` }}>
                            <MDBRow className={'justify-content-center'}>
                                <MDBCol   className="pt-2">
                                    <img
                                            src = {profile_path !== null ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}` : `/images/uploads/image191.jpg`}
                                            alt=""
                                            className={'img-fluid rounded-circle card-img'}
                                            style = {{
                                                border: '6px solid #333',
                                                width: '150px',
                                                height:'150px'
                                            }}
                                        />
                                    <MDBCardTitle className="h5-responsive pt-1 font-bold">
                                    <span className={'mr-2 text-danger'}>FullName</span>    -  {name} , best know for {
                                        gender !== 0 ? <span className={'ml-2'}>his</span> : <span className={'ml-2'}>her</span>
                                    } {
                                        known_for_department !== '' && (
                                            <span className={'mr-2 '}>  {known_for_department} role  </span>
                                        )
                                    }
                                    </MDBCardTitle>



                                    <MDBBox>
                                        <h5 className={'text-danger'}>Date of Birth</h5>
                                        {birthday !== null ? (
                                            <p className="mx-5 ">
                                                {birthday}
                                            </p>
                                        ) : (
                                            <p className="mx-5">
                                                Information not available...
                                            </p>
                                        )}
                                    </MDBBox>

                                    <MDBBox>
                                        <h5 className={'text-danger'}>Place of Birth</h5>
                                        {place_of_birth !== null ? (
                                            <p className="mx-5 ">
                                                {place_of_birth}
                                            </p>
                                        ) : (
                                            <p className="mx-5 ">
                                                Information not available...
                                            </p>
                                        )}
                                    </MDBBox>

                                    <MDBBox>
                                        <h5 className={'text-danger'}>Biography</h5>
                                        {biography !== "" ? (
                                            <p className="mx-5">
                                                {biography}
                                            </p>
                                        ) : (
                                            <p className="mx-5">
                                                Information not available...
                                            </p>
                                        )}
                                    </MDBBox>

                                    {deathday !== null  && (
                                        <MDBBox>
                                        <h5>Date of Death</h5>
                                            <p className="mx-5 mb-5">
                                                {deathday}
                                            </p>
                                    </MDBBox>
                                    ) }

                                    {homepage !== null && (
                                        <a href={homepage} className="btn btn-secondary">
                                            <i className="fas fa-arrow-right"></i> Visit Actor's website
                                        </a>
                                    )}

                                    <MDBBox>
                                        <button className="btn btn-secondary" onClick={() => props.history.push(`/`)}>
                                            <i className="fas fa-arrow-left"></i> Back
                                        </button>
                                    </MDBBox>

                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchActor : (id) => dispatch(getActor(id))
    }
}

const mapStateToProps =  state => {
    return {
        actor : state.actor.actor,
        loading : state.actor.loading,
        error : state.actor.error
    }
}

const styles = {
    wrapper: {
        fontStyle:'italic'
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ActorBio)