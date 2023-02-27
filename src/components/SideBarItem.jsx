import React from 'react'

const SideBarItem = ({title,icon}) => {
  return (
    <div  className='flex gap-1 hover:bg-gray-500/10 cursor-pointer  pl-2 items-center p-1 rounded'>
    <div className=''>{icon}</div>
<div className=' text-gray-300 pl-2 cursor-pointer hover:text-gray-200 '>
    {title}</div>
</div>
  )
}

export default SideBarItem