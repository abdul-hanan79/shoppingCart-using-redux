import React from 'react';
import {
    MDBCard,

    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,

} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/CartSlice'
export default function ProductCard() {
    const items = useSelector((state) => state.allCart.items)
    console.log("items", items);
    const dispatch = useDispatch()
    return (
        <div className='m-2'>
            <MDBContainer>
                <MDBRow className="mb-3">
                    {items.map((item) => (

                        <MDBCol key={item.id} size='md'>
                            <MDBCard>
                                <MDBCardImage src={item.img} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText>{item.price}</MDBCardText>
                                    <MDBBtn href='#' onClick={() => dispatch(addToCart(item))}>ADD TO CART</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))
                    }
                </MDBRow>
            </MDBContainer>

        </div>
    );
}