import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow className={'text-center'}>
                    <MDBCol md="12">
                        <h5 className="title">AwesomeMovies</h5>
                        <p>
                            The Best movie search app ever
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://eaglespire.com"> eaglespire.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;