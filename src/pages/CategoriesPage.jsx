import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import VideoCard from "../components/VideoCard";
const CategoriesPage = () => {
  const id = useParams();
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    api(`trending?type=${id.id}&region=IN`).then((response) => {
      setData(response);
    });
  }, [id.id]);
  return (
    <div className="flex flex-col mt-24 ">
      <div className=" mt-4 ml-6">
        <h2 className="text-gray-200">
          Top <span className="text-red-500">{id.id}</span> videos
        </h2>
      </div>
      <div className="flex flex-wrap p-2">
        {data.map((item) => {
          return (
            <VideoCard
              key={item.videoId}
              videoId={item.videoId}
              title={item.title}
              channelTitle={item.author}
              channelId={item.authorId}
              viewCount={item.viewCount}
              publishText={item.publishedText}
              lengthText={item.lengthSeconds}
              thumbnail={item.videoThumbnails[4].url}
              // channelThumbnail={item.channelThumbnail[0].url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
