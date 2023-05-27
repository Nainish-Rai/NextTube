import React from "react";
import SkeletonRelatedCard from "./SkeletonRelatedCard";

function SkeletonRelatedVideos() {
  return (
    <div className="lg:w-[20%] w-full flex-wrap lg:flex-col mx-4">
      <div className="font-semibold ml-4">Related Videos</div>
      <div className="flex lg:flex-col flex-wrap">
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
      </div>
    </div>
  );
}

export default SkeletonRelatedVideos;
