import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import useFetch from "../../hooks/useFetchApi";

const Home = () => {
  const { categories, products, setCategories, setProducts } = useContext(Context);
  
  const categoriesUrl = "/api/categories?populate=*";
  const productsUrl = "/api/products?populate=*";
  
  const { loading: categoriesLoading, data: categoriesData } = useFetch(categoriesUrl);
  const { loading: productsLoading, data: productsData } = useFetch(productsUrl);
  
  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [categoriesData, setCategories]);
  
  useEffect(() => {
    if (productsData) {
      setProducts(productsData);
    }
  }, [productsData, setProducts]);

  return (
    <div>
      <Banner />
      <div className="main-container" id="shop">
        <div className="layout">
            {categoriesLoading ? (<div className="loading">Loading...</div>):( <Category categories={categories} /> )}
            {productsLoading ? (<div className="loading">Loading...</div>):( <Products heading="Popular Products" products={products} /> )}
        </div>
      </div>
    </div>
  );
};

export default Home;
