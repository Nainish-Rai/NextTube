import React, { useContext, useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import PlaylistCard from "../components/PlaylistCard";
import useApi from "../utils/useApi";
import SkeletonVideoList from "../components/Placeholders/SkeletonVideoList";

const ChannelPlaylistSection = () => {
  const id = useParams();
  //  const [data,setData] = useState([])
  //  useEffect(() => {
  //   api(`channels/${id.id}/playlists`).then((response) => {
  //     setData(response.playlists);
  //   });
  // }, [id.id]);
  const { data, isLoading, isError } = useApi(`channels/${id.id}/playlists`);
  if (isError)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        "An error has occurred."
      </div>
    );
  if (isLoading) return <SkeletonVideoList />;

  return (
    <div className="flex flex-wrap">
      {data &&
        data.playlists.map((item) => {
          return (
            <PlaylistCard
              key={item.playlistId}
              title={item.title}
              channelTitle={item.author}
              channelId={item.authorId}
              videoCount={item.videoCount}
              playId={item.playlistId}
              // lengthText={item.lengthSeconds}
              thumbnail={item.playlistThumbnail && item.playlistThumbnail}
              // channelThumbnail={item.channelThumbnail[0].url}
              playData={data.playlists}
            />
          );
        })}
    </div>
  );
};

export default ChannelPlaylistSection;
