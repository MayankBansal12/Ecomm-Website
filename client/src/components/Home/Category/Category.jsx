import { useNavigate } from "react-router-dom";
import "./Category.scss";


const Category = ({ categories }) => {
  const navigate=useNavigate()
  return (
    <div className="category-section">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
            <span>{item.attributes.title}</span>
            <img
              src={
                process.env.REACT_APP_SERVER_URL +
                item.attributes.cover.data.attributes.url
              }
              alt="product"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
