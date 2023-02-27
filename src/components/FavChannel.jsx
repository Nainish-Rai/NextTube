import React from "react";
import "./FavChannel.css";
import { Link, useNavigate } from "react-router-dom";

const FavChannel = ({ channelId, channelThumbnail }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/video/${videoId}`);
  };
  const handleChannelClick = (id) => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <Link to={`/channel/${channelId}`}>
      <div
        className="channelcard w-7 cursor-pointer overflow-hidden "
        onlick={() => handleChannelClick("")}
      >
        <img src={channelThumbnail} />
      </div>
    </Link>
  );
};

export default FavChannel;
