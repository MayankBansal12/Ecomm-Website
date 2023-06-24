import "./Products.scss";

import Product from "../Products/Product/Product";

const Products = ({ products, innerPage, heading }) => {
  return (
    <div className="products-section">
      {!innerPage && <h2 className="section-heading">{heading}</h2>}
      <div className="products-container">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
