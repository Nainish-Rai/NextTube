import React from 'react'
import { useNavigate } from 'react-router-dom'


const SideBarExploreItem = ({title,icon}) => {
const navigate = useNavigate()
    return (
    <div onClick={()=>navigate(`/search/${title}`)}  className='flex gap-1 hover:bg-slate-300/10  pl-2 cursor-pointer  items-center p-1 rounded'>
        <div className=''>{icon}</div>
    <div className=' text-gray-300 text-sm pl-2 hover:text-gray-200 '>
        {title}</div>
    </div>
  )
}

export default SideBarExploreItem