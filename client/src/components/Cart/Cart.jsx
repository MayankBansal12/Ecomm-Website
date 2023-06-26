import { useContext } from "react";
import { Context } from "../../utils/context";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';



const Cart = ({setShowCart}) => {
    const {cartTotal, cartItem}=useContext(Context);
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
                    <button className="shop-btn">Shop Now</button>
                </div> }

                { cartItem.length && <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="sub-footer">
                                <span className="text">Total</span>
                                <span className="text total">&#8377; {cartTotal}</span>
                            </div>
                            <div className="btn">
                                <button className="checkout-btn">Checkout</button>
                            </div>
                        </div>
                    </> }
            </div>
        </div>
    )
};

export default Cart;
