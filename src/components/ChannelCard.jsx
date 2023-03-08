import React from "react";
import { useNavigate } from "react-router-dom";

const ChannelCard = ({
  author,
  authorId,
  thumbnail,
  subCount,
  videoCount,
  description,
}) => {
  const navigate = useNavigate()
  console.log(authorId)
  return (
    <div onClick={()=>navigate(`/channel/${authorId}`)} className="w-full xl:w-1/4 lg:w-1/4 min-[700px]:w-1/3 md:w-1/2 p-3">
      {/* <h3 className="font-medium text-2xl ml-5 mb-5">Channel</h3> */}
      <div  className="bg-gray-600/10 hover:bg-gray-600/10 w-full h-full  cursor-pointer  rounded-xl flex flex-col  justify-center items-center" >
      <div className="w-full pl-5 flex items-center justify-evenly ">
        <div className=" rounded-full  ">
          <img className="object-cover rounded-full" src={thumbnail} />
        </div>
        <div className="w-1/2 -mt-1 ml-5">
          <h1 className="font-medium text-lg
          " >{author}</h1>
          <div>
            <h3 className="text-gray-400 text-sm">   {subCount < 1000000
                ? Math.floor(subCount / 1000) + "K"
                : Math.floor(subCount / 1000000) + "M"} subscribers</h3>
          {videoCount !=0 &&  <p>{videoCount} videos</p>}
          </div>
        </div>
      </div>
      <p className="font-thin text-gray-400 text-sm mt-5 px-2 pl-6">{description && description}</p>
    </div></div>
  );
};

export default ChannelCard;
