import "./Category.scss";

import img from "../../../assets/category/cat-1.jpg";

const Category = () => {
    return (
        <div className="category-section">
            <div className="categories">
                <div className="category">
                    <img src={img} alt="product" />
                </div>
                <div className="category">
                    <img src={img} alt="product" />
                </div>
                <div className="category">
                    <img src={img} alt="product" />
                </div>
                <div className="category">
                    <img src={img} alt="product" />
                </div>
            </div>
        </div>
    )
};

export default Category;
