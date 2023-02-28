import React from 'react'
import VideoCard from '../components/VideoCard'

const ChannelLatestVideos = ({videoData}) => {
    console.log(videoData)
  return (
    <div className="flex flex-wrap">
    {videoData.map((item) => {
      return (
        <VideoCard
          videoId={item.videoId}
          title={item.title}
          channelTitle={data.author}
          channelId={id.id}
          viewCount={item.viewCount}
          publishText={item.publishedText}
          lengthText={item.lengthSeconds}
          thumbnail={item.videoThumbnails[3].url}
          channelThumbnail={data.authorThumbnails[1].url}
        />
      );
    })}
  </div>
  )
}

export default ChannelLatestVideos