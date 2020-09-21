import React from 'react'
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

function LoadMore(props){
    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <p>
                            <button onClick={() => props.loadMovies()} className={'btn btn-secondary btn-block'}>
                                Load More
                            </button>
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}


export default LoadMore