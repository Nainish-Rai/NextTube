import React, { useState } from "react";
import { useEffect } from "react";
import VideoCard from "../components/VideoCard";
import "./Feed.css";
import xdata from "../components/Trending.json";
import { api } from "../utils/api";
import CategoriesSection from "../components/CategoriesSection";
import FavChannelSection from "../components/FavChannelSection";

const Feed = () => {
  const dummy = xdata;
  const [data, setData] = useState([]);


useEffect(()=>{
 api(`trending?maxResults=10`).then((response)=>setData(response))
},[])
console.log(data)
   


  return (
    <div className="z-0">
      <div className="z-20 rounded-2xl mt-10 ml-1 overflow-hidden">
      {location.pathname.match(/video/)? null : (
          <div className="categoriesbar w-full mt-4 text-gray-400 flex space-x-14  px-5 items-center  py-1 z-0 tracking-wide pl-6  ">
            <CategoriesSection />
            <FavChannelSection />
          </div>
        )}
        <div className="flex flex-wrap p-1 pr-2 ">
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
                thumbnail={item.videoThumbnails[3].url}
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
