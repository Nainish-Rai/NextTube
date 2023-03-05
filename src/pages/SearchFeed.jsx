import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import "./Feed.css";
import { api } from "../utils/api";
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
  
  if(data){
  return (
    <div className=" bg-black ">
      
      <div className="rounded-2xl mt-16 lg:ml-4  overflow-hidden">
        <div className="p-2 ml-5"><p className=" text-base font-medium ">Search results for <span className=" text-red-500 "> {searchTerm}</span></p></div>
        <div className="flex flex-wrap p-2">
       <VideoList data={data}/>
        </div>
      </div>
    </div>
  );}else{
    return(
      <div className=" h-screen bg-black
      
    "></div>
    )
  }
};

export default SearchFeed;
