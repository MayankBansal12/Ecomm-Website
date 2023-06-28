import { useContext } from "react";
import { Context } from "../../utils/context";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";

// import { loadStripe } from "@stripe/stripe-js";
// import { makePayment } from "../../utils/api";

const Cart = ({setShowCart}) => {
    const {cartTotal, cartItem}=useContext(Context);

    // const stripePromise=loadStripe(process.env.REACT_APP_PUBLISH_KEY);
    // const handlePayment=async()=>{
    //     try {
    //         const stripe=await stripePromise;
    //         const res=await makePayment.post("/api/orders",{
    //             products: cartItem,
    //         })
    //         await stripe.redirectToCheckout({
    //             sessionId: res.data.stripeSession.id
    //         });    
    //     } catch (error) {
    //         console.log(error);
    //     }   
    // }

    return (
        <div className="cart-layout">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>setShowCart(false)}>
                        <CancelIcon />
                        <span className="text">Close</span>
                    </span>
                </div>

                { !cartItem.length && <div className="empty-cart">
                    <AddShoppingCartIcon />
                    <span>Your cart is looking empty. Go Shop now!</span>
                    <Link to="/category/6" className="shop-btn" onClick={()=>setShowCart(false)}>Shop Now</Link>
                </div> }

                { cartItem.length && <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="sub-footer">
                                <span className="text">Total</span>
                                <span className="text total">&#8377; {cartTotal}</span>
                            </div>
                            <div className="btn">
                                <Link to="/checkout" className="checkout-btn" onClick={()=>setShowCart(false)}>Checkout</Link>
                            </div>
                        </div>
                    </> }
            </div>
        </div>
    )
};

export default Cart;
