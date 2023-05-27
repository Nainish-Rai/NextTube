import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  useParams,
  Routes,
  useNavigate,
  Outlet,
} from "react-router-dom";
import ChannelPlaylistSection from "../containers/ChannelPlaylistSection";

import VideoCard from "../components/VideoCard";
import ChannelLatestVideos from "../containers/ChannelLatestVideos";
import useApi from "../utils/useApi";
import useSWR from "swr";
import SkeletonVideoList from "../components/Placeholders/SkeletonVideoList";
import SkeletonChannelDetails from "../components/Placeholders/SkeletonChannelDetails";

const ChannelDetail = () => {
  const id = useParams();
  const navigate = useNavigate();
  // console.log(id);

  // const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    data && setVideoData(data.latestVideos);
  }, [id.id]);
  const { data, isLoading, isError } = useApi(`channels/${id.id}`);

  if (isError) return <div className="w-full h-screen flex justify-center items-center">"An error has occurred."</div>;
  if (isLoading) return <SkeletonChannelDetails />;

  return (
    <div
      className="sm:mt-12 mt-10  md:ml-
     lg:mx-4 sm:p-2 flex flex-col"
    >
      {/* gradient banner */}
      {/* <div className="gradientBanner mb-16">
        <div className="banner w-full h-96 rounded-lg overflow-hidden brightness-90 relative">
          {data.authorBanners && (
            <img
              src={data.authorBanners && data.authorBanners[1].url}
              className="object-cover h-full"
            />
          )}
          <div className="absolute z-10 bottom-0  w-full mt-12 ml-5 flex items-center justify-between channeld">
            <div className="flex items-center">
              <div className=" h-24 w-24 rounded-full overflow-hidden">
                {data.authorThumbnails && (
                  <img
                    className="object-cover h-full w-full"
                    src={data.authorThumbnails[4].url}
                  />
                )}
              </div>
              <div className="ml-8">
                {data.author && (
                  <h1
                    className="font-semibold text-2xl
            text-gray-200 py-2 -mt-4"
                  >
                    {data.author}
                  </h1>
                )}
                {data.subCount && (
                  <p className="ml-1">
                    {data.subCount > 1000000
                      ? Math.floor(data.subCount / 1000000) + "M"
                      : Math.floor(data.subCount / 1000) + "k"}{" "}
                    subscribers
                  </p>
                )}
              </div>
              <div className="text-gray-300 font-normal text-lg ml-16">
                Total Views : {data.totalViews}
              </div>
            </div>
            <div className=" cursor-pointer hover:opacity-90 bg-red-500 p-2 px-8 rounded-full center mr-14">
              <h3 className="font-medium text-gray-300">Subscribe</h3>
            </div>
          </div>
          <div
            className="blurgrad absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-bg-secondary
        "
          ></div>
        </div>
      </div> */}
      {/* graient banner end */}
      {/* simple banner start */}
      {/* banner */}
      <div>
        <div className="banner w-full sm:h-72 h-24 rounded-t-2xl  sm:overflow-hidden brightness-90 relative">
          {data.authorBanners && (
            <img
              src={data.authorBanners && data.authorBanners[1].url}
              className="sm:object-cover h-full"
            />
          )}
          <div
            className="blurgrad absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-black
        "
          ></div>
        </div>
        {/* details */}
        <div className="mt-12 ml-5 pl-2 flex items-center justify-between channeld flex-wrap  ">
          <div className="flex items-center">
            <div className=" h-24 w-24 rounded-full overflow-hidden">
              {data.authorThumbnails && (
                <img
                  className="object-cover h-full w-full"
                  src={data.authorThumbnails[4].url}
                />
              )}
            </div>
            <div className="ml-8">
              {data.author && (
                <h1
                  className="font-semibold text-2xl
            text-gray-200 py-2 -mt-4"
                >
                  {data.author}
                </h1>
              )}
              {data.subCount && (
                <p className="ml-1">
                  {data.subCount > 1000000
                    ? Math.floor(data.subCount / 1000000) + "M"
                    : Math.floor(data.subCount / 1000) + "k"}{" "}
                  subscribers
                </p>
              )}
            </div>
            {/* <div className="text-gray-300 font-normal text-lg ml-16">
              Total Views : {data.totalViews}
            </div> */}
          </div>
          <div className=" cursor-pointer hover:opacity-90 bg-red-500 p-2 px-8 rounded-full center md:mr-14 mt-10 md:mt-0">
            <h3 className="font-medium text-gray-300">Subscribe</h3>
          </div>
        </div>
      </div>
      {/* simple banner end */}
      {/* videos */}
      <div>
        <div className={`mt-10 mb-5 ml-4 space-x-6 flex`}>
          <Link to={`/channel/${id.id}`}>
            <h2
              className={`font-medium text-xl  ${
                !location.pathname.match(/playlistsection/) && "text-red-500"
              } `}
            >
              Latest Videos
            </h2>
          </Link>
          <Link to={`/channel/${id.id}/playlistsection`}>
            <h2
              className={`font-medium text-xl  ${
                location.pathname.match(/playlistsection/) && "text-red-500"
              } `}
            >
              Playlists
            </h2>
          </Link>
          {/* <Routes>
            <Route path="/playlist/:id" exact element={<ChannelPlaylistSection />} />
          </Routes> */}
        </div>
        {/* <ChannelLatestVideos videoData={videoData}/> */}
        {!location.pathname.match(/playlistsection/) && (
          <div className="flex flex-wrap">
            {data.latestVideos.map((item) => {
              return (
                <VideoCard
                  videoId={item.videoId}
                  title={item.title}
                  channelTitle={data.author}
                  channelId={id.id}
                  viewCount={item.viewCount}
                  publishText={item.publishedText}
                  lengthText={item.lengthSeconds}
                  thumbnail={item.videoThumbnails[4].url}
                  channelThumbnail={data.authorThumbnails[1].url}
                />
              );
            })}
          </div>
        )}
        <Outlet context={[videoData]} />
      </div>
    </div>
  );
};

export default ChannelDetail;
