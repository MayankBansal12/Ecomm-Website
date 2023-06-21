import "./Product.scss";

import image from "../../../assets/products/earbuds-prod-3.webp";

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={image} alt="thumbnail" />
            </div>
            <div className="product-info">
                <span className="name">Product name</span>
                <span className="price">&#8377;499/-</span>
            </div>
        </div>
    );
};

export default Product;
