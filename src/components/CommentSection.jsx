import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import dummy from "./dummyComments.json";
import { api } from "../utils/api";
const CommentSection = (videoId) => {
  const [data, setData] = useState([]);
  const [commentCount,setCommentCount] = useState("")
  // console.log(videoId)

  useEffect(()=>{
    api(`comments/${videoId.videoId}`).then((response)=>{
      setData(response.comments)
      setCommentCount(response.commentCount)
      // console.log(response)
    
    })
   },[videoId.videoId])
  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '0ada2dc1d0msha85c863c3551884p15cc83jsn1411fd169d03',
  //       'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch(`https://youtube-v3-alternative.p.rapidapi.com/comments?id=${videoId.videoId}`, options)
  //     .then(response => response.json())
  //     .then(response => {
  //       setCommentData(response.data)
  //       setCommentCount(response.commentsCount)

  //     })
  //     .catch(err => console.error(err))
  // }, [videoId.videoId]);

  if(data){
  return (
    <div className="p-1 mt-10">
      <div>
        <h2 className="font-medium">{`${commentCount>1000?Math.floor(commentCount/1000):commentCount}k`} Comments</h2>
      </div>
      <div className="mt-5">
        {data.map((item) => {
          return (
            <CommentCard
              authorDisplayName={
                item.author
              }
              authorProfile={item.authorThumbnails &&
                item.authorThumbnails[1].url
              }
              textDisplay={item.contentHtml?item.contentHtml:item.content}
              publishedTimeText={
                item.pubishedText
              }
              likesCount={item.likeCount}
              replies={item.replies}
            />
            
          );
        })}
      </div>
    </div>
  );
  }else{
    return(
      <div>comments</div>
    )
    }
};

export default CommentSection;
