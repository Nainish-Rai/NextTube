import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../utils/api";
import PlaylistVideoCard from "../components/PlaylistVideoCard";

const PlaylistPage = () => {
  const id = useParams();
  const [videosData, setVideosData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    api(`playlists/${id.id}`).then((response) => {
      setVideosData(response.videos);
      setData(response);
    });
  }, [id.id]);
  console.log(data);
  return (
    <div className="flex mt-16 lg:p-2  lg:ml-5">
      {/* left */}
    
        <div className="w-1/4 h-[85%] fixed hidden lg:block rounded-xl overflow-hidden ml-6 ">
          {/* bg color image */}
          <img
            className="relative h-full w-full object-cover brightness-75  "
            src={data.playlistThumbnail}
          />
          {/* lwft deatails */}
          <div className="leftdetails absolute top-0 left-5 flex px-5 mx-auto w-[90%] h-full flex-col items-center pt-8 ">
            <div className="z-10">
              {data.videos && (
                <div className="rounded-lg overflow-hidden aspect-video w-80 ">
                  <img
                    className="object-cover w-full h-full"
                    src={data.videos[0].videoThumbnails[0].url}
                  />
                </div>
              )}
              {/* title */}
              <h2
                className="text-gray-200 font-semibold text-lg
            mt-5 "
              >
                {data.title}
              </h2>
              {/* author and details */}
              <div className="">
                <h3
                  className="font-thin text-sm
                mt-1"
                >
                  {data.author}
                </h3>
                <div className="flex text-xs mt-3 font-medium text-gray-300 opacity-80 space-x-3">
                  <h3>{data.videoCount} videos</h3>
                  <p>
                    {data.viewCount < 1000000
                      ? Math.floor(data.viewCount / 1000) + "K"
                      : Math.floor(data.viewCount / 1000000) + "M"}{" "}
                    views
                  </p>
                </div>
              </div>
              {/* buttons */}
              <div className="mt-6 flex justify-between gap-4 text-xs">
                <div className="w-1/2 py-3 px-4 bg-gray-200/90 rounded-full flex items-center text-gray-800 font-semibold justify-center cursor-pointer hover:bg-gray-300/70 duration-150 hover:text-gray-800">
                  Play All
                </div>
                <div className="w-1/2 font-semibold py-3 px-4 bg-gray-600/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500/50 duration-150">
                  Shuffle
                </div>
              </div>
              {/*  */}
              <div className="mt-7">
               {data.description && <p className="font-medium text-xs opacity-90">
                  {data.description.substring(0,300)}
                </p>}
              </div>
              {/* wrapper divend */}
            </div>
            {/* wrapperendd */}
          </div>
          {/* bg-gradient blur */}
          <div className=" backdrop-blur-lg bg-gradient-to-t from-bg  absolute top-0 bottom-0 w-full"></div>
        </div>
  
      {/* right */}
      <div className={`w-full mx-1 md:ml-1 lg:w-9/12 lg:ml-[30%] lg:pl-8  `}>
        <div className="ml-10 mt-2">
          <h1 className="font-thin text-4xl flex items-center">{data.title}  <span className="text-lg ml-4 pt-1"> - {data.videoCount} videos</span></h1>
        </div>
        <div className="w-full flex flex-col mt-5">
          {videosData.map((item) => {
            return (
              <PlaylistVideoCard
                title={item.title}
                videoId={item.videoId}
                author={item.author}
                authorId={item.authorId}
                thumbnail={item.videoThumbnails && item.videoThumbnails[3].url}
                lengthSeconds={item.lengthSeconds}
                index={item.index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
