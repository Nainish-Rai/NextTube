import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import checkicon from "../assets/check.svg";
const VideoCard = ({
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
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    
    transition={{
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    }} 
      className="w-full xl:w-1/4 lg:w-1/4 min-[700px]:w-1/3 md:w-1/2 sm:w-1/2 sm:p-2 lg:p-5 cursor-pointer py-2 md:py-2"
    >
      {/* <Link to="/video/:id"> */}
      <div
        className="wrapper sm:rounded-2xl  "
      >
        {/* thumbnail */}
        <div
          onClick={() => handleClick(videoId)}
          className="relative w-full z-0"
        >
          <motion.img whileHover={{opacity:0.5  }}  transition={{duration:0.2}}
            className=" brightness-100 relative lg:rounded-xl  aspect-video shadow-[0_6px_15px_5px_rgba(0,0,0,0.5)]   object-cover   w-full h-full"
            src={thumbnail}
          />
          {lengthText != "0" && (
            <div className="absolute text-xs font-semibold rounded bg-bg bg-opacity-80 py-1 px-2 bottom-2 right-2">
              <p>
                {Math.floor(lengthText / 60)}:{lengthText % 60}
              </p>
            </div>
          )}
        </div>
        {/* videocard details */}
        <div className="py-4 px-2 md:px-0  text-xs font-medium text-gray-400 z-10 ">
          <div className="flex justify-between items-center ">
            <h3>
              {viewCount < 1000000
                ? Math.floor(viewCount / 1000) + "K"
                : Math.floor(viewCount / 1000000) + "M"}{" "}
              views
            </h3>
            <h3 className="pr-1">{publishText}</h3>
          </div>
          <div className="flex flex-col mt-1 py-1">
            <div className="" onClick={() => handleClick(videoId)}>
              <h1 className="text-gray-200 leading-normal tracking-wide">
                {title}
              </h1>
            </div>
            <div
              onClick={() => handleChannelClick(channelId)}
              className=" flex gap-2 items-center mt-2 "
            >
              {channelThumbnail && (
                <img className="w-5 rounded-md" src={channelThumbnail} alt="" />
              )}
              <h2 className="text-slate-300 text-xs hover:text-gray-500 ">
                {channelTitle}
              </h2>
              <img
                src={checkicon}
                className=" bg-gray-200 w-3 rounded-full p-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </motion.div>
  );
};

export default VideoCard;
