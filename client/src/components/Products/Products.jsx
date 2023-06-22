import "./Products.scss";

import Product from "../Products/Product/Product";

const Products = ({innerPage, heading}) => {
    return (
        <div className="products-section">
            {!innerPage && <h2 className="section-heading">{heading}</h2>} 
            <div className="products-container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default Products;
