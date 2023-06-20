import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../utils/api";
import { Ref } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  // const suggestionMenu = useRef(null)
  const [searchTerm, setSearchTerm] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsToggle, setSuggestionsToggle] = useState(false);

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
      e.value = searchTerm;
      console.log(e);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log();
    }
  };

  return (
    <div className="rounded-lg md:w-1/3 w-1/3 sm:ml-0 ml-10 sm:mr-0 justify-self-center">
      <div className="rounded-lg overflow-hidden searchbar w-full mr-2 sm:mr-0 flex text-slate-300 items-center relative">
        <form onSubmit={handleSubmit} className="w-full relative">
          <input
            // ref={suggestionMenu}
            className={`searchfocus ${
              !searchTerm ? "w-44" : "w-full"
            } focus:outline-none active:outline-none active:border-none duration-500  rounded-xl focus:w-full bg-bg-secondary/95 font-semibold text-sm p-2 px-5 focus:pr-12 relative searchinput `}
            type="text"
            onFocus={() => setSuggestionsToggle(true)}
            onBlur={() => setSuggestionsToggle(false)}
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
            onKeyDown={handleKeyDown}
          />
       {/* <svg
          onClick={() => {
            searchTerm && navigate(`search/${searchTerm}`);
          }}
          className="absolute top-0 right-0 duration-100 cursor-pointer "
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
        </svg> */}
        </form>
      
      </div>
      {/* sugesstions*/}
      {suggestionsToggle && searchTerm && (
        <div className="absolute flex flex-col-reverse backdrop-blur-[3px] bg-bg-primary/60 border border-black w-[32%] ml-1  -bottom-[18.5rem] z-50 rounded-md overflow-hidden">
          <div>
            {suggestions.slice(0, 7).map((item) => {
              return (
                // mousedown is used beacuse it fires before onBlur in inputText so search get executed
                <p
                  onMouseDown={() => {
                    setSearchTerm(item);
                    navigate(`/search/${item}`);
                  }}
                  className="my-2 pl-5 px-2 cursor-pointer  hover:bg-slate-300/20 duration-150 rounded-lg mx-2 p-1 font-normal text-base"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
