import "./Search.scss";

import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetchApi"

const Search = ({setShowSearch}) => {
    const [query,setQuery]=useState("");
    const navigate=useNavigate();

    const onTyping=(event)=>{
        setQuery(event.target.value);
    }
    
    let {data}=useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    if(!query.length){
        data=null;
    }
    console.log(data);

    return (
        <div className="search">
            <div className="form">
                <input type="text" autoFocus placeholder="Search for products" onChange={onTyping} />
                <span className="close-btn" onClick={()=>setShowSearch(false)}>
                    <CancelIcon />
                    <span className="text">Close</span>
                </span>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map((item)=>(
                        <div key={item.id} className="search-result-item" onClick={()=>{
                            navigate("/product/"+item.id);
                            setShowSearch(false);
                        }}>
                            <div className="img-container">
                                <img src={process.env.REACT_APP_SERVER_URL+item.attributes.images.data[0].attributes.url} alt="product" />
                            </div>
                            <div className="product-details">
                                <div className="name">{item.attributes.title}</div>
                                <div className="desc">{item.attributes.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Search;
