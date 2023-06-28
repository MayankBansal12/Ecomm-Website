import useFetch from "../../../hooks/useFetchApi";
import Products from "../../Products/Products";


const RelatedProducts = ({id, categoryId}) => {
    const {loading, data}=useFetch(`/api/products?populate=*&filters[id][$ne]=${id}&filters[categories][id]=${categoryId}`);
    
    if(loading){
        return <div>Loading...</div>;
    }
    return (
        <>
            <Products heading="Related Products" products={data} />
        </>    
    ) 
};

export default RelatedProducts;
