import React from 'react'
import SkeletonVideoCard from './SkeletonVideoCard'

function SkeletonVideoList() {
  return (
    <div className="flex flex-wrap h-full lg:ml-1 md:px-2 ">
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
    <SkeletonVideoCard />
  </div>
  )
}

export default SkeletonVideoList