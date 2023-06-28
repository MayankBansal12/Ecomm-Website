import { useState, useEffect } from "react";
import { apiFetchData } from "../utils/api";

const useFetch=(endpoint)=>{
    const [loading, setLoading] = useState(true);
    const [data, setdata] = useState();

    const makeAPICall=async()=>{
        const res=await apiFetchData(endpoint);
        setdata(res);
        setLoading(false);
    };
    
    useEffect(()=>{
        makeAPICall();
    },[endpoint]);


    return {data, loading};
};

export default useFetch;