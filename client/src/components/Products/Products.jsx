import "./Products.scss";

import Product from "../Products/Product/Product";

const Products = () => {
    return (
        <div className="products-section">
            <h2 className="section-heading">Section Heading</h2>
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
