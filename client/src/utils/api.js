import axios from "axios";

const params={
    headers: {
        Authorization: "bearer "+ process.env.REACT_APP_API_KEY,
    },
}

export const apiFetchData=async(url)=>{
    try {
        const {data} = await axios.get(process.env.REACT_APP_SERVER_URL + url, params);
        return data;
      }
      catch (error) {
        console.error('Error fetching data:', error);
        return error;
      }
}