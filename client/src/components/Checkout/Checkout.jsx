import React, { useContext, useEffect, useState } from "react";
import "./Checkout.scss";
import OrderSuccessPage from "./OrderSummary/OrderSummary";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

const CheckoutPage = () => {
  const {cartItem}=useContext(Context);
  const navigate=useNavigate();

  useEffect(()=>{
    if(cartItem.length===0){
      navigate("/");
    }
  },[cartItem,navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCVC: "",
  });
  const [successPage, showPage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showPage(true);
  };

  return successPage ? (
    <OrderSuccessPage cartItem={cartItem} />
  ) : (
    <div className="checkout-section">
      <h1>Checkout</h1>
      <span className="note">
        Fill out all the details correctly and place order to confirm your
        purchase.
      </span>
      <form onSubmit={handleSubmit}>
        <div className="info-container">
          <div className="billing-info">
            <h2>Billing Information</h2>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="House No., Apartment Name, Colony, City, India- PinCode"
                required
              />
            </div>
          </div>
          <div className="payment-info">
            <h2>Payment Information</h2>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="8080 8080 8080"
                required
              />
            </div>
            <div>
              <label htmlFor="cardName">Card Name:</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="Card Name"
                required
              />
            </div>
            <div>
              <label htmlFor="cardExpiry">Card Expiry:</label>
              <input
                type="text"
                id="cardExpiry"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleInputChange}
                placeholder="11/29"
                required
              />
            </div>
            <div>
              <label htmlFor="cardCVC">Card CVC:</label>
              <input
                type="number"
                id="cardCVC"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleInputChange}
                placeholder="800"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
