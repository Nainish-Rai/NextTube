

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import checkicon from "../assets/check.svg";
const PlaylistVideoCard = ({title,videoId,author,authorId,authorUrl,thumbnail,index,lengthSeconds}) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/video/${videoId}`);
  };
  const handleChannelClick = (id) => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <div className="w-full p-3 cursor-pointer hover:bg-slate-100/10 duration-150 mx-1 rounded-lg">
      {/* <Link to="/video/:id"> */}
      <div
        className="wrapper rounded-lg overflow-hidden
      duration-150 flex items-center  gap-6 h-24 pl-5 "
      >
            <div>
                {index+1}
            </div>

        {/* thumbnail */}
        <div onClick={() => handleClick(videoId)} className="relative w-48 h-full overflow-hidden rounded-lg ">
          <img
            className=" object-cover w-full h-full "
            src={thumbnail}
          />
          <div className="absolute text-xs font-semibold rounded bg-bg bg-opacity-80 py-1 px-2 bottom-2 right-2">
            <p>{Math.floor(lengthSeconds/60)}:{lengthSeconds%60}</p>
          </div>
        </div>
        {/* videocard details */}
        <div className="py-2 max-w-[70%] text-xs  font-semibold text-gray-400">
          {/* <div className="flex justify-between items-center ">
            <h3>
              {viewCount < 1000000
                ? Math.floor(viewCount / 1000) + "K"
                : Math.floor(viewCount / 1000000) + "M"}{" "}
              views
            </h3>
            <h3 className="pr-1">{publishText}</h3>
          </div> */}
          <div className="flex flex-col mt-1 py-1">
            <div className="" onClick={() => handleClick(videoId)}>
              <h1 className="text-gray-200 font-semibold leading-normal tracking-wide text-sm">
                {title}
              </h1>
            </div>
            <div
              onClick={() => handleChannelClick(authorId)}
              className=" flex gap-2 items-center mt-2"
            >
              {/* {channelThumbnail && (
                <img className="w-5 rounded-md" src={channelThumbnail} alt="" />
              )} */}
              <h2 className="text-gray-300 font-semibold ">{author}</h2>
              <img
                src={checkicon}
                className=" bg-gray-200 w-3 rounded-full p-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default PlaylistVideoCard;
