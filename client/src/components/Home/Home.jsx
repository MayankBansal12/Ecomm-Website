import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { apiFetchData } from "../../utils/api";

import { Context } from "../../utils/context";

const Home = () => {
    const { categories, products, setCategories, setProducts }=useContext(Context);
    useEffect(()=>{
        getCategories();
        getProducts();
    },[]);

    const getCategories=()=>{
        apiFetchData("/api/categories?populate=*").then(res=>{
            // console.log(res.data)
            setCategories(res);
        });
    }
    const getProducts=()=>{
        apiFetchData("/api/products?populate=*").then(res=>{
            // console.log(res.data)
            setProducts(res);
        });
    }

    return (
        <div>
            <Banner />
            <div className="main-container">
                <div className="layout">
                    <Category categories={categories} />
                    <Products heading="Popular Products" products={products} />
                </div>
            </div>
        </div>
    );
};

export default Home;
