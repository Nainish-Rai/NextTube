import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../utils/api";


const SearchBar = () => {
  const navigate = useNavigate();

  const [searchTerm,setSearchTerm]=useState("")
  const [suggestions,setSuggestions]=useState([])
  const [suggestionsToggle,setSuggestionsToggle]=useState(false)

  
  useEffect(()=>{
    api(`search/suggestions?q=${searchTerm}`).then((response)=>{
      setSuggestions(response.suggestions)
      console.log(response.suggestions)
    })
   },[searchTerm])

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(searchTerm){
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log()
    }
  };
  
  return (
    <div className="rounded-lg w-1/3 mr-2 sm:mr-0">
    <div className="rounded-lg overflow-hidden searchbar w-full mr-2 sm:mr-0 flex text-slate-300 items-center relative focus:w-full">
      <form  onSubmit={handleSubmit} className=" w-full">
      <input
        className="searchfocus w-full bg-bg-secondary/95   font-semibold text-sm p-2 px-5 pr-12 "
        type="text"
        onFocus={()=>setSuggestionsToggle(true)}
        onBlur={()=>setSuggestionsToggle(false)}
        placeholder="Search..."
        onChange={(e)=>setSearchTerm(e.target.value)}
       
        onKeyDown={handleKeyDown}
      /></form>
      <svg
        onClick={()=>{setSearchTerm("");navigate(`search/${searchTerm}`);}}
        className="absolute mr-4 cursor-pointer right-0 "
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
   {suggestionsToggle  && searchTerm &&  <div className="absolute backdrop-blur-[3px] bg-bg-primary/50 border border-gray-200/[15%]  w-[32%] ml-1  -bottom-60 z-30 rounded-md">
        <div>
          {suggestions.filter((item,index)=>index<7).map((item)=>{
            return(
              <p onClick={()=>{ setSearchTerm("");navigate(`/search/${item}`);}} className="my-2 pl-5 px-2 cursor-pointer hover:text-red-500 font-normal text-base">{item}</p>
            )
          })}
        </div>
      </div>}
    </div>
  );
};

export default SearchBar;
