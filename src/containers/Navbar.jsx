import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
const Navbar = () => {
  const location = useLocation();
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY <= 25) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // useEffect(() => {
  //   changeNavbarColor();
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeNavbarColor);
  // });
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 30,
  };
  return (
    <div
      className={`navbar w-full  md:justify-between  justify-center sticky top-0   z-30`}
    >
      <div
        className={`bg-black/70 border-black border-b backdrop-blur-[8px]  ${
          location.pathname.match(/video/)
            ? "null sm:justify-between "
            : "lg:rounded-tl-[2rem] sm:justify-start"
        }  navbar max-w-full py-2  flex items-center  w-full gap-10 md:px-4 `}
      >
        {/* logo */}
        <div className=" flex items-center ml-6">
          <Link className="flex items-end" to="/">
            <svg
              className="nexticon w-7 fill-current"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Norco</title>
              <path d="M11.055 2.707a.971.971 0 00-.688.387L0 16.78h4.049l7.27-9.597 1.927 5.74 1.42-1.875-2.578-7.676a.983.983 0 00-1.033-.666zM19.95 7.22l-7.27 9.597-1.927-5.74-1.42 1.875 2.578 7.676a.987.987 0 001.72.28L24 7.218z" />
            </svg>
            <h1 className="ml-2 font-semibold text-xl text-slate-200">
              Next<span className=" text-red-500">Tube</span>{" "}
            </h1>
          </Link>
        </div>
        {/* search bar */}
        <motion.div className="w-[33%]" layout transition={spring}>
          <SearchBar />
        </motion.div>

        {/* NAVBAR RIGHT ICONS */}

        <div
          className={`navrightsec items-center hidden justify-around
         w-56  mr-4 cursor-pointer ${
           !location.pathname.match(/video/) ? " ml-auto " : "null"
         } lg:flex`}
        >
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M7.5 4v7M4 7.5h7m-3.5 7a7 7 0 110-14 7 7 0 010 14z"
              stroke="currentColor"
            ></path>
          </svg>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              d="M7.5 13.5l-.354.354a.5.5 0 00.708 0L7.5 13.5zM1.536 7.536l-.354.353.354-.353zm5-5l-.354.353.354-.353zM7.5 3.5l-.354.354a.5.5 0 00.708 0L7.5 3.5zm.964-.964l-.353-.354.353.354zm-.61 10.61L1.889 7.182l-.707.707 5.964 5.965.708-.708zm5.257-5.964l-5.965 5.964.708.708 5.964-5.965-.707-.707zM6.182 2.889l.964.965.708-.708-.965-.964-.707.707zm1.672.965l.964-.965-.707-.707-.965.964.708.708zM10.964 1c-1.07 0-2.096.425-2.853 1.182l.707.707A3.037 3.037 0 0110.964 2V1zM14 5.036c0 .805-.32 1.577-.89 2.146l.708.707A4.036 4.036 0 0015 5.036h-1zm1 0A4.036 4.036 0 0010.964 1v1A3.036 3.036 0 0114 5.036h1zM4.036 2c.805 0 1.577.32 2.146.89l.707-.708A4.036 4.036 0 004.036 1v1zM1 5.036A3.036 3.036 0 014.036 2V1A4.036 4.036 0 000 5.036h1zm.89 2.146A3.035 3.035 0 011 5.036H0c0 1.07.425 2.096 1.182 2.853l.707-.707z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 3h7v7h-1V4.707l-6 6-3-3-4.146 4.147-.708-.708L5 6.293l3 3L13.293 4H8V3z"
              fill="currentColor"
            ></path>
          </svg>

          <div className="ml-5">
            <div className="rounded-full bg-gray-200  flex items-center justify-center  aspect-square h-7 w-7 hover:opacity-60 duration-300 text-white">
              <a
                className="font-semibold  text-gray-900 text-xs"
                href="http://github.com/nainish-rai"
                target="_blank"
              >
                NR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
