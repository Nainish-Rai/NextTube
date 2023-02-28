import React, { useContext, useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import PlaylistCard from '../components/PlaylistCard'
import { api } from '../utils/api'


const ChannelPlaylistSection = () => {

 const id = useParams()
 const [data,setData] = useState([])
 useEffect(() => {
  api(`channels/${id.id}/playlists`).then((response) => {
    setData(response.playlists);
  });
}, [id.id]);
console.log(data)
  return (
    <div className='flex flex-wrap'>
      {data && data.map((item)=>{
        return(
          <PlaylistCard
          title={item.title}
          channelTitle={item.author}
          channelId={item.authorId}
          videoCount={item.videoCount}

          playId={item.playlistId}
          // lengthText={item.lengthSeconds}
          thumbnail={item.playlistThumbnail && item.playlistThumbnail}
          // channelThumbnail={item.channelThumbnail[0].url}
          playData={data}
        />
        
        )
      })  }
    </div>

  )
}

export default ChannelPlaylistSection