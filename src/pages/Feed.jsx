import React, { useState } from "react";
import { useEffect } from "react";
import VideoCard from "../components/VideoCard";
import "./Feed.css";
import xdata from "../components/Trending.json";
import { api } from "../utils/api";

const Feed = () => {
  const dummy = xdata;
  const [data, setData] = useState([]);


useEffect(()=>{
 api(`trending?maxResults=10`).then((response)=>setData(response))
},[])
console.log(data)
   
  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'f9cfa79e0fmsh8dd788ab27668c8p13655ajsnc142bee1819e',
  //       'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  //     }
  //   };

  //   fetch('https://youtube-v3-alternative.p.rapidapi.com/trending?geo=US&lang=en', options)
  //     .then(response => response.json())
  //     .then(response => {setData(response.data)
  //     console.log("hihi")
  //     })
  //     .catch(err => console.error(err));

  // },[hai])

  return (
    <div className="z-0">
      <div className="z-0 rounded-2xl mt-24 ml-1 overflow-hidden">
        <div className="flex flex-wrap p-1 pr-2">
          {data.map((item) => { 
            return ( item.lengthSeconds > 60  &&
              <VideoCard
                videoId={item.videoId}
                title={item.title}
                channelTitle={item.author}
                channelId={item.authorId}
                viewCount={item.viewCount}
                publishText={item.publishedText}
                lengthText={item.lengthSeconds}
                thumbnail={item.videoThumbnails[4].url}
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
