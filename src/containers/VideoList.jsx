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
                thumbnail={item.videoThumbnails && item.videoThumbnails[2].url}
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
                author={item.author}
                authorId={item.authorId}
                subCount={item.subCount}
                videoCount={item.videoCount}
                description={item.description && item.description}
                // lengthText={item.lengthSeconds}
                thumbnail={item.authorThumbnails[0].url? item.authorThumbnails[0].url: item.authorThumbnails[1].url}
                // channelThumbnail={item.channelThumbnail[0].url}
              />
            );
          }
        })}
    </div>
  );
};

export default VideoList;
