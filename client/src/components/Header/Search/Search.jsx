import "./Search.scss";

import CancelIcon from '@mui/icons-material/Cancel';
import img from "../../../assets/products/speaker-prod-2.webp";

const Search = ({setShowSearch}) => {
    return (
        <div className="search">
            <div className="form">
                <input type="text" autoFocus placeholder="Search for products" />
                <span className="close-btn" onClick={()=>setShowSearch(false)}>
                    <CancelIcon />
                    <span className="text">Close</span>
                </span>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={img} alt="product" />
                        </div>
                        <div className="product-details">
                            <div className="name">Product Name</div>
                            <div className="desc">Product Description</div>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={img} alt="product" />
                        </div>
                        <div className="product-details">
                            <div className="name">Product Name</div>
                            <div className="desc">Product Description</div>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={img} alt="product" />
                        </div>
                        <div className="product-details">
                            <div className="name">Product Name</div>
                            <div className="desc">Product Description</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;
