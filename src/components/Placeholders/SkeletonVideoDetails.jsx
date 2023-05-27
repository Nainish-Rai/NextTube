import React from "react";

function SkeletonVideoDetails() {
  return (
    <div className="w-full lg:w-[65%] lg:ml-14">
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex flex-col  md:items-center"
      >
        <div class="flex items-center justify-center w-full lg:h-96 aspect-video bg-gray-300 lg:rounded-3xl overflow-hidden  dark:bg-gray-700">
        <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
        </div>
        <div class="w-full pt-12">
          <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700  max-w-[800px]  mb-4"></div>
          <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700  max-w-[750px] mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[650px] mt-16 my-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[650px] my-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[650px] my-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[650px]"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default SkeletonVideoDetails;
