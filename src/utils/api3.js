import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com/"
const options = {
  method: 'GET',
  params: {
    maxResults:"50"
  },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

export const api3 = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}${url}`,options)
    return data;
  }
  