import React from 'react'
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Actor from "../actor/Actor";
import {Link} from "react-router-dom";

const Casts = (props) => {
    return (
        <>
            <MDBContainer>
                <MDBRow className={'justify-content-center'}>
                    <MDBCol className={'my-5'}>
                        <h2 className="text-center text-white">CAST</h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    {props.casts.map(actor => {
                        return (
                            <MDBCol md={'3'} key = {actor.id}>
                                <Link to={`/person/${actor.id}`}>
                                    <Actor
                                        character = {actor.character}
                                        name = {actor.name}
                                        image = {actor.profile_path}
                                    />
                                </Link>
                            </MDBCol>
                        )
                    })}
                </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Casts