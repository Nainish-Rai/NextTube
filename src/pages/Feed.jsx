import React, { useState } from "react";
import { useEffect } from "react";
import VideoCard from "../components/VideoCard";
import "./Feed.css";
import { api } from "../utils/api";
import CategoriesSection from "../components/CategoriesSection";
import FavChannelSection from "../components/FavChannelSection";

const Feed = () => {

  const [data, setData] = useState([]);


useEffect(()=>{
 api(`trending?maxResults=10`).then((response)=>setData(response))
},[])
console.log(data)
   


  return (
    <div className=" bg-black ">
      <div className="rounded-2xl mt-16 md:ml-4 lg:px-2 overflow-hidden">
      {location.pathname.match(/video/)? null : (
          <div className="categoriesbar mb-5 text-gray-400 flex  items-center  py-1 lg:pl-6 tracking-wide overflow-hidden ">
            <div className=" flex flex-wrap gap-8">

            <CategoriesSection />
            <FavChannelSection />
            </div>
          </div>
        )}
        <div className="flex flex-wrap lg:ml-1 md:px-2 ">
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
