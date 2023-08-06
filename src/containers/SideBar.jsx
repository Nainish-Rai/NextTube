import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbHome2 } from "react-icons/tb";
import { HiOutlineFire } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import SideBarItem from "../components/SideBarItem";
import "./SideBar.css";
import SidebarExploreSection from "../components/SidebarExploreSection";
import { Link } from "react-router-dom";
import MiniSideBarItem from "../components/MiniSideBarItem";
const SideBar = () => {
  const navigate = useNavigate();
  const [mini, setMini] = useState(true);
  const location = useLocation();
  const variants = {
    open: { width: 208 },
    closed: { width: 50 },
  };
  function handleClick() {
    setMini(() => !mini);
  }

  return (
    <motion.div
      initial={false}
      animate={!mini ? "open" : "closed"}
      variants={variants}
      transition={{
        type: "spring",
        ease: "easeInOut",
        stiffness: 700,
        damping: 33,
        delay: 0,
        duration: 0.15,
      }}
      className={`sidebar ${
        mini ? "w-[50px]" : "w-52"
      } px-1  z-0 max-h-screen hidden lg:block   h-screen overflow-scroll scrollbar-hide ${
        location.pathname.match(/video/)
          ? "bg-black hover:bg-[#101012]"
          : "bg-[#101012] "
      }  align-top  gap-5  text-teal-50 `}
    >
      <div
        onClick={handleClick}
        className={`mt-4 ${mini ? "ml-2" : "ml-5"} duration-300`}
      >
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
      <AnimatePresence
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        {mini && !location.pathname.match(/video/) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              stiffness: 400,
              damping: 40,
              delay: 0.15,
              duration: 0.15,
            }}
            className="flex flex-col px-1 items-center pt-5 justify-center gap-5"
          >
            <div onClick={() => navigate("/")}>
              <MiniSideBarItem
                title={"Home"}
                icon={<TbHome2 className="text-gray-200" size={20} />}
              />
            </div>
            <MiniSideBarItem
              title={"Trending"}
              icon={<HiOutlineFire className="text-gray-200" size={20} />}
            />
            <MiniSideBarItem
              title={"Library"}
              icon={<BiHeart className="text-gray-200" size={20} />}
            />
            <MiniSideBarItem
              title={"Subs"}
              icon={
                <MdOutlinePlaylistAdd className="text-gray-200" size={20} />
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence
        initial={{ height: 0 }}
        animate={{ scale: 1, height: 300 }}
        exit={{ scale: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          stiffness: 500,
          damping: 40,
          delay: 0,
          duration: 0.2,
        }}
      >
        {!mini && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "tween",
              ease: "easeInOut",

              stiffness: 400,
              damping: 40,
              delay: 0.2,
              duration: 0.15,
            }}
            className={`openedsidebar hidden lg:flex flex-col  overflow-y-auto overflow-x-hidden min-h-screen w-full scrollbar-hide px-4 ${
              location.pathname.match(/video/)
                ? "border-white/10 border-r"
                : "null "
            } `}
          >
            <div className="sections my-4">
              <div className="flex flex-col gap-2">
                <Link to="/">
                  {" "}
                  <SideBarItem
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-home-2"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                        <path d="M10 12h4v4h-4z"></path>
                      </svg>
                    }
                    title="Home"
                  />
                </Link>
                <SideBarItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-trending-up"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 17l6 -6l4 4l8 -8"></path>
                      <path d="M14 7l7 0l0 7"></path>
                    </svg>
                  }
                  title="Trending"
                />
                <SideBarItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-3d-cube-sphere"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M6 17.6l-2 -1.1v-2.5"></path>
                      <path d="M4 10v-2.5l2 -1.1"></path>
                      <path d="M10 4.1l2 -1.1l2 1.1"></path>
                      <path d="M18 6.4l2 1.1v2.5"></path>
                      <path d="M20 14v2.5l-2 1.12"></path>
                      <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
                      <path d="M12 12l2 -1.1"></path>
                      <path d="M18 8.6l2 -1.1"></path>
                      <path d="M12 12l0 2.5"></path>
                      <path d="M12 18.5l0 2.5"></path>
                      <path d="M12 12l-2 -1.12"></path>
                      <path d="M6 8.6l-2 -1.1"></path>
                    </svg>
                  }
                  title="Shorts"
                />
                <SideBarItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user-plus"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M16 11h6m-3 -3v6"></path>
                    </svg>
                  }
                  title="Subscriptions"
                />
              </div>
            </div>
            <div className="uitls flex flex-col gap-2 border-t border-gray-200/10 py-6 mt-4">
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-category"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v6h-6z"></path>
                    <path d="M14 4h6v6h-6z"></path>
                    <path d="M4 14h6v6h-6z"></path>
                    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  </svg>
                }
                title="Library"
              />
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-history"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 8l0 4l2 2"></path>
                    <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
                  </svg>
                }
                title="History"
              />
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-clock-edit"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M21 12a9 9 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052"></path>
                    <path d="M12 7v5l2 2"></path>
                    <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"></path>
                  </svg>
                }
                title="Watch Later"
              />
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-heart"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                }
                title="Liked Videos"
              />
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-video"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
                    <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                  </svg>
                }
                title="Your Videos"
              />
            </div>
            <SidebarExploreSection />
            <div className="setting  border-t border-gray-200/10 py-6 flex flex-col gap-2">
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-adjustments-horizontal"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M4 6l8 0"></path>
                    <path d="M16 6l4 0"></path>
                    <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M4 12l2 0"></path>
                    <path d="M10 12l10 0"></path>
                    <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M4 18l11 0"></path>
                    <path d="M19 18l1 0"></path>
                  </svg>
                }
                title="Settings"
              />
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-message-report"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                    <path d="M12 8l0 3"></path>
                    <path d="M12 14l0 .01"></path>
                  </svg>
                }
                title="Report History"
              />
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-help"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M12 17l0 .01"></path>
                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
                  </svg>
                }
                title="Help"
              />
              <SideBarItem
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-mail"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                }
                title="Send Feedback"
              />
            </div>
            <div className="footer mb-32  border-gray-200/10 border-t pt-6">
              <h2>Made with Love by Nainish</h2>
              <h2 className="my-4">NEXTTUBE</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SideBar;
