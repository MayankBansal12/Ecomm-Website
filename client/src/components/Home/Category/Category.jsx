import "./Category.scss";

// import img from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
  return (
    <div className="category-section">
      <div className="categories">
        {categories?.data.map((item) => (
          <div key={item.id} className="category">
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
