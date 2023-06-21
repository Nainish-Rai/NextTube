import React from "react";
import SkeletonRelatedCard from "./SkeletonRelatedCard";
import { motion } from "framer-motion";

function SkeletonRelatedVideos() {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    }} className="lg:w-[20%] w-full flex-wrap lg:flex-col mx-4">
      <div className="font-semibold ml-4">Related Videos</div>
      <div className="flex lg:flex-col flex-wrap">
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
        <SkeletonRelatedCard />
      </div>
    </motion.div>
  );
}

export default SkeletonRelatedVideos;
