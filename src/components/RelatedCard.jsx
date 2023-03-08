import React from "react";
import { Link, useNavigate } from "react-router-dom";
import checkicon from "../assets/check.svg";
const RelatedCard = ({
  videoId,
  title,
  channelTitle,
  channelId,
  viewCount,
  publishText,
  lengthText,
  thumbnail,
  channelThumbnail,
}) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/video/${videoId}`);
  };
  const handleChannelClick = (id) => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <div className="w-full min-[700px]:w-1/3 md:w-1/2 lg:w-full p-3 cursor-pointer">
      <div
   
        className="wrapper rounded-lg overflow-hidden hover:opacity-75
      duration-150 "
      >
        {/* thumbnail */}
        <div      onClick={() => handleClick(videoId)} className="w-full aspect-video overflow-hidden">
          {thumbnail && (
            <img
              className="w-full h-full rounded-md brightness-90 object-cover hover:brightness-75 duration-200 "
              src={thumbnail}
            />
          )}
        </div>
        {/* videocard details */}
        <div onClick={() => handleClick(videoId)}  className="py-2  text-xs font-semibold text-gray-400">
          <div className="flex justify-between items-center ">
            <h3>
              {viewCount} views
              {/* {viewCount < 1000000
                  ? Math.floor(viewCount / 1000) + "K"
                  : Math.floor(viewCount / 1000000) + "M"}{" "} */}
           
            </h3>
            <h3 className="pr-1">{publishText}</h3>
          </div>
          <div className="flex flex-col mt-1 py-1">
            <div className="">
              <h1 className="text-gray-200 font-bold leading-normal tracking-wide">
                {title}
              </h1>
            </div>{" "}
           
          </div>
        </div>
        <div
              onClick={() => handleChannelClick(channelId)}
              className="flex gap-2 items-center -mt-2 text-xs font-semibold"
            >
              {/* {channelThumbnail && (
                <img
                  className="w-5 rounded-md"
                  src={channelThumbnail[0].url}
                  alt=""
                />
              )} */}
              <h2 className="text-gray-300 font-semibold hover:text-gray-500 ">
                {channelTitle}
              </h2>
              <img
                src={checkicon}
                className=" bg-gray-200 w-3 rounded-full p-[1px]"
              />
            </div>
      </div>
    </div>
  );
};

export default RelatedCard;
