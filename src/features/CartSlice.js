import { createSlice } from "@reduxjs/toolkit";
import ProductData from '../ProductData'
const initialState = {
    cart: [],
    items: ProductData,
    totalQuantity: 0,
    totalPrice: 0,

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            console.log("find", find);
            if (find >= 0) {
                state.cart[find].quantity += 1

            }
            else {

                state.cart.push(action.payload)
            }

            state.cart = state.cart.map((item) => {
                console.log("item.quantity in increement", item.totalPrice);
                if (item.id == action.payload.id) {

                    return { ...item, totalPrice: item.price * item.quantity }
                }

                return item
            })

        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("cart Total", cartTotal);
                    console.log("cart Item", cartItem);
                    const { price, quantity } = cartItem;
                    console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;

        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id != action.payload.id)
        },
        increaseQuantity: (state, action) => {
            console.log("increase Quantity is running")
            state.cart = state.cart.map((item) => {
                console.log("item.quantity in increement", item.quantity);
                if (item.id == action.payload.id) {

                    return { ...item, quantity: item.quantity + 1 }
                }

                return item
            })
            state.cart = state.cart.map((item) => {
                console.log("item.quantity in increement", item.totalPrice);
                if (item.id == action.payload.id) {

                    return { ...item, totalPrice: item.price * item.quantity }
                }

                return item
            })


            // state.totalPrice = state.cart.map((item) => {
            //     if (item.id = action.payload.id) {
            //         return { price: item.price * item.quantity }
            //     }
            // })
        },
        decreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                console.log("item.quantity in decrement", item.quantity);

                if (item.id == action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })
            state.cart = state.cart.map((item) => {
                console.log("item.quantity in increement", item.totalPrice);
                if (item.id == action.payload.id) {

                    return { ...item, totalPrice: item.price * item.quantity }
                }

                return item
            })
        }
    },
})
export const { addToCart, getCartTotal, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer