import React,{ useState } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBNavLink
} from 'mdbreact'
import {Link} from "react-router-dom";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <MDBNavbar color="unique-color-dark" dark expand="md" className={'sticky-top'}>
            <MDBNavbarBrand className={'py-3 px-5'} href={'/'}>
                <img src="/images/awesome_moviez.png" alt="" width={'150'}  className="img-fluid"/>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={() => setOpen(!open)} right />
            <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem >
                        <MDBNavLink to="/" disabled>Tv Series</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink to="/" disabled>Discover</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem >
                        <MDBNavLink to="/" disabled>Trending</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    )
}
export default NavBar