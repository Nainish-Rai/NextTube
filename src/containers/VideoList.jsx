import React from "react";
import VideoCard from "../components/VideoCard";
import PlaylistCard from "../components/PlaylistCard";
import ChannelCard from "../components/ChannelCard";

const VideoList = ({ data }) => {
  return (
    <div className="flex flex-wrap sm:p-2">
      {data &&
        data.map((item) => {
          if (item.type == "video") {
            return (
              <VideoCard
                videoId={item.videoId}
                title={item.title}
                channelTitle={item.author}
                channelId={item.authorId}
                viewCount={item.viewCount}
                publishText={item.publishedText}
                lengthText={item.lengthSeconds}
                thumbnail={item.videoThumbnails && item.videoThumbnails[4].url}
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          }
          if (item.type == "playlist") {
            return (
              <PlaylistCard
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
                title={item.author}
                // channelTitle={item.author}
                channelId={item.authorId}
                subCount={item.subCount}
                playData={item.videos}
                description={item.description}
                // lengthText={item.lengthSeconds}
                thumbnail={item.authorThumbnails && item.authorThumbnails[4].url}
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          }
        })}
    </div>
  );
};

export default VideoList;
