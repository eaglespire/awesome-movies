import React from 'react';
import { MDBCard, MDBCardImage } from 'mdbreact';
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../../store/config";

const ThumbNail = (props) => {
    //console.log(props)
    return (
            <MDBCard>
                <MDBCardImage
                    className="img-fluid"
                    src = {props.image === null ? `/images/noimage.jpg` : `${IMAGE_BASE_URL}${POSTER_SIZE}${props.image}`}
                    waves
                />
            </MDBCard>
    )
}

export default ThumbNail;