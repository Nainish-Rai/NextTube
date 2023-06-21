import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
        whileHover={{ scale: 0.99, opacity: 0.7 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.1 ,type:"spring",stiffness:600,damping:20}}
        className="wrapper rounded-lg overflow-hidden  "
      >
        {/* thumbnail */}
        <div
          onClick={() => handleClick(videoId)}
          className="w-full aspect-video overflow-hidden"
        >
          {thumbnail && (
            <img
              className="w-full h-full rounded-md brightness-90 object-cover  "
              src={thumbnail}
            />
          )}
        </div>
        {/* videocard details */}
        <div
          onClick={() => handleClick(videoId)}
          className="py-2  text-xs font-semibold text-gray-400"
        >
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
              <h1 className="text-gray-200 font-medium leading-normal tracking-wide">
                {title}
              </h1>
            </div>{" "}
          </div>
        </div>
        <div
          onClick={() => handleChannelClick(channelId)}
          className="flex gap-2 items-center -mt-2 text-xs"
        >
          {/* {channelThumbnail && (
                <img
                  className="w-5 rounded-md"
                  src={channelThumbnail[0].url}
                  alt=""
                />
              )} */}
          <h2 className="text-gray-300 text-xs hover:text-gray-500 ">
            {channelTitle}
          </h2>
          <img
            src={checkicon}
            className=" bg-gray-200 w-3 rounded-full p-[1px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RelatedCard;
