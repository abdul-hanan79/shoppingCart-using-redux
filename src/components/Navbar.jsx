import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,

    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/CartSlice';

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);
    const { cart, totalQuantity } = useSelector((state) => state.allCart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid >
                <Link to='/'>Brand</Link>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-end gap-5'>
                        <MDBNavbarItem>
                            <Link to='/'>
                                All Products
                            </Link>
                        </MDBNavbarItem>
                        <Link to='/cart'><MDBBtn color='dark'>
                            Cart ({totalQuantity})
                        </MDBBtn>
                        </Link>


                    </MDBNavbarNav>


                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}