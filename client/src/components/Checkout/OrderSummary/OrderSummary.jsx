import React, { useContext } from "react";
import { Context } from "../../../utils/context";


const OrderSuccessPage = () => {
    const {cartItem}=useContext(Context);

    return (
        <div className="container">
            <h2>Order Successful</h2>
            <p>Thank you for your order! Your order has been successfully placed.</p>
            <div>
                <h2>Order Summary</h2>
                {cartItem.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3 className="item-name">{item.attributes.title}</h3>
                        <p className="item-price">Price: ${item.attributes.price}</p>
                        <p className="item-quantity">Quantity: {item.attributes.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderSuccessPage;
