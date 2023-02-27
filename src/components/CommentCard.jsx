import React from 'react'
import { useState } from 'react'


const CommentCard = ({authorDisplayName,authorProfile,textDisplay,publishedTimeText,likesCount,replies}) => {
    const [readMore,setReadMore] = useState(true)
    const [viewReplies,setViewReplies]= useState(true)
  return (
    <div className='flex gap-4 my-5'>
        <div className='rounded-full h-10 aspect-square mt-1'>
            <img className='w-full h-full rounded-full object-center' src={authorProfile}/>
        </div>
        {/* right */}
        <div>
            <div className='flex items-center space-x-2'>
                <h1 className='font-medium text-base'>{authorDisplayName}</h1>
                <p className='font-thin text-xs
                '>{publishedTimeText}</p>
            </div>
            <div dangerouslySetInnerHTML={{__html: `${textDisplay}`.substring(0,200)}} className='opacity-80 text-sm'>
                
            </div>
            <div>
                <p className='text-xs opacity-70'>{likesCount} Likes</p>
            </div>
        </div>
    </div>
  )
}

export default CommentCard