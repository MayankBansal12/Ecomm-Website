import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BsCartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetchApi";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity, setQuantity]=useState(1);
    const {id}= useParams();
    const {data}=useFetch(`/api/products?populate=*&filters[id]=${id}`);
    const product=data?.data[0]?.attributes;
    const { addToCart }=useContext(Context);

    const increase=()=>{
        setQuantity((prev)=>prev+1);
    }
    const decrease=()=>{
        setQuantity((prev)=>{
            if(prev!==1)
                prev=prev-1;
            return prev;
        });
    }

    return (
        <div className="single-product-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={process.env.REACT_APP_SERVER_URL+product?.images.data[0].attributes.url} alt="product" />
                    </div>
                    <div className="right">
                        <span className="name">{product?.title}</span>
                        <span className="price">&#8377; {product?.price}</span>
                        <span className="desc">{product?.desc}</span>

                        <div className="cart-buttons">
                            <div className="quantity-btn">
                                <span onClick={()=>decrease()}>-</span>
                                <span>{quantity}</span>
                                <span onClick={()=>increase()}>+</span>
                            </div>
                            <button className="cart-btn" onClick={()=>{
                                addToCart(data.data[0],quantity);
                                setQuantity(1);
                            }}>
                                <BsCartFill />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider"></span>

                        <div className="info-item">
                            <div className="text-bold">
                                Category:
                                <span>{product?.categories.data[0].attributes.title}</span>
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
                <RelatedProducts id={id} categoryId={product?.categories.data[0].id} />
            </div>
        </div>
    );
};

export default SingleProduct;
