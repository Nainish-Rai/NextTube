import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useApi from "../utils/useApi";

import PlaylistVideoCard from "../components/PlaylistVideoCard";

const PlaylistPage = () => {
  const id = useParams();
  const [videosData, setVideosData] = useState([]);

  const { data, isLoading, isError } = useApi(`playlists/${id.id}`);
  useEffect(() => {
    !isLoading && setVideosData(data.videos);
  }, [id.id]);

  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <div
        role="status"
        className="w-full bg-black lg:rounded-l-[2rem] h-screen flex justify-center items-center"
      >
        <svg
          aria-hidden="true"
          class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  return (
    <div className="flex  lg:p-2  bg-black h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide lg:rounded-l-[2rem]">
      <div className="pt-12 lg:pl-14">
        {/* left */}
        <div className="w-1/4 h-[85%] fixed hidden lg:block rounded-xl overflow-hidden ml-2 ">
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
                    src={data.videos[0].videoThumbnails[3].url}
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
                {data.description && (
                  <p className="font-medium text-xs opacity-90">
                    {data.description.substring(0, 300)}
                  </p>
                )}
              </div>
              {/* wrapper divend */}
            </div>
            {/* wrapperendd */}
          </div>
          {/* bg-gradient blur */}
          <div className=" backdrop-blur-lg bg-gradient-to-t from-black  absolute top-0 bottom-0 w-full"></div>
        </div>
        {/* right */}
        <div className={`w-full mx-1 md:ml-1  lg:ml-96 lg:pl-8  `}>
          <div className="ml-10 mt-2">
            <h1 className="font-thin text-4xl flex items-center">
              {data.title}{" "}
              <span className="text-lg ml-4 pt-1">
                {" "}
                - {data.videoCount} videos
              </span>
            </h1>
          </div>
          <div className="w-full flex flex-col mt-5">
            {!isLoading &&
              data &&
              data.videos.map((item) => {
                return (
                  <PlaylistVideoCard
                    key={item.videoId}
                    title={item.title}
                    videoId={item.videoId}
                    author={item.author}
                    authorId={item.authorId}
                    thumbnail={
                      item.videoThumbnails && item.videoThumbnails[3].url
                    }
                    lengthSeconds={item.lengthSeconds}
                    index={item.index}
                  />
                );
              })}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default PlaylistPage;
