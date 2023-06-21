import React from "react";import { motion } from "framer-motion";
import SkeletonVideoList from "./SkeletonVideoList";

function SkeletonChannelDetails() {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    }} className="bg-black h-screen overflow-scroll scrollbar-hide lg:rounded-tl-[2rem]">
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center sm:mt-12 mt-10  md:ml-
      lg:mx-4 sm:p-2 flex flex-col"
      >
        <div class="flex items-center justify-center w-full  bg-gray-300 rounded dark:bg-gray-700 sm:h-72 h-24 rounded-t-2xl  sm:overflow-hidden brightness-90">
          <svg
            class="w-12 h-12 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div class="w-full flex pt-12">
          <div class="flex w-24  aspect-square bg-gray-300 rounded-full dark:bg-gray-700   sm:overflow-hidden brightness-90"></div>
          <div className="mx-5 py-3">
            <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-4 w-36 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          </div>
        </div>

        <span class="sr-only">Loading...</span>
      </div>
      <div className={`mt-10 mb-5 ml-12 space-x-6 flex`}>
        <h2 className="font-medium text-xl text-red-500">Latest Videos</h2>
        <h2 className="font-medium text-xl">Playlists</h2>
      </div>
      <SkeletonVideoList/>
    </motion.div>
  );
}

export default SkeletonChannelDetails;
