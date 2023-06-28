import React, { useContext } from "react";
import "./OrderSummary.scss";
import { Context } from "../../../utils/context";

const OrderSuccessPage = ({cartItem}) => {
    let totalCartPrice=0;
    const {setCartItem, setCount}=useContext(Context);
    return (
        <div className="container">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect> <path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#2eff51" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17 24L22 29L32 19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <h2>Order Successful</h2>
            <p>Thank you for your order! Your order has been successfully placed.</p>
            <div>
                <h2>Order Summary</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th width="50%">Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItem.map((item) => {
                            totalCartPrice += item.attributes.price * item.attributes.quantity;
                            return (
                                <tr key={item.id} className="cart-item">
                                    <td className="item-name">{item.attributes.title.length>40?item.attributes.title.substring(0,40)+"...":item.attributes.title}</td>
                                    <td className="item-price">&#8377;{item.attributes.price}</td>
                                    <td className="item-quantity">{item.attributes.quantity}</td>
                                    <td>{item.attributes.price * item.attributes.quantity}</td>
                                </tr>
                            )
                        })}
                        <tr className="total-amount">
                            <td colSpan="3">Total Amount Paid</td>
                            <td colSpan="1" className="price">&#8377;{totalCartPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="btn" onClick={()=>{
                setCartItem([]);
                setCount(0);
            }}>Shop More!</button>
        </div>
    );
};

export default OrderSuccessPage;
