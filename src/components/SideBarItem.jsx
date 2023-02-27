import React from 'react'

const SideBarItem = ({title}) => {
  return (
    <div className=' text-gray-400 cursor-pointer hover:text-gray-200 hover:bg-gray-800 hover:bg-opacity-50 rounded-md'>{title}</div>
  )
}

export default SideBarItem