import React from 'react'
import {
    MDBCardTitle,
    MDBCol,
    MDBJumbotron,
    MDBRow,
} from "mdbreact";
import {IMAGE_BASE_URL,BACKDROP_SIZE} from "../../store/config";
import './banner.css'

const Banner = (props) => {
    console.log(props)
    return (
        <>
            <MDBRow className={'no-gutters'}>
                <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }} fluid>
                        <MDBCol
                            className="text-white text-center  px-4  img-gradient"
                            style={{
                                backgroundImage: `url(${props.bannerImage})`,
                                backgroundRepeat:'no-repeat',
                                backgroundSize:'cover',
                                backgroundPosition:'center',

                            }}
                        >
                            <MDBCol className="py-5">
                                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">{props.bannerTitle}</MDBCardTitle>
                                <p className="mx-5 mb-5">{props.bannerContent}</p>
                            </MDBCol>
                        </MDBCol>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </>
    )
}

export default Banner