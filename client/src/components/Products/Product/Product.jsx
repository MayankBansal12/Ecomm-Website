import "./Product.scss";

const Product = ({data}) => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={process.env.REACT_APP_SERVER_URL + data?.images.data[0].attributes.url} alt="thumbnail" />
            </div>
            <div className="product-info">
                <span className="name">{data?.title}</span>
                <span className="price">&#8377;{data?.price}</span>
            </div>
        </div>
    );
};

export default Product;
