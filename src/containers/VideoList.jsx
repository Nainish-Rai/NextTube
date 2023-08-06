import React from "react";
import VideoCard from "../components/VideoCard";
import PlaylistCard from "../components/PlaylistCard";
import ChannelCard from "../components/ChannelCard";
import { motion } from "framer-motion";

const VideoList = ({ data }) => {
  return (
    <motion.div className="flex flex-wrap sm:p-2">
      {data &&
        data.map((item, index) => {
          if (item.type == "video") {
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
                thumbnail={item.videoThumbnails && item.videoThumbnails[3].url}
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          }
          if (item.type == "playlist") {
            return (
              <PlaylistCard
                key={item.playlistId}
                title={item.title}
                channelTitle={item.author}
                channelId={item.authorId}
                videoCount={item.videoCount}
                playData={item.videos}
                playId={item.playlistId}
                // lengthText={item.lengthSeconds}
                thumbnail={item.playlistThumbnail && item.playlistThumbnail}
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          }
          if (item.type == "channel") {
            return (
              <ChannelCard
                key={index}
                title={item.author}
                author={item.author}
                authorId={item.authorId}
                subCount={item.subCount}
                videoCount={item.videoCount}
                description={item.description && item.description}
                // lengthText={item.lengthSeconds}
                thumbnail={
                  item.authorThumbnails[0].url
                    ? item.authorThumbnails[0].url
                    : item.authorThumbnails[1].url
                }
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          }
        })}
    </motion.div>
  );
};

export default VideoList;
