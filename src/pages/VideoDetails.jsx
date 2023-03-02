import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";

import "./VideoDetails.css";
import RelatedVideos from "../containers/RelatedVideos";
import CommentSection from "../containers/CommentSection";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"


const VideoDetails = () => {
  const videoId = useParams();
  let id = videoId.id;
  // console.log(id)

  const [data, setData] = useState([]);
  console.log(data)
  useEffect(() => {
    api(`videos/${id}`).then((response) => {
      setData(response);
    });
  }, [id]);

  const videoSrc = {
    type: "video",
    sources: [
      {
        src: data.formatStreams && data.formatStreams[data.formatStreams.length-2].url,
        type: "video/mp4",
        size: 360,
      },
      {
        src: data.formatStreams && data.formatStreams[data.formatStreams.length-1].url,
        type: "video/webm",
        size: 720,
      },
      
    ],
    poster: data.videoThumbnails && data.videoThumbnails[3].url,
  };

  const videoOptions = {
    autoplay: true,
    keyboard: { focused: true, global: true }
  }
 

  // const adaptiveFormatsList = data.adaptiveFormats && data.adaptiveFormats

  // let adaptiveUrlList = adaptiveFormatsList.map((item)=>item.url)
  // console.log(adaptiveUrlList)

  if (true) {
    return (
      <div className="lg:mt-14 mt-9 p-1 mx-auto w-full max-w-[90rem] flex flex-wrap justify-start gap-10 ">
        {/* Left Side */}

        <div className="leftside w-full lg:w-[65%] lg:ml-14 ">
          <div className="w-full ">
            <div className="player-wrapper lg:rounded-xl">
              {/* <ReactPlayer
          className="react-player object-cover w-full"
            controls="true"
            // style={vidStyle}
            width="100%"
            height="100%"
            // url={`https://www.youtube.com/watch?v=${id}&modestbranding=1&rel=0&showinfo=0`}
            // url={`https://www.youtube.com/watch?v=${id}&rel=0&amp;showinfo=0&amp;autoplay=1`}
            // url={`http://www.youtube.com/v/@Model.YoutubeId&rel=0&modestbranding=1`}
            // url={data.adaptiveFormats && data.adaptiveFormats[data.adaptiveFormats.length - 10].url}
            url={data.formatStreams && data.formatStreams[2].url}
            // url={data.formatStreams && data.formatStreams[1].url}
            // url="https://invidious.sethforprivacy.com/embed/hFGmHNcYWeU"
            
            //  source={data.dashUrl}
          /> */}
          <Plyr  source={videoSrc} options={videoOptions}/>
            </div>
          </div>
           
          <div>
            {data && (
              <VideoInfo
                id={id}
                title={data.title}
                author={data.author}
                description={data &&
                  data.descriptionHtml
                    ? data.descriptionHtml.innerHtml?data.descriptionHtml:data.description
                    : data.description
                }
                // description={data.description && data.description}
                viewCount={data.viewCount}
                publishedText={data.publishedText}
                channelId={data.authorId}
                authorThumbnails={
                  data.authorThumbnails && data.authorThumbnails[4].url
                }
                subCountText={data.subCountText}
              />
            )}
          </div>
          {/* comment section */}
          <div className=" hidden lg:block">
            <CommentSection videoId={id} />
          </div>
        </div>
        {/* leftside end */}
        {/* right side start */}
       
          <div className="w-full lg:w-[20%]">
            <RelatedVideos data={data.recommendedVideos} />
          </div>
        
        {/* right side end */}
      </div>
    );
  } else {
    return <div>kuch nahi hai yha</div>;
  }
};

export default VideoDetails;
