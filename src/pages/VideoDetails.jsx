import React from "react";

import VideoInfo from "../components/VideoInfo";

import "./VideoDetails.css";
import RelatedVideos from "../containers/RelatedVideos";
import CommentSection from "../containers/CommentSection";
import { useParams } from "react-router-dom";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import useApi from "../utils/useApi";
import SkeletonRelatedVideos from "../components/Placeholders/SkeletonRelatedVideos";

import SkeletonVideoDetails from "../components/Placeholders/SkeletonVideoDetails";

const VideoDetails = () => {
  const videoId = useParams();
  let id = videoId.id;
  // console.log(id);

  const { data, isLoading, isError } = useApi(`videos/${id}`);
  if (isError) return "An error has occurred.";
  if (isLoading)
    return (
      <div className="lg:pt-20 pt-9 w-full rounded-tl-[2rem]  h-screen overflow-scroll scrollbar-hide bg-black flex flex-wrap justify-start gap-10 ">
        <SkeletonVideoDetails />
        <SkeletonRelatedVideos />
      </div>
    );

  const videoSrc = {
    type: "video",
    sources: [
      {
        src: data && data.formatStreams[data.formatStreams.length - 2].url,
        type: "video/mp4",
        size: 360,
      },
      {
        src: data && data.formatStreams[data.formatStreams.length - 1].url,
        type: "video/webm",
        size: 720,
      },
    ],
    poster: data.videoThumbnails && data.videoThumbnails[3].url,
    // tracks: [
    //   {
    //     kind: "captions",
    //     label: "English",
    //     srclang: "en",
    //     src: `https://vid.priv.au/api/v1/captions/${id}?label=English&local=true.vtt`,
    //     default: true,
    //   },
    // ],
  };

  const videoOptions = {
    autoplay: true,
    keyboard: { focused: true, global: true },
    captions: { active: true, language: "English", update: true },
  };

  if (true) {
    return (
      <div className="lg:pt-14 pt-8 mx-auto w-full lg:rounded-tl-[2rem]  flex flex-wrap bg-black h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide justify-start gap-10 ">
        {/* Left Side */}

        <div className="leftside w-full lg:w-[65%] lg:ml-10 ">
          <div className="w-full ">
            <div className="player-wrapper lg:rounded-3xl">
              <Plyr source={videoSrc} options={videoOptions} />
            </div>
          </div>

          <div>
            {data && (
              <VideoInfo
                id={id}
                title={data.title}
                author={data.author}
                description={
                  data && data.descriptionHtml
                    ? data.descriptionHtml.innerHtml
                      ? data.descriptionHtml
                      : data.description
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
