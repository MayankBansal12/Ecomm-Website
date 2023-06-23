import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-4.webp"
import CloseIcon from '@mui/icons-material/Close';

const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="product" />
                </div>
                <div className="product-details">
                    <span className="name">Product Name</span>
                    <CloseIcon className="close-btn" />
                    <div className="quantity-btn">
                        <span>-</span>
                        <span>2</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span>&#8377;3500</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
