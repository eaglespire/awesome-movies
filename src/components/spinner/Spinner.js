import React from "react";
import {MDBCol, MDBRow, MDBSpinner} from "mdbreact";

const Spinner = () => {
    return (
        <>
            <MDBRow className={'justify-content-center'}>
                <MDBCol>
                    <MDBSpinner big multicolor crazy/>
                </MDBCol>
            </MDBRow>

        </>
    );
}
export default Spinner