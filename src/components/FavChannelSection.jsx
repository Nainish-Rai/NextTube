import React from 'react'
import FavChannel from './FavChannel'

const FavChannelSection = () => {
  return (
    <div className="favchannel  flex  items-center gap-4 h-full pb-1 md:border-l border-gray-200/50 md:pl-10 pl-4">
      <h1 
      className='font-semibold text-sm pr-5'>Featured Channels</h1>
    <FavChannel channelId="UCNJcSUSzUeFm8W9P7UUlSeQ" channelThumbnail="https://yt3.googleusercontent.com/ytc/AL5GRJUXTpfOB3f9ZiAw1bX9w2MkfO24C7J9SbBkqiS1Lw=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UCMiJRAwDNSNzuYeN2uWa0pA" channelThumbnail="https://yt3.googleusercontent.com/Ikb1C4ih2VMvfjma8OO5b39JnHL2CQcQgksB_I7TM-gGA3ERTY589OeLKCYyRQQO0nkE54-f=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UCAov2BBv1ZJav0c_yHEciAw" channelThumbnail="https://yt3.googleusercontent.com/ytc/AL5GRJVMk-lx1UVNsFd_zmdG15MDfbJXMBslqi17jmJX9g=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UC0rE2qq81of4fojo-KhO5rg" channelThumbnail="https://yt3.googleusercontent.com/ytc/AL5GRJWrmnbivN3S96UAKtX5YJFUAJNbqOnNCZEiaF_Pag=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
    <FavChannel channelId="UCRijo3ddMTht_IHyNSNXpNQ" channelThumbnail="https://yt3.googleusercontent.com/ytc/AL5GRJVdEnUyNNPVUQzeUAB0EFmP_cNCJWUX9qnBwAdesA=s176-c-k-c0x00ffffff-no-rj" handleClick="" />
  
  </div>
  )
}

export default FavChannelSection