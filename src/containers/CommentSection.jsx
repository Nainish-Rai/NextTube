import React, { useEffect, useState } from "react";
import CommentCard from "../components/CommentCard";

import { api } from "../utils/api";
const CommentSection = (videoId) => {
  const [data, setData] = useState([]);
  const [commentCount, setCommentCount] = useState("");
  // console.log(videoId)

  useEffect(() => {
    api(`comments/${videoId.videoId}`).then((response) => {
      setData(response.comments);
      setCommentCount(response.commentCount);
      // console.log(response)
    });
  }, [videoId.videoId]);

  if (data) {
    return (
      <div className="p-1 mt-10">
        <div>
          <h2 className="font-medium">
            {`${
              commentCount > 1000
                ? Math.floor(commentCount / 1000)
                : commentCount
            }k`}{" "}
            Comments
          </h2>
        </div>
        <div className="mt-5">
          {data.map((item, index) => {
            return (
              <CommentCard
                key={index}
                authorDisplayName={item.author}
                authorProfile={
                  item.authorThumbnails && item.authorThumbnails[1].url
                }
                textDisplay={item.contentHtml ? item.contentHtml : item.content}
                publishedTimeText={item.pubishedText}
                likesCount={item.likeCount}
                replies={item.replies}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>comments</div>;
  }
};

export default CommentSection;
