import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VideoInfo from "../components/VideoInfo";
import dummy from "../components/dummyvideo.json";
import "./VideoDetails.css";
import RelatedVideos from "../components/RelatedVideos";
import CommentSection from "../components/CommentSection";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";
const VideoDetails = () => {
  const videoId = useParams();
  let id = videoId.id
  // console.log(id)
  
  const [data, setData] = useState([]);
  console.log(data)
  useEffect(()=>{
    api(`videos/${id}`).then((response)=>{
      setData(response)

    })
   },[id])

  // useEffect(() => { 
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '0ada2dc1d0msha85c863c3551884p15cc83jsn1411fd169d03',
  //       'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch(`https://youtube-v3-alternative.p.rapidapi.com/video?id=${videoId.id}`, options)
  //     .then(response => response.json())
  //     .then(response => setData(response))
  //     .catch(err => console.error(err));
  // }, [id]);
  
  const vidStyle = {
    width: "1000px",
  };

  // const adaptiveFormatsList = data.adaptiveFormats && data.adaptiveFormats
  
  // let adaptiveUrlList = adaptiveFormatsList.map((item)=>item.url)
  // console.log(adaptiveUrlList)

  if(true){
  return (
    <div className="mt-20 p-1 mx-auto w-full max-w-[90rem] flex justify-start gap-10 ">
      {/* Left Side */}
      <div className="leftside w-full lg:w-[70%] ml-5 pr-5 ">
        <div className="w-full ">
        <div className="player-wrapper rounded-2xl">
          {/* <video src={`https://www.youtube.com/watch?v=${id}`}></video> */}
          <ReactPlayer
          className="react-player object-cover w-full"
            controls="true"
            // style={vidStyle}
            width="100%"
            height="100%"
            // url={`https://www.youtube.com/watch?v=${id}&modestbranding=1&rel=0&showinfo=0`}
            url={`https://www.youtube.com/watch?v=${id}&rel=0&amp;showinfo=0&amp;autoplay=1`}
            // url={`http://www.youtube.com/v/@Model.YoutubeId&rel=0&modestbranding=1`}
            // url={data.adaptiveFormats && data.adaptiveFormats[data.adaptiveFormats.length - 10].url}
            // url={adaptiveUrlList && adaptiveUrlList}
            
            //  source={data.dashUrl}
          />
          
        </div></div>
        
        <div>
          {data && (
            <VideoInfo
              id={id}
              title={data.title}
              author={data.author}
              description={data.descriptionHtml && data.descriptionHtml?data.descriptionHtml:data.description}
              // description={data.description && data.description}
              viewCount={data.viewCount}
              publishedText={data.publishedText}
              channelId={data.authorId}
              authorThumbnails={data.authorThumbnails && data.authorThumbnails[4].url}
              subCountText={data.subCountText}
       
            />
          )}
        </div>
        {/* comment section */}
        <div className="">
          <CommentSection videoId={id} />
        </div>
      </div>
      {/* leftside end */}
      {/* right side start */}
 { screen.width>600 &&   <div className=" w-[20%]">
        <RelatedVideos data={data.recommendedVideos} />
      </div>}
      {/* right side end */}
    </div>
  );}else{
    return(
      <div>kuch nahi hai yha</div>
    )
  }

};

export default VideoDetails;
