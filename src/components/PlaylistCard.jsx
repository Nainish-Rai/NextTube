import React from "react";
import { Link, useNavigate } from "react-router-dom";
import checkicon from "../assets/check.svg";
const PlaylistCard = ({
  videoId,
  title,
  channelTitle,
  channelId,
  viewCount,
  publishText,
  playId,
  playData,
  lengthText,
  thumbnail,
  videoCount,
  channelThumbnail,
}) => {
  // console.log(playData)
  const navigate = useNavigate();
  const handlePlaylistClick = (id) => {
    navigate(`/playlist/${playId}`);
  };
  const handleChannelClick = (id) => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <div className="w-full xl:w-1/4 lg:w-1/4 min-[700px]:w-1/3 md:w-1/2 p-3 cursor-pointer">
      {/* <Link to="/video/:id"> */}
      <div
        className="wrapper rounded overflow-hidden hover:opacity-75
      duration-150 "
      >
        {/* thumbnail */}
        <div onClick={() => handlePlaylistClick("")} className="relative w-full">
          <img
            className="rounded-lg brightness-95  aspect-video  hover:brightness-75 duration-200 object-cover  w-full h-full relative"
            src={playData[0].videoThumbnails? playData[0].videoThumbnails[3].url:thumbnail}
          />
          <div className="absolute bg-bg-primary/40 border-l border-gray-200/50 backdrop-blur-[2px] bottom-0 flex justify-center items-center font-semibold right-0 w-28 h-full z-10">{videoCount}</div>
          <div className="absolute text-xs font-semibold rounded bg-bg bg-opacity-80 py-1 px-2 bottom-2 right-2">
            <p>{lengthText}</p>
          </div>
        </div>
        {/* videocard details */}
        <div className="py-2  text-xs font-semibold text-gray-400">
          <div className="flex flex-col mt-1 py-1">
            <div className="" onClick={() => handlePlaylistClick("")}>
              <h1 className="text-gray-200 font-bold leading-normal tracking-wide">
                {title}
              </h1>
            </div>
            <div
              onClick={() => handleChannelClick(channelId)}
              className=" flex gap-2 items-center mt-2"
            >
              {channelThumbnail && (
                <img className="w-5 rounded-md" src={channelThumbnail} alt="" />
              )}
              <h2 className="text-gray-300 font-semibold ">{channelTitle}</h2>
              <img
                src={checkicon}
                className=" bg-gray-200 w-3 rounded-full p-[1px]"
              />
            </div>
            {/*  */}
            <div className="mt-2 w-28 hover:text-white   " onClick={()=>handlePlaylistClick("")}>View Full Playlist</div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default PlaylistCard;
