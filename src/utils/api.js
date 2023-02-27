import axios from "axios";
// const BASE_URL = "https://invidious.sethforprivacy.com/api/v1/"
const BASE_URL = "https://invidious.baczek.me/api/v1/"
const options = {
  method:'GET',
  params:{
 
  },
  header:{}
  
}

export const api = async(url) =>{
  const {data} = await axios.get(`${BASE_URL}${url}`,options)
  return data;
}

