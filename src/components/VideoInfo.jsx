import React, { useEffect, useState } from "react";

import { api } from "../utils/api";

import { useNavigate } from "react-router-dom";
const VideoInfo = ({
  id,
  title,
  author,
  description,
  viewCount,
  publishedText,
  channelId,
  authorThumbnails,
  subCountText
}) => {
  // const parse = require('html-react-parser')
  // const parse = HTMLReactParser()
  const [readMore, setReadMore] = useState(true);
  // const [channel, setChannel] = useState([]);
  const [subscriber,setSubscriber] = useState("")
  // console.log(channel)

  const navigate = useNavigate();
  const handleChannelClick = (id) => {
    navigate(`/channel/${channelId}`);
  };

  // let desc = parse(`${description}`)
  if (true) {
    return (
      <div className="p-2 sm:p-4 lg:p-1 mt-4">
        <div className="flex justify-between font-medium opacity-70 text-sm">
          <p>Uploaded {publishedText}</p>
          {viewCount!=0 &&<p>
            {" "}
            {viewCount < 1000000
              ? Math.floor(viewCount / 1000) + "K"
              : Math.floor(viewCount / 1000000) + "M"}{" "}
            views
          </p>}
        </div>
        <div className="mt-3">
          <h1 className="font-semibold text-gray-50 text-xl">{title}</h1>
        </div>
        <div className="flex justify-between mt-5 items-center">
          {/* Channel deatils */}
          <div onClick={()=>handleChannelClick(author)} className="flex space-x-4 items-center">
            <div className="cursor-pointer">
              {authorThumbnails && <img
                className="w-10 rounded-2xl"
                src={authorThumbnails}
              />}
            </div>
            <div className="py-1 cursor-pointer">
              <h2 className=" font-semibold text-base text-gray-300 hover:text-white">
                {author}
              </h2>
              <h3 className=" opacity-90 font-thin text-sm text-gray-300">
                {subCountText} Subscribers
              </h3>
            </div>
          </div>
            {/* channel details end */}
          <div className=" cursor-pointer hover:opacity-90 bg-red-500 p-2 px-8 rounded-full center">
            <h3 className="font-medium text-gray-300">Subscribe</h3>
          </div>
        </div>
        {/* descrpiton start */}
        <div className="mt-8">
          {/* <p className="font-thin opacity-80 text-sm">{description}</p> */}
          {description && <div   className="font-thin opacity-80 text-sm"  dangerouslySetInnerHTML={{__html:readMore ? description.substring(0, 300) : description}}>
          {/* {readMore?desc.substring(0,300):desc} */}
          {/* {desc} */}
          {/* { readMore ? description.substring(0, 300) : description} */}
          
          </div>}
          <div
              className=" cursor-pointer text-gray-100 font-semibold text-sm opacity-75"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read more" : "Read less"}
            </div>
        </div>
      </div>
    );
  } else {
    return <div>d</div>;
  }
};

export default VideoInfo;
