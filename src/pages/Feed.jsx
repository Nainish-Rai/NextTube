import React from "react";

import VideoCard from "../components/VideoCard";
import "./Feed.css";

import useApi from "../utils/useApi";
import SkeletonVideoCard from "../components/Placeholders/SkeletonVideoCard";

const Feed = () => {
  console.log(location.pathname + "lcoation");
  const { data, isLoading, isError } = useApi("trending?maxResults=10");
  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <div className=" bg-black h-screen overflow-scroll scrollbar-hide lg:rounded-l-[2rem] ">
        <div className="rounded-2xl mt-16 md:ml-4 lg:px-2 overflow-hidden">
          <div className="flex flex-wrap lg:ml-1 md:px-2 ">
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
            <SkeletonVideoCard />
          </div>
        </div>
      </div>
    );

  return (
    <div className="scrollbar-hide bg-black lg:rounded-l-[2rem] overflow-scroll h-screen">
      <div className="rounded-2xl  pt-12   lg:px-2">
        {data ? (
          <div className="flex flex-wrap lg:ml-1 md:px-2 ">
            {data.map((item) => {
              return (
                item.lengthSeconds > 60 && (
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
                )
              );
            })}
          </div>
        ) : (
          <div className=" text-white">Loading</div>
        )}
      </div>
    </div>
  );
};

export default Feed;
