import React from 'react';
import './About.scss'; 
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1>About</h1>
      <p>ShopSense is a basic ecommerce web store that allows users to browse and purchase products in various categories. It provides a seamless shopping experience with features such as product browsing, cart management, and checkout.</p>
      
      <p>At ShopSense, our mission is to connect customers with their desired products in a hassle-free manner. We believe in offering a curated selection of quality products across various categories, ensuring that every purchase brings joy and satisfaction to our customers.</p>
      
      <h2>Features</h2>
      <ul>
        <li><strong>Diverse Product Categories:</strong> ShopSense offers a comprehensive range of products across seven different categories, including fashion, electronics, foods and accessories. Whatever you're looking for, you'll find it here.</li>
        <li><strong>Product Details and Descriptions:</strong> We understand the importance of informed purchases. By clicking on a product, you can access detailed descriptions, specifications, and image to make well-informed buying decisions.</li>
        <li><strong>Easy Cart Management:</strong> Adding products to your cart is a breeze. Once you've found your desired items, you can conveniently manage the quantity, remove items, and review the contents of your cart, all from the navigation bar.</li>
        <li><strong>Secure Checkout:</strong> When you're ready to complete your purchase, our secure checkout process ensures that your personal and payment information is protected. Fill in your details, including shipping information and card details, and proceed confidently to place your order.</li>
      </ul>
      
      <h2>Disclaimer:</h2>
      <p>It is just a personal web project, not for commercial use. Any sensitive information related to user or card details is not stored anywhere.</p>
      
      <h2>Get in Touch</h2>
      <p>You can contact me via email at <Link className="email" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptJQGXRhtBDKQrMSSBQSTpKJHXQDBCbfGrtBKSLFlmxgvsVkCZMGvnqcbrkMWtgDgcLrN" target="_blank">mayankbansal125@gmail.com</Link> or connect with any of the social media below.</p>
    </div>
  );
};

export default About;
