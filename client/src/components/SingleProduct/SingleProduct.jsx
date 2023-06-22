import "./SingleProduct.scss";
import prod from "../../assets/products/watch-prod-3.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BsCartFill } from "react-icons/bs";

const SingleProduct = () => {
    return (
        <div className="single-product-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="product" />
                    </div>
                    <div className="right">
                        <span className="name">Product Name</span>
                        <span className="price">Price</span>
                        <span className="desc">Product Description</span>

                        <div className="cart-buttons">
                            <div className="quantity-btn">
                                <span>-</span>
                                <span>2</span>
                                <span>+</span>
                            </div>
                            <button className="cart-btn">
                                <BsCartFill />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider"></span>

                        <div className="info-item">
                            <div className="text-bold">
                                Category:
                                <span>Watches</span>
                            </div>
                            <div className="text-bold">
                                Share:
                                <span>
                                    <InstagramIcon />
                                    <TwitterIcon />
                                    <FacebookIcon />
                                    <LinkedInIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;
