import React from 'react'

const MiniSideBarItem = ({icon,title}) => {
  return (
    <div className='w-5 h-5 flex bg-white/10 rounded flex-col items-center justify-center'>
        <div>{icon}</div>
        <div className='text-[10px]'>{title}</div>
    </div>
  )
}

export default MiniSideBarItem