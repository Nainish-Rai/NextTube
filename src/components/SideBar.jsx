import React, { useState } from "react";
import FavChannel from "./FavChannel";
import FavChannelSection from "./FavChannelSection";
import DummySidebar from "./DummySidebar";
import SideBarItem from "./SideBarItem";
import "./SideBar.css";
const SideBar = () => {
  const [mini, setMini] = useState(true);
  function handleClick() {
    let dummysidebar = document.getElementsByClassName("dummysidebar")[0].style;
    console.log(dummysidebar);
    mini ? (dummysidebar.width = "14rem") : (dummysidebar.width = "20px");
  
      setMini(() => !mini);
    
  }
  return (
    <div
      className={`sidebar ${
        mini ? "w-fit" : "w-56"
      } px-1 ml-2 z-0 flex flex-col gap-5 border-r border-gray-200  text-teal-50 `}
    >
      <div onClick={handleClick} className="-mt-7 ml-4 flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </div>
      {!mini && (
        <div className="openedsidebar flex flex-col px-4 overflow-y-auto min-h-screen w-full scrollbar-hide pr-8 mt-6 border-r border-gray-200/20  ">
          <div className="sections">
            <div className="flex flex-col gap-2">
              <SideBarItem title="Home" />
              <SideBarItem title="Trending" />
              <SideBarItem title="Shorts" />
              <SideBarItem title="Subscriptions" />
            </div>
          </div>
          <div className="uitls flex flex-col gap-2 border-t pt-3 mt-3">
            <SideBarItem title="Library" />
            <SideBarItem title="History" />
            <SideBarItem title="Watch Later" />
            <SideBarItem title="Liked Videos" />
            <SideBarItem title="Your Videos" />
          </div>
          <div className="explore border-t pt-2 mt-5 flex flex-col">
            <h2>Explore</h2>
            <div className="flex flex-col gap-2 mt-2">
              <SideBarItem title="Trending" />
              <SideBarItem title="Shopping" />
              <SideBarItem title="Music" />
              <SideBarItem title="Movies" />
              <SideBarItem title="Live" />
              <SideBarItem title="Gaming" />
              <SideBarItem title="News" />
              <SideBarItem title="Sports" />
              <SideBarItem title="Learning" />
              <SideBarItem title="Fashion & Beauty" />
            </div>
          </div>
          <div className="setting mt-5 border-t pt-3 flex flex-col gap-2">
            <SideBarItem title="Settings" />
            <SideBarItem title="Report History" />
            <SideBarItem title="Help" />
            <SideBarItem title="Send Feedback" />
          </div>
          <div className="footer mb-24 mt-5 border-t pt-3">
            <h2>Made with Love by Nainish</h2>
            <h2>NEXTTUBE</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
