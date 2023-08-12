import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../utils/api";
import { Ref } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const suggestionMenu = useRef(null)
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsToggle, setSuggestionsToggle] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    api(`search/suggestions?q=${searchTerm}`).then((response) => {
      setSuggestions(response.suggestions);
    });
  }, [searchTerm]);

  console.log(suggestions);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSuggestionsToggle(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log();
    }
  };

  return (
    <div className="rounded-lg w-full sm:ml-0 ml-10 sm:mr-0 justify-self-center">
      <div className="rounded-lg overflow-hidden searchbar w-full mr-2 sm:mr-0 flex text-slate-300 items-center relative">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            // ref={suggestionMenu}
            className={`searchfocus ${
              !searchTerm
                ? location.pathname.match(/video/)
                  ? "w-full"
                  : "w-28"
                : "w-full"
            } focus:outline-none active:outline-none active:border-none duration-500 focus:w-full rounded-xl  bg-bg-secondary/95 font-semibold text-sm p-2 px-5 focus:pr-12  searchinput  `}
            type="text"
            onFocus={() => {
              setSuggestionsToggle(true);
              setIsFocus(true);
            }}
            onBlur={() => {
              setSuggestionsToggle(false);
              setIsFocus(false);
            }}
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            onKeyDown={handleKeyDown}
          />
        </form>
        <svg
          onClick={() => {
            searchTerm && navigate(`search/${searchTerm}`);
          }}
          className={`absolute right-5 ${
            isFocus || searchTerm || location.pathname.match(/video/)
              ? "null"
              : "hidden"
          } duration-1000  cursor-pointer `}
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
      {/* sugesstions*/}
      {suggestionsToggle && searchTerm && (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0 }}
            animate={{ scale: 1, height: 300 }}
            exit={{ scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              delay: 0,
              duration: 0.3,
            }}
            className="absolute flex flex-col backdrop-blur-[3px] bg-bg-primary/60 border border-black w-[32%] ml-1  -bottom-[19rem] z-50 rounded-md overflow-hidden"
          >
            <div>
              <AnimatePresence>
                {suggestions.slice(0, 7).map((item, index) => {
                  return (
                    // mousedown is used beacuse it fires before onBlur in inputText so search get executed
                    <motion.p
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      onMouseDown={() => {
                        setSearchTerm(item);
                        navigate(`/search/${item}`);
                      }}
                      className="my-2 pl-3 px-2 cursor-pointer  hover:bg-slate-300/20 duration-150 rounded-lg mx-2 p-1 font-normal text-base"
                    >
                      {item}
                    </motion.p>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default SearchBar;
