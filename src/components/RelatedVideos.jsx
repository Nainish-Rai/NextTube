import React, { useEffect, useState } from "react";
import dummy from "./relateddummy.json";
import VideoCard from "./VideoCard";
import RelatedCard from "./RelatedCard";
import { api } from "../utils/api";

const RelatedVideos = ({data}) => {
  
  // console.log(data)
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   api(`videos/${id}`).then((response)=>{
  //     setData(response)
  //   })
  //  },[id])
  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '0ada2dc1d0msha85c863c3551884p15cc83jsn1411fd169d03',
  //       'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch(`https://youtube-v3-alternative.p.rapidapi.com/related?id=${id.id}&geo=IN`, options)
  //     .then(response => response.json())
  //     .then(response => setData(response.data))
  //     .catch(err => console.error(err));
  // },[id])
  if(data){
    
  
  return (
    <div className="" >
        <h2 className="ml-3 font-medium">Related Videos</h2>
      <div className="flex flex-col">
        {data.map((item) => {
          return (
            <RelatedCard
              videoId={item.videoId}
              title={item.title}
              channelTitle={item.author}
              channelId={item.authorId}
              viewCount={item.viewCountText}
              // publishText={item.publishedTimeText}
              lengthText={item.lengthSeconds}
              thumbnail={item.videoThumbnails && item.videoThumbnails[3].url}
              // channelThumbnail={item.authorThumbnail}
            />
          );
        })}
      </div>
    </div>
  );}else{
    return(
      <div>s</div>
    )
  }
};

export default RelatedVideos;
