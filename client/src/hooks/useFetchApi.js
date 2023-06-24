import { useState, useEffect } from "react";
import { apiFetchData } from "../utils/api";

const useFetch=(endpoint)=>{
    const [data, setdata] = useState();

    useEffect(()=>{
        makeAPICall();
    },[endpoint]);

    const makeAPICall=async()=>{
        const res=await apiFetchData(endpoint);
        setdata(res);
    };

    return {data};
};

export default useFetch;