import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VideoCard from "../components/VideoCard";
import RelatedCard from "../components/RelatedCard";
import { api } from "../utils/api";

const RelatedVideos = ({ data }) => {
  // console.log(data)
  // const [data,setData] = useState([])

  if (data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        }}
        className=""
      >
        <h2 className="ml-3 font-medium">Related Videos</h2>
        <div className="flex flex-wrap lg:flex-col">
          {data.map((item) => {
            return (
              <RelatedCard
                key={item.videoId}
                videoId={item.videoId}
                title={item.title}
                channelTitle={item.author}
                channelId={item.authorId}
                viewCount={item.viewCountText}
                // publishText={item.publishedTimeText}
                lengthText={item.lengthSeconds}
                thumbnail={item.videoThumbnails && item.videoThumbnails[4].url}
                // channelThumbnail={item.authorThumbnail}
              />
            );
          })}
        </div>
      </motion.div>
    );
  } else {
    return <div>s</div>;
  }
};

export default RelatedVideos;
