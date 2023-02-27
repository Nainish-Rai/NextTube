import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import "./Feed.css";
import { api } from "../utils/api";
import xdata from "../components/Trending.json";
import VideoList from "../containers/VideoList";

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [data, setData] = useState([]);
  

  useEffect(()=>{
    api(`search?q=${searchTerm}&region=IN`).then((response)=>{
      setData(response)
    })
   },[searchTerm])
   console.log(data)
  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': "0ada2dc1d0msha85c863c3551884p15cc83jsn1411fd169d03",
  //       'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${searchTerm}&geo=IN`, options)
  //     .then(response => response.json())
  //     .then(response => setData(response.data))
  //     .catch(err => console.error(err));
  // },[searchTerm])
  
  if(data){
  return (
    <div className=" bg-bg ">
      
      <div className="rounded-2xl mt-24 md:ml-4 sm:px-2 overflow-hidden">
        <div className="p-2 ml-5"><p className=" text-base font-medium ">Search results for <span className=" text-red-500 "> {searchTerm}</span></p></div>
        <div className="flex flex-wrap p-2">
       <VideoList data={data}/>
        </div>
      </div>
    </div>
  );}else{
    return(
      <div className=" h-screen bg-bg
      
    "></div>
    )
  }
};

export default SearchFeed;
