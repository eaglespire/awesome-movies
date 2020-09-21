import React from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../../../../store/config";
import {MDBContainer, MDBRow} from "mdbreact";
import './actor.css'

export default function Actor(props) {
    return (
        <MDBContainer>
            <MDBRow>
                <div className="card-wrapper actor" >
                    <div className="card">
                        <div className="card-img-wrapper">
                            <img className="card-img-top"
                                 src={props.image !== null ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.image}` : `/images/noimage.png`}
                                 alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <h5 className="card-title">as {props.character}</h5>
                        </div>
                    </div>
                </div>
            </MDBRow>
        </MDBContainer>
    )
}