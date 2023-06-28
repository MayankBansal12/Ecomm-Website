import "./CartItem.scss";

import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = () => {
    const {cartItem, removeCart, productQuantity}=useContext(Context);

    return (
        <div className="cart-products">
            { cartItem.map((item)=>(
                <div className="cart-product" key={item.id}>
                    <div className="img-container">
                        <img src={process.env.REACT_APP_SERVER_URL+item.attributes.images.data[0].attributes.url} alt="product" />
                    </div>
                    <div className="product-details">
                        <span className="name">{item.attributes.title}</span>
                        <CloseIcon className="close-btn" onClick={()=>{
                            removeCart(item)
                            // Display notification
                            toast.error('Item removed from cart!');
                        }} />
                        <div className="quantity-btn">
                            <span onClick={()=>productQuantity("decrease",item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={()=>productQuantity("increase",item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity} x</span>
                            <span>{item.attributes.price} =</span>
                            <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            )) }
        </div>
    )
};

export default CartItem;
