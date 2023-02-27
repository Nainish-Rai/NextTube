import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com/"
const options = {
  method: 'GET',
  params: {
    maxResults:"50"
  },
  headers: {
    'X-RapidAPI-Key': '0ada2dc1d0msha85c863c3551884p15cc83jsn1411fd169d03',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

export const api3 = async(url) =>{
    const {data} = await axios.get(`${BASE_URL}${url}`,options)
    return data;
  }
  